/**
 * Care Process Instruments - Product Detail Dynamic Page Controller
 * Reads product slug, renders technical specs table, tabs, zoom preview, and related products
 */

document.addEventListener('DOMContentLoaded', () => {
  initProductDetail();
});

function initProductDetail() {
  const container = document.getElementById('product-detail-view');
  if (!container || !window.PRODUCTS_DATABASE) return;

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('product') || 'process-indictor-controller';

  const product = window.PRODUCTS_DATABASE.find(p => p.id === slug || p.slug === slug) 
    || window.PRODUCTS_DATABASE[0];

  renderProductDetail(product);
  initDetailTabs();
}

function renderProductDetail(product) {
  // Update document title and meta
  document.title = `${product.name} (${product.partNumber}) | Care Process Instruments`;

  // Breadcrumbs
  const breadcrumbCat = document.getElementById('detail-breadcrumb-cat');
  const breadcrumbCurrent = document.getElementById('detail-breadcrumb-current');
  if (breadcrumbCat) {
    breadcrumbCat.textContent = product.categoryName;
    breadcrumbCat.href = `products.html?category=${product.category}`;
  }
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = product.name;
  }

  // Left: Image gallery
  const imgElement = document.getElementById('detail-main-image');
  if (imgElement) {
    imgElement.src = product.image;
    imgElement.alt = `${product.name} - ${product.partNumber}`;
  }

  window.currentLoadedProduct = product;

  // Right: Meta & Header
  const titleEl = document.getElementById('detail-product-title');
  const partNoEl = document.getElementById('detail-product-partno');
  const catBadgeEl = document.getElementById('detail-product-cat-badge');
  const shortDescEl = document.getElementById('detail-short-desc');
  const bulletSpecsEl = document.getElementById('detail-bullet-specs');

  if (titleEl) titleEl.textContent = product.name;
  if (partNoEl) {
    partNoEl.innerHTML = `
      <span>PART NUMBER: ${product.partNumber}</span>
      <button type="button" class="btn-copy-part" title="Copy part number" onclick="window.copyToClipboard('${product.partNumber}', 'Copied: ${product.partNumber}')">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <span>Copy</span>
      </button>
    `;
  }
  if (catBadgeEl) catBadgeEl.textContent = product.categoryName;
  if (shortDescEl) shortDescEl.textContent = product.shortDescription;

  if (bulletSpecsEl) {
    bulletSpecsEl.innerHTML = product.keySpecs.map(s => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        <span>${s}</span>
      </li>
    `).join('');
  }

  // Buttons
  const quoteBtn = document.getElementById('detail-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      window.openProductQuote?.(product.name, product.partNumber);
    };
  }

  const directQuoteLink = document.getElementById('detail-quote-page-link');
  if (directQuoteLink) {
    directQuoteLink.href = `quote.html?product=${encodeURIComponent(product.name + ' [' + product.partNumber + ']')}`;
  }

  const datasheetBtn = document.getElementById('detail-datasheet-btn');
  if (datasheetBtn) {
    datasheetBtn.onclick = (e) => {
      e.preventDefault();
      triggerDatasheetDownload(product);
    };
  }

  // TAB 1: Overview
  const tabOverview = document.getElementById('tab-overview-content');
  if (tabOverview) {
    tabOverview.innerHTML = `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--slate-700); margin-bottom: 2rem;">
        ${product.fullDescription}
      </div>
      <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Quality & Traceability Guarantee</h4>
        <p style="font-size: 0.9rem; color: var(--slate-600); line-height: 1.6; margin-bottom: 1rem;">
          Every ${product.name} unit shipped from our Ahmedabad / Gandhinagar manufacturing center is tested against calibrated laboratory standards. Traceable calibration certificates, factory inspection reports, and comprehensive wiring schematics are supplied with every order.
        </p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${product.certifications.map(c => `<span class="tech-badge tech-badge-emerald">${c}</span>`).join('')}
          <span class="tech-badge tech-badge-slate">Made in Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    `;
  }

  // TAB 2: Specifications Table
  const tabSpecs = document.getElementById('tab-specs-content');
  if (tabSpecs) {
    const specEntries = Object.entries(product.specifications || {});
    tabSpecs.innerHTML = `
      <div class="spec-table-toolbar">
        <div>
          <span style="font-weight: 700; font-size: 1rem; color: var(--slate-900);">Factory Calibrated Technical Specifications</span>
          <span style="font-size: 0.8rem; color: var(--slate-500); margin-left: 0.5rem;">• ISO 9001:2015 Compliant</span>
        </div>
        <button type="button" class="btn-copy-specs" onclick="copyCurrentProductSpecs()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <span>Copy Specification Text</span>
        </button>
      </div>

      <div class="table-responsive">
        <div class="table-scroll-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          Swipe horizontally to view full technical specification table
        </div>
        <table class="spec-table">
          <thead>
            <tr>
              <th style="width: 35%; background: var(--slate-100);">Parameter / Characteristic</th>
              <th style="background: var(--slate-100);">Manufacturer Specification</th>
            </tr>
          </thead>
          <tbody>
            ${specEntries.map(([k, v]) => `
              <tr>
                <td class="spec-name">${k}</td>
                <td class="spec-val">${v}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // TAB 3: Applications & Sectors
  const tabApps = document.getElementById('tab-apps-content');
  if (tabApps) {
    tabApps.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        ${product.applications.map(app => `
          <div style="background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 1.25rem; display: flex; align-items: flex-start; gap: 0.75rem;">
            <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: var(--brand-primary-light); color: var(--brand-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--slate-900); margin-bottom: 0.25rem;">${app}</div>
              <div style="font-size: 0.82rem; color: var(--slate-500); line-height: 1.45;">Engineered to satisfy demanding industrial compliance and operating standards.</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // TAB 4: Engineered Features
  const tabFeatures = document.getElementById('tab-features-content');
  if (tabFeatures) {
    tabFeatures.innerHTML = `
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; padding: 0;">
        ${product.features.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.75rem; background: var(--slate-50); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--slate-200);">
            <div style="color: var(--brand-primary); margin-top: 2px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
            <div style="font-size: 0.95rem; color: var(--slate-800); font-weight: 500; line-height: 1.5;">${f}</div>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // TAB 5: Downloads
  const tabDownloads = document.getElementById('tab-downloads-content');
  if (tabDownloads) {
    tabDownloads.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--brand-primary-light); color: var(--brand-primary); display: flex; align-items: center; justify-content: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div>
              <div style="font-weight: 700; font-size: 1rem; color: var(--slate-900);">${product.name} - Technical Datasheet (PDF)</div>
              <div style="font-size: 0.8125rem; color: var(--slate-500); font-family: var(--font-mono);">${product.datasheet} • English • Rev 2026</div>
            </div>
          </div>
          <button type="button" class="btn btn-outline btn-sm" onclick="triggerDatasheetDownload(PRODUCTS_DATABASE.find(p => p.id === '${product.id}'))">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Download PDF</span>
          </button>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--slate-100); color: var(--slate-700); display: flex; align-items: center; justify-content: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <div>
              <div style="font-weight: 700; font-size: 1rem; color: var(--slate-900);">Dimensional & Wiring Diagram Blueprint</div>
              <div style="font-size: 0.8125rem; color: var(--slate-500); font-family: var(--font-mono);">Mounting Cutout, Terminal Blocks & Wiring Pinout</div>
            </div>
          </div>
          <a href="quote.html?custom=${encodeURIComponent(product.name + ' Wiring Diagram')}" class="btn btn-outline btn-sm">Request CAD / Wiring</a>
        </div>

        <!-- Engineering Blueprint Specifications Box -->
        <div style="background: var(--slate-950); border: 1px solid var(--slate-800); border-radius: var(--radius-lg); padding: 1.5rem; color: var(--white); margin-top: 0.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem; margin-bottom: 1rem;">
            <span class="tech-badge tech-badge-primary">Engineering Drawing & CAD Data</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-400);">NABL Traceable Calibration Masters</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; font-size: 0.85rem;">
            <div style="background: rgba(255,255,255,0.04); border: 1px dashed rgba(255,255,255,0.15); border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
              <div style="font-family: var(--font-mono); color: var(--brand-primary); font-size: 0.82rem; font-weight: 700; margin-bottom: 0.5rem;">[ 2D / 3D STEP MODEL ]</div>
              <p style="color: var(--slate-300); font-size: 0.8rem; margin-bottom: 1rem; line-height: 1.5;">Dimensional envelopes, process connection threads, and panel cutouts.</p>
              <a href="quote.html?custom=${encodeURIComponent(product.name + ' 3D STEP CAD File')}" class="btn btn-outline-white btn-sm" style="font-size: 0.75rem;">Request 3D CAD (.STEP)</a>
            </div>
            <div style="background: rgba(255,255,255,0.04); border: 1px dashed rgba(255,255,255,0.15); border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
              <div style="font-family: var(--font-mono); color: var(--tech-emerald); font-size: 0.82rem; font-weight: 700; margin-bottom: 0.5rem;">[ WIRING SCHEMATIC & PINOUT ]</div>
              <p style="color: var(--slate-300); font-size: 0.8rem; margin-bottom: 1rem; line-height: 1.5;">Terminal connection, 24VDC loop power, 4-20mA & RS-485 Modbus registers.</p>
              <a href="quote.html?custom=${encodeURIComponent(product.name + ' Wiring Diagram')}" class="btn btn-outline-white btn-sm" style="font-size: 0.75rem;">Request Wiring Blueprint</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 6: FAQ
  const tabFaq = document.getElementById('tab-faq-content');
  if (tabFaq) {
    tabFaq.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 1.25rem;">
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.5rem;">Q: What is the standard delivery timeline for this instrument?</h4>
          <p style="font-size: 0.88rem; color: var(--slate-600); line-height: 1.6;">
            Standard configured instruments are kept in ready stock at our Ahmedabad warehouse (over 1,000+ units in inventory) for immediate dispatch within 24 to 48 hours. Custom stem lengths, special flanges, or calibrated ranges are manufactured in 3 to 7 working days.
          </p>
        </div>
        <div style="background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 1.25rem;">
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.5rem;">Q: Are calibration certificates supplied with the instrument?</h4>
          <p style="font-size: 0.88rem; color: var(--slate-600); line-height: 1.6;">
            Yes. Every sensor, gauge, controller, and transmitter undergoes quality inspection on calibrated master instruments. A factory calibration certificate traceable to national/NABL standards is provided.
          </p>
        </div>
        <div style="background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 1.25rem;">
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.5rem;">Q: Can this instrument be exported with international shipping and packaging?</h4>
          <p style="font-size: 0.88rem; color: var(--slate-600); line-height: 1.6;">
            Yes. Care Process Instruments routinely exports to more than 15 countries worldwide including the USA, UK, UAE, Saudi Arabia, Russia, and Australia with shock-proof heavy-duty export packaging.
          </p>
        </div>
      </div>
    `;
  }

  // Related Products (from same category)
  const relatedGrid = document.getElementById('detail-related-grid');
  if (relatedGrid) {
    const related = window.PRODUCTS_DATABASE
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);

    if (related.length > 0) {
      relatedGrid.innerHTML = related.map(p => `
        <div class="product-card">
          <div class="product-card-head" style="height: 160px;">
            <img src="${p.image}" alt="${p.name}" class="product-card-img" style="max-height: 120px;">
          </div>
          <div class="product-card-body" style="padding: 1.25rem;">
            <div class="product-card-category" style="font-size: 0.7rem;">${p.categoryName}</div>
            <h4 class="product-card-title" style="font-size: 1rem;">
              <a href="product-detail.html?product=${p.id}">${p.name}</a>
            </h4>
            <div class="product-card-partno" style="font-size: 0.75rem;">${p.partNumber}</div>
            <a href="product-detail.html?product=${p.id}" class="btn btn-outline btn-sm" style="margin-top: 0.75rem; width: 100%;">
              View Specs
            </a>
          </div>
        </div>
      `).join('');
    } else {
      relatedGrid.parentElement.style.display = 'none';
    }
  }
}

window.copyCurrentProductSpecs = function() {
  if (!window.currentLoadedProduct) return;
  const p = window.currentLoadedProduct;
  let text = `Instrument: ${p.name}\nPart Number: ${p.partNumber}\nCategory: ${p.categoryName}\nManufacturer: Care Process Instruments (Ahmedabad, Gujarat, India)\n\nTechnical Specifications:\n`;
  for (const [k, v] of Object.entries(p.specifications || {})) {
    text += `- ${k}: ${v}\n`;
  }
  text += `\nCertifications: ${p.certifications.join(', ')}\n`;
  window.copyToClipboard(text, `Copied specifications for ${p.name}`);
};

function initDetailTabs() {
  const tabs = document.querySelectorAll('.detail-tab-btn');
  const panels = document.querySelectorAll('.detail-tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetId}`);
      if (targetPanel) targetPanel.classList.add('active');

      // Update URL hash without jumping
      if (history.replaceState) {
        history.replaceState(null, null, `#${targetId}`);
      }
    });
  });

  // Activate tab from URL hash if present
  const hash = window.location.hash.replace('#', '');
  if (hash && ['overview', 'specs', 'apps', 'features', 'downloads', 'faq'].includes(hash)) {
    const targetTab = document.querySelector(`.detail-tab-btn[data-tab="${hash}"]`);
    if (targetTab) targetTab.click();
  }
}

function triggerDatasheetDownload(product) {
  // Create a clean simulated datasheet download modal or notification
  window.showToast?.(`Downloading official datasheet: ${product.datasheet}`, "success");
  
  // Create printable datasheet window
  const printWin = window.open('', '_blank');
  if (!printWin) return;

  const specRows = Object.entries(product.specifications || {}).map(([k, v]) => `
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #ddd; font-weight: bold; background: #f9f9f9; width: 35%;">${k}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #ddd; font-family: monospace;">${v}</td>
    </tr>
  `).join('');

  printWin.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${product.name} - Technical Datasheet | Care Process Instruments</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1e293b; max-width: 800px; margin: 0 auto; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #D9222A; padding-bottom: 20px; margin-bottom: 30px; }
        .logo-text { font-size: 24px; font-weight: 800; color: #0f172a; }
        .logo-text span { color: #D9222A; }
        .title { font-size: 26px; font-weight: 800; margin-bottom: 6px; color: #0f172a; }
        .part { font-family: monospace; color: #D9222A; font-size: 16px; margin-bottom: 20px; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin: 25px 0; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; }
        @media print { button { display: none; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo-text">CARE <span>INSTRUMENTS</span></div>
        <div style="font-size: 12px; text-align: right; color: #64748b;">
          <strong>Care Process Instruments</strong><br>
          Ahmedabad, Gujarat, India<br>
          info@carepg.com | +91-7575808287
        </div>
      </div>
      <div class="title">${product.name}</div>
      <div class="part">PART NUMBER: ${product.partNumber}</div>
      <p style="font-size: 14px; line-height: 1.6; color: #334155;">${product.fullDescription}</p>
      <h3 style="margin-top: 30px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Technical Specifications</h3>
      <table>${specRows}</table>
      <h3 style="margin-top: 30px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Key Applications</h3>
      <ul style="font-size: 13px; line-height: 1.8; color: #334155;">
        ${product.applications.map(a => `<li>${a}</li>`).join('')}
      </ul>
      <div class="footer">
        <div>ISO 9001:2015 & CE Certified Manufacturing Unit</div>
        <div>Factory: G.I.D.C. Chhatral, Dist. Gandhinagar | Reg. Office: Subhash Bridge, Ahmedabad</div>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <button onclick="window.print()" style="padding: 10px 20px; background: #D9222A; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Print / Save as PDF</button>
      </div>
    </body>
    </html>
  `);
  printWin.document.close();
}
