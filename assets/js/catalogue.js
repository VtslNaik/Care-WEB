/**
 * Care Process Instruments - Catalogue & Faceted Filter Engine
 * Multi-category filtering, real-time search, sorting, and side-by-side comparison
 */

let currentCategory = "all";
let currentSearch = "";
let currentSort = "featured";
let activeSpecFilter = "all";
let compareList = [];

document.addEventListener('DOMContentLoaded', () => {
  initCatalogue();
});

function initCatalogue() {
  const productsGrid = document.getElementById('catalogue-products-grid');
  if (!productsGrid || !window.PRODUCTS_DATABASE) return;

  // Read URL query params (e.g. ?category=temperature or ?search=flow)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('category')) {
    currentCategory = urlParams.get('category');
  }
  if (urlParams.has('search')) {
    currentSearch = urlParams.get('search');
    const searchInput = document.getElementById('catalogue-search-input');
    if (searchInput) searchInput.value = currentSearch;
  }

  setupEventListeners();
  renderCategoryChips();
  renderProducts();
  updateCompareDrawer();
}

function setupEventListeners() {
  const searchInput = document.getElementById('catalogue-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  const sortSelect = document.getElementById('catalogue-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  const specFilterSelect = document.getElementById('catalogue-spec-filter');
  if (specFilterSelect) {
    specFilterSelect.addEventListener('change', (e) => {
      activeSpecFilter = e.target.value;
      renderProducts();
    });
  }

  // Compare modal close button
  const closeCompareBtn = document.getElementById('close-compare-modal');
  const compareModal = document.getElementById('compare-modal');
  if (closeCompareBtn && compareModal) {
    closeCompareBtn.addEventListener('click', () => {
      compareModal.classList.remove('active');
    });
    compareModal.addEventListener('click', (e) => {
      if (e.target === compareModal) compareModal.classList.remove('active');
    });
  }

  const triggerCompareModalBtn = document.getElementById('trigger-compare-modal-btn');
  if (triggerCompareModalBtn) {
    triggerCompareModalBtn.addEventListener('click', openCompareModal);
  }

  const clearCompareBtn = document.getElementById('clear-compare-btn');
  if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
      compareList = [];
      updateCompareDrawer();
      renderProducts();
      window.showToast?.("Cleared comparison list", "info");
    });
  }
}

function renderCategoryChips() {
  const chipsContainer = document.getElementById('category-chips-container');
  if (!chipsContainer || !window.PRODUCT_CATEGORIES) return;

  chipsContainer.innerHTML = window.PRODUCT_CATEGORIES.map(cat => `
    <button type="button" class="category-chip ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.name}</span>
      <span class="count">${cat.count}</span>
    </button>
  `).join('');

  chipsContainer.querySelectorAll('.category-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      chipsContainer.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat');
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('catalogue-products-grid');
  const countEl = document.getElementById('catalogue-results-count');
  if (!grid || !window.PRODUCTS_DATABASE) return;

  let filtered = window.PRODUCTS_DATABASE.filter(p => {
    // Category match
    const matchesCategory = currentCategory === "all" || p.category === currentCategory;

    // Search query match
    const query = currentSearch.toLowerCase();
    const matchesSearch = !query || (
      p.name.toLowerCase().includes(query) ||
      p.partNumber.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.keySpecs.some(s => s.toLowerCase().includes(query)) ||
      p.applications.some(a => a.toLowerCase().includes(query))
    );

    // Specification filter match
    let matchesSpec = true;
    if (activeSpecFilter === '4-20ma') {
      matchesSpec = JSON.stringify(p.specifications).toLowerCase().includes('4-20') || p.keySpecs.some(s => s.includes('4-20'));
    } else if (activeSpecFilter === 'modbus') {
      matchesSpec = JSON.stringify(p.specifications).toLowerCase().includes('modbus') || JSON.stringify(p.specifications).toLowerCase().includes('rs-485');
    } else if (activeSpecFilter === 'flameproof') {
      matchesSpec = JSON.stringify(p.specifications).toLowerCase().includes('flameproof') || p.name.toLowerCase().includes('flameproof') || p.certifications.some(c => c.toLowerCase().includes('flameproof'));
    } else if (activeSpecFilter === 'fda') {
      matchesSpec = JSON.stringify(p.specifications).toLowerCase().includes('fda') || p.certifications.some(c => c.includes('FDA'));
    }

    return matchesCategory && matchesSearch && matchesSpec;
  });

  // Sorting
  if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'name-desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentSort === 'featured') {
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${window.PRODUCTS_DATABASE.length} Instruments`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: var(--white); border-radius: var(--radius-xl); border: 1px solid var(--slate-200);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--slate-400)" stroke-width="1.5" style="margin: 0 auto 1rem auto;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.5rem;">No Instrumentation Found</h3>
        <p style="font-size: 0.9rem; color: var(--slate-600); max-width: 440px; margin: 0 auto 1.5rem auto;">
          We couldn't find any instruments matching your selected filter criteria. Care Process Instruments manufactures custom sensor solutions tailored to exact process parameters.
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center;">
          <button type="button" class="btn btn-outline btn-sm" onclick="resetFilters()">Reset Filters</button>
          <a href="quote.html" class="btn btn-primary btn-sm">Submit Custom Engineering RFQ</a>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const isCompared = compareList.includes(p.id);
    return `
      <div class="product-card" id="card-${p.id}">
        <div class="product-card-head">
          <div class="product-card-badges">
            ${p.featured ? `<span class="tech-badge tech-badge-primary">Featured</span>` : ''}
            <span class="tech-badge tech-badge-slate">${p.categoryName}</span>
          </div>

          <label class="product-compare-checkbox" title="Select to compare specifications side-by-side">
            <input type="checkbox" data-product-id="${p.id}" ${isCompared ? 'checked' : ''} onchange="toggleCompareProduct('${p.id}')">
            <span>Compare</span>
          </label>

          <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
        </div>

        <div class="product-card-body">
          <div class="product-card-category">${p.categoryName}</div>
          <h3 class="product-card-title">
            <a href="product-detail.html?product=${p.id}">${p.name}</a>
          </h3>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <div class="product-card-partno" style="margin-bottom: 0;">${p.partNumber}</div>
            <button type="button" class="btn-copy-part" title="Copy part number" onclick="window.copyToClipboard('${p.partNumber}', 'Copied: ${p.partNumber}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy</span>
            </button>
          </div>
          <p class="product-card-desc">${p.shortDescription}</p>

          <ul class="product-card-specs-list">
            ${p.keySpecs.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
          </ul>

          <div class="product-card-actions">
            <a href="product-detail.html?product=${p.id}" class="btn btn-outline btn-sm" style="width: 100%;">
              <span>View Specs</span>
            </a>
            <button type="button" class="btn btn-primary btn-sm trigger-quote-modal" data-product="${p.name} (${p.partNumber})" style="width: 100%;" onclick="openProductQuote('${p.name}', '${p.partNumber}')">
              <span>Quote</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.resetFilters = function() {
  currentCategory = "all";
  currentSearch = "";
  activeSpecFilter = "all";
  const searchInput = document.getElementById('catalogue-search-input');
  if (searchInput) searchInput.value = "";
  renderCategoryChips();
  renderProducts();
};

window.openProductQuote = function(name, partNo) {
  const modal = document.getElementById('quote-modal');
  const input = document.getElementById('modal-quote-product');
  if (modal && input) {
    input.value = `${name} [Part: ${partNo}]`;
    modal.classList.add('active');
  }
};

/* Side-by-side Product Comparison Matrix */
window.toggleCompareProduct = function(productId) {
  const idx = compareList.indexOf(productId);
  if (idx > -1) {
    compareList.splice(idx, 1);
    window.showToast?.("Removed instrument from comparison", "info");
  } else {
    if (compareList.length >= 3) {
      window.showToast?.("Maximum 3 instruments can be compared at once", "warning");
      const checkbox = document.querySelector(`input[data-product-id="${productId}"]`);
      if (checkbox) checkbox.checked = false;
      return;
    }
    compareList.push(productId);
    window.showToast?.("Added to comparison matrix", "success");
  }

  updateCompareDrawer();
};

function updateCompareDrawer() {
  const drawer = document.getElementById('compare-drawer');
  const container = document.getElementById('compare-thumbs-container');
  const countBadge = document.getElementById('compare-count-badge');
  if (!drawer || !container) return;

  if (compareList.length === 0) {
    drawer.classList.remove('active');
    return;
  }

  drawer.classList.add('active');
  if (countBadge) countBadge.textContent = compareList.length;

  const products = compareList.map(id => window.PRODUCTS_DATABASE.find(p => p.id === id)).filter(Boolean);

  container.innerHTML = products.map(p => `
    <div class="compare-thumb-box">
      <img src="${p.image}" alt="${p.name}">
      <span style="font-weight: 600; max-width: 140px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</span>
      <button type="button" onclick="toggleCompareProduct('${p.id}')" style="background: none; border: none; color: var(--slate-400); cursor: pointer; padding: 2px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
  `).join('');
}

function openCompareModal() {
  const modal = document.getElementById('compare-modal');
  const body = document.getElementById('compare-modal-content');
  if (!modal || !body || compareList.length === 0) return;

  const products = compareList.map(id => window.PRODUCTS_DATABASE.find(p => p.id === id)).filter(Boolean);

  // Collect unique spec keys across compared products
  const allSpecKeys = new Set();
  products.forEach(p => {
    Object.keys(p.specifications || {}).forEach(k => allSpecKeys.add(k));
  });

  body.innerHTML = `
    <div class="table-responsive">
      <div class="table-scroll-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        Swipe horizontally to compare all parameter columns
      </div>
      <table class="spec-table" style="min-width: 650px;">
        <thead>
          <tr>
            <th style="width: 25%; background: var(--slate-100);">Parameter / Spec</th>
            ${products.map(p => `
              <th style="width: ${75 / products.length}%; text-align: center; vertical-align: top;">
                <img src="${p.image}" alt="${p.name}" style="height: 70px; margin: 0 auto 0.5rem auto; object-fit: contain;">
                <div style="font-size: 0.95rem; font-weight: 700; color: var(--slate-900);">${p.name}</div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-primary);">${p.partNumber}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="spec-name">Category</td>
            ${products.map(p => `<td style="text-align: center;"><span class="tech-badge tech-badge-slate">${p.categoryName}</span></td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Key Accuracies & Ranges</td>
            ${products.map(p => `
              <td>
                <ul style="list-style: none; font-size: 0.8rem; text-align: left; padding: 0;">
                  ${p.keySpecs.map(s => `<li style="margin-bottom: 4px;">• ${s}</li>`).join('')}
                </ul>
              </td>
            `).join('')}
          </tr>
          ${Array.from(allSpecKeys).map(key => `
            <tr>
              <td class="spec-name">${key}</td>
              ${products.map(p => `
                <td class="spec-val" style="text-align: center; font-size: 0.82rem;">
                  ${(p.specifications && p.specifications[key]) ? p.specifications[key] : '<span style="color: var(--slate-400);">-</span>'}
                </td>
              `).join('')}
            </tr>
          `).join('')}
          <tr>
            <td class="spec-name">Standards & Certs</td>
            ${products.map(p => `
              <td style="text-align: center;">
                ${p.certifications.map(c => `<span class="tech-badge tech-badge-emerald" style="margin: 2px;">${c}</span>`).join('')}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="spec-name">Action</td>
            ${products.map(p => `
              <td style="text-align: center;">
                <button type="button" class="btn btn-primary btn-sm" onclick="openProductQuote('${p.name}', '${p.partNumber}')" style="width: 100%;">
                  Request Quote
                </button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--slate-200); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
      <div style="font-size: 0.85rem; color: var(--slate-600);">
        Evaluating <strong>${products.length} instruments</strong> side-by-side
      </div>
      <button type="button" class="btn btn-primary" onclick="requestCombinedQuote()">
        <span>Request Combined Quote for All (${products.length})</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;

  modal.classList.add('active');
}

window.requestCombinedQuote = function() {
  const products = compareList.map(id => window.PRODUCTS_DATABASE.find(p => p.id === id)).filter(Boolean);
  const names = products.map(p => `${p.name} [${p.partNumber}]`).join(' + ');
  window.location.href = `quote.html?product=${encodeURIComponent(names)}`;
};
