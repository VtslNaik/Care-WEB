/**
 * Care Process Instruments - Core Application JavaScript
 * Global navigation, search modal, RFQ modal, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initGlobalSearch();
  initQuoteModal();
  initCertificateLightbox();
  initBackToTop();
  initHeroShowcaseSwitcher();
  initClientSectorFilter();
});

/* Sticky Header on Scroll */
function initStickyHeader() {
  const header = document.querySelector('.header-main');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });
}

/* Mobile Hamburger Menu & Backdrop Drawer */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const backdrop = document.getElementById('nav-backdrop');
  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    navMenu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>`;
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    navMenu.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
    document.body.style.overflow = 'hidden';
  };

  toggleBtn.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/* Global Search Modal (Cmd+K / Ctrl+K) */
function initGlobalSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('modal-search-input');
  const searchResults = document.getElementById('modal-search-results');
  const searchTriggers = document.querySelectorAll('.btn-search-trigger, .trigger-search');
  const closeBtn = document.getElementById('close-search-modal');

  if (!searchModal) return;

  const openSearch = () => {
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => searchInput?.focus(), 50);
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    if (searchInput) searchInput.value = '';
    renderDefaultSearchResults();
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  closeBtn?.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Keyboard shortcut Cmd+K or Ctrl+K or Esc
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        renderDefaultSearchResults();
        return;
      }
      performSearch(q);
    });
  }

  function renderDefaultSearchResults() {
    if (!searchResults || !window.PRODUCTS_DATABASE) return;
    const featured = window.PRODUCTS_DATABASE.filter(p => p.featured).slice(0, 4);
    searchResults.innerHTML = `
      <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--slate-400); font-weight: 700; margin-bottom: 0.75rem;">
        Popular Instrumentation
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${featured.map(p => `
          <a href="product-detail.html?product=${p.id}" class="search-result-item" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; border-radius: var(--radius-md); text-decoration: none; border: 1px solid var(--slate-100); transition: background-color var(--transition-fast);">
            <img src="${p.image}" alt="${p.name}" style="width: 40px; height: 40px; object-fit: contain; background: var(--slate-50); border-radius: var(--radius-sm); padding: 2px;">
            <div style="flex: 1;">
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--slate-900);">${p.name}</div>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--slate-500);">${p.partNumber} • ${p.categoryName}</div>
            </div>
            <span class="tech-badge tech-badge-slate" style="font-size: 0.68rem;">View Spec</span>
          </a>
        `).join('')}
      </div>
    `;
  }

  function performSearch(query) {
    if (!searchResults || !window.PRODUCTS_DATABASE) return;
    const results = window.PRODUCTS_DATABASE.filter(p => {
      return (
        p.name.toLowerCase().includes(query) ||
        p.partNumber.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.keySpecs.some(s => s.toLowerCase().includes(query)) ||
        p.applications.some(a => a.toLowerCase().includes(query))
      );
    });

    if (results.length === 0) {
      searchResults.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--slate-400)" stroke-width="1.5" style="margin: 0 auto 0.75rem auto;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <div style="font-weight: 700; color: var(--slate-800); margin-bottom: 0.25rem;">No instruments found for "${query}"</div>
          <div style="font-size: 0.85rem; color: var(--slate-500); max-width: 360px; margin: 0 auto 1.25rem auto;">
            Try searching for terms like "RTD", "4-20mA", "Pressure Gauge", "Flow Meter", or "Paperless".
          </div>
          <a href="quote.html?custom=${encodeURIComponent(query)}" class="btn btn-outline btn-sm">Request Custom Instrumentation</a>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = `
      <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--slate-400); font-weight: 700; margin-bottom: 0.75rem;">
        Found ${results.length} Matching Products
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 380px; overflow-y: auto;">
        ${results.map(p => `
          <a href="product-detail.html?product=${p.id}" class="search-result-item" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem; border-radius: var(--radius-md); text-decoration: none; border: 1px solid var(--slate-200); background-color: var(--white); transition: all var(--transition-fast);">
            <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: contain; background: var(--slate-50); border-radius: var(--radius-sm); padding: 2px;">
            <div style="flex: 1;">
              <div style="font-weight: 600; font-size: 0.875rem; color: var(--slate-900);">${p.name}</div>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--brand-primary);">${p.partNumber}</div>
              <div style="font-size: 0.75rem; color: var(--slate-500);">${p.categoryName}</div>
            </div>
            <span class="btn btn-primary btn-sm" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">Specs</span>
          </a>
        `).join('')}
      </div>
    `;
  }

  // Initial call
  renderDefaultSearchResults();
}

/* Quick Quote Modal */
function initQuoteModal() {
  const quoteModal = document.getElementById('quote-modal');
  const quoteTriggers = document.querySelectorAll('.trigger-quote-modal');
  const closeBtn = document.getElementById('close-quote-modal');
  const modalProductInput = document.getElementById('modal-quote-product');

  if (!quoteModal) return;

  const openQuoteModal = (productName = "") => {
    quoteModal.classList.add('active');
    quoteModal.setAttribute('aria-hidden', 'false');
    if (modalProductInput && productName) {
      modalProductInput.value = productName;
    }
  };

  const closeQuoteModal = () => {
    quoteModal.classList.remove('active');
    quoteModal.setAttribute('aria-hidden', 'true');
  };

  quoteTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || "";
      openQuoteModal(product);
    });
  });

  closeBtn?.addEventListener('click', closeQuoteModal);

  quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) closeQuoteModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal.classList.contains('active')) {
      closeQuoteModal();
    }
  });

  // Modal form submit
  const modalForm = document.getElementById('modal-quote-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const refId = "RFQ-" + Math.floor(100000 + Math.random() * 900000);
      modalForm.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--tech-emerald-light); color: var(--tech-emerald); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900); margin-bottom: 0.5rem;">Quotation Request Registered</h3>
          <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 1rem;">
            Your inquiry has been routed to our Ahmedabad technical engineering desk.
          </p>
          <div style="background: var(--slate-50); border: 1px dashed var(--slate-300); border-radius: var(--radius-md); padding: 0.75rem; font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: var(--brand-primary); margin-bottom: 1.5rem;">
            Reference ID: ${refId}
          </div>
          <p style="font-size: 0.8125rem; color: var(--slate-500); margin-bottom: 1.5rem;">
            Response SLA: Within 24 business hours. For urgent delivery, call our Ahmedabad desk at <strong>+91-7575808287</strong>.
          </p>
          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://api.whatsapp.com/send?phone=+919327436411&text=Hello%20Care%20Instruments%2C%20I%20have%20submitted%20Quick%20Quote%20reference%20${refId}.%20Please%20provide%20pricing." target="_blank" class="btn btn-sm" style="background-color: #25D366; color: white;">
              Fast-Track via WhatsApp
            </a>
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('quote-modal').classList.remove('active')">Close</button>
          </div>
        </div>
      `;
    });
  }
}

/* Certificate Lightbox Modal */
function initCertificateLightbox() {
  const certModal = document.getElementById('cert-modal');
  const certTriggers = document.querySelectorAll('.trigger-cert-modal');
  const closeBtn = document.getElementById('close-cert-modal');
  const certImg = document.getElementById('cert-modal-img');
  const certTitle = document.getElementById('cert-modal-title');

  if (!certModal) return;

  certTriggers.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      if (certImg && src) certImg.src = src;
      if (certTitle && title) certTitle.textContent = title;
      certModal.classList.add('active');
    });
  });

  const closeCert = () => certModal.classList.remove('active');
  closeBtn?.addEventListener('click', closeCert);
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) closeCert();
  });
}

/* Back to Top Floating Button */
function initBackToTop() {
  const btn = document.querySelector('.btn-float-scrolltop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Toast Notification Utility */
window.showToast = function(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = "position: fixed; bottom: 85px; right: 24px; z-index: 9999; display: flex; flex-direction: column; gap: 8px;";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: var(--slate-900);
    color: var(--white);
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-md);
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    border-left: 4px solid ${type === 'success' ? 'var(--tech-emerald)' : 'var(--brand-primary)'};
    animation: toast-in 0.3s ease;
  `;
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

/* Hero Product Showcase Switcher */
function initHeroShowcaseSwitcher() {
  const buttons = document.querySelectorAll('.hero-switcher-btn');
  const titleEl = document.getElementById('hero-sh-title');
  const partNoEl = document.getElementById('hero-sh-partno');
  const badgeEl = document.getElementById('hero-sh-badge');
  const imgEl = document.getElementById('hero-sh-img');
  const specsEl = document.getElementById('hero-sh-specs');
  const crossTl = document.getElementById('hero-sh-cross-tl');
  const crossBr = document.getElementById('hero-sh-cross-br');

  if (!buttons.length || !titleEl) return;

  const showcaseData = {
    controller: {
      title: "Microcontroller Process Controller",
      part: "CARE-DPC-0196",
      badge: "Featured Controller",
      img: "assets/images/products/process-indicator-controller.jpg",
      crossTl: "+ 01.96",
      crossBr: "CARE-DPC",
      specs: [
        { label: "Display System", val: "Dual 4-Digit (Red PV / Green SV)" },
        { label: "Input Channels", val: "4-20mA / 0-10V / 0-20mA" },
        { label: "Panel Cutout", val: "92 x 92 mm (96 DIN)" },
        { label: "Accuracy", val: "±0.1% F.S. Calibrated" }
      ]
    },
    rtd: {
      title: "Head-Type RTD Pt100 & Thermocouple",
      part: "CARE-RTD-PT100",
      badge: "Class A Sensor",
      img: "assets/images/products/rtd-thermocouple-sensor.jpg",
      crossTl: "IEC-60751",
      crossBr: "Pt100-3W",
      specs: [
        { label: "Element Class", val: "Pt100 Class A (±0.15°C)" },
        { label: "Temp Range", val: "-200°C to +600°C (-328°F to 1112°F)" },
        { label: "Sheath Material", val: "SS316 / Inconel Mineral Insulated" },
        { label: "Enclosure Head", val: "IP67 Weatherproof / Flameproof" }
      ]
    },
    pressure: {
      title: "All Stainless Steel Pressure Gauge",
      part: "CARE-PG-SS",
      badge: "EN 837-1 Bourdon",
      img: "assets/images/products/pressure-gauges.jpg",
      crossTl: "EN 837-1",
      crossBr: "SS316-WET",
      specs: [
        { label: "Dial Size", val: "100 mm (4\") / 150 mm (6\")" },
        { label: "Operating Range", val: "Vacuum (-1 bar) up to 1600 bar" },
        { label: "Accuracy Class", val: "Class 1.0 (±1.0% of Full Scale)" },
        { label: "Wetted Parts", val: "SS316 Seamless Bourdon Tube" }
      ]
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-showcase');
      const data = showcaseData[key];
      if (!data) return;

      titleEl.textContent = data.title;
      partNoEl.textContent = data.part;
      badgeEl.textContent = data.badge;
      imgEl.src = data.img;
      imgEl.alt = data.title;
      if (crossTl) crossTl.textContent = data.crossTl;
      if (crossBr) crossBr.textContent = data.crossBr;

      if (specsEl) {
        specsEl.innerHTML = data.specs.map(s => `
          <div class="hero-visual-spec-box">
            <span class="label">${s.label}</span>
            <span class="val">${s.val}</span>
          </div>
        `).join('');
      }
    });
  });
}

/* Client Logo Sector Filter */
function initClientSectorFilter() {
  const buttons = document.querySelectorAll('.client-sector-btn');
  const cards = document.querySelectorAll('.client-logo-card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sector = btn.getAttribute('data-sector');

      cards.forEach(card => {
        if (sector === 'all' || card.getAttribute('data-sector') === sector) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Global Clipboard Copy Utility */
window.copyToClipboard = function(text, successMessage = "Copied to clipboard!") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast?.(successMessage, "success");
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
};

function fallbackCopy(text, successMessage) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    window.showToast?.(successMessage, "success");
  } catch (err) {
    window.showToast?.("Unable to copy to clipboard", "warning");
  }
  document.body.removeChild(tempInput);
}
