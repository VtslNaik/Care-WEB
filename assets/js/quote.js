/**
 * Care Process Instruments - Dedicated RFQ (Request For Quotation) Controller
 * Pre-populates product information, handles file upload simulation, and generates RFQ tracking ID
 */

document.addEventListener('DOMContentLoaded', () => {
  initQuotePortal();
});

function initQuotePortal() {
  const quoteForm = document.getElementById('dedicated-quote-form');
  const productSelect = document.getElementById('rfq-product-select');
  const fileDropzone = document.getElementById('rfq-file-dropzone');
  const fileInput = document.getElementById('rfq-file-input');
  const filePreview = document.getElementById('rfq-file-preview');

  // Pre-populate product selector from URL query
  const urlParams = new URLSearchParams(window.location.search);
  const requestedProduct = urlParams.get('product') || urlParams.get('custom') || "";

  if (productSelect && window.PRODUCTS_DATABASE) {
    // Populate select options
    productSelect.innerHTML = `
      <option value="">-- Select an Instrument from Catalogue --</option>
      <option value="Custom Instrumentation Engineering">-- Custom Engineered / OEM Requirement --</option>
      ${window.PRODUCTS_DATABASE.map(p => `
        <option value="${p.name} [${p.partNumber}]">${p.name} (${p.partNumber})</option>
      `).join('')}
    `;

    if (requestedProduct) {
      // Find matching option or add custom
      let found = false;
      for (let opt of productSelect.options) {
        if (opt.value.toLowerCase().includes(requestedProduct.toLowerCase())) {
          opt.selected = true;
          found = true;
          break;
        }
      }
      if (!found) {
        const newOpt = new Option(`Selected: ${requestedProduct}`, requestedProduct, true, true);
        productSelect.add(newOpt);
      }
    }
  }

  // RFQ Mode Switcher (Single vs BOM)
  const singleBtn = document.getElementById('rfq-mode-single');
  const bomBtn = document.getElementById('rfq-mode-bom');
  const singleGroup = document.getElementById('rfq-single-product-group');
  const bomGroup = document.getElementById('rfq-bom-helper-group');
  const messageArea = document.getElementById('rfq-message');

  if (singleBtn && bomBtn) {
    singleBtn.addEventListener('click', () => {
      singleBtn.classList.add('active');
      bomBtn.classList.remove('active');
      if (singleGroup) singleGroup.style.display = 'flex';
      if (bomGroup) bomGroup.style.display = 'none';
      if (productSelect) productSelect.required = true;
      if (messageArea) messageArea.placeholder = "Detail operating medium (e.g. steam, sulfuric acid, potable water), temperature range, pressure ratings, flange/thread size, output signals (4-20mA, Modbus), and any required calibration certificates...";
    });

    bomBtn.addEventListener('click', () => {
      bomBtn.classList.add('active');
      singleBtn.classList.remove('active');
      if (singleGroup) singleGroup.style.display = 'none';
      if (bomGroup) bomGroup.style.display = 'block';
      if (productSelect) productSelect.required = false;
      if (messageArea) messageArea.placeholder = "List your line items here or note attached tender document. Example:\n1. 10x SS316 Pressure Gauges 0-10 bar 1/2\" NPT\n2. 5x RTD Pt100 Simplex 200mm stem IP67\n3. 2x Digital Flow Meter DN50 flanged 4-20mA";
    });
  }

  // File Upload Drag and Drop Simulation
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', () => fileInput.click());

    ['dragenter', 'dragover'].forEach(eventName => {
      fileDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        fileDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        fileDropzone.classList.remove('dragover');
      });
    });

    fileDropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) handleSelectedFile(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) handleSelectedFile(e.target.files[0]);
    });
  }

  function handleSelectedFile(file) {
    if (!filePreview) return;
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    if (file.size > 15 * 1024 * 1024) {
      window.showToast?.("File size exceeds 15 MB limit", "warning");
      return;
    }

    filePreview.style.display = 'flex';
    filePreview.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; background: var(--white); border: 1px solid var(--slate-300); border-radius: var(--radius-md); padding: 0.75rem 1rem; width: 100%;">
        <div style="color: var(--brand-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div style="flex: 1; text-align: left;">
          <div style="font-weight: 600; font-size: 0.875rem; color: var(--slate-900);">${file.name}</div>
          <div style="font-size: 0.75rem; color: var(--slate-500); font-family: var(--font-mono);">${sizeMb} MB • Ready for technical analysis</div>
        </div>
        <button type="button" onclick="clearSelectedFile()" style="background: none; border: none; color: var(--slate-400); cursor: pointer; padding: 4px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `;
    window.showToast?.(`Specification document "${file.name}" attached`, "success");
  }

  window.clearSelectedFile = function() {
    if (fileInput) fileInput.value = "";
    if (filePreview) filePreview.style.display = 'none';
  };

  // RFQ Submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('rfq-name')?.value || "";
      const company = document.getElementById('rfq-company')?.value || "";
      const email = document.getElementById('rfq-email')?.value || "";
      const phone = document.getElementById('rfq-phone')?.value || "";
      const product = document.getElementById('rfq-product-select')?.value || "General Process Instrumentation";
      const quantity = document.getElementById('rfq-quantity')?.value || "1";
      const requirements = document.getElementById('rfq-message')?.value || "";
      const urgency = document.querySelector('input[name="rfq-urgency"]:checked')?.value || "Standard (3-5 days)";

      const refNumber = "CPI-RFQ-" + Math.floor(100000 + Math.random() * 900000);
      const submitTime = new Date().toLocaleString();

      // Render formal confirmation voucher
      const containerCard = document.getElementById('rfq-form-container');
      if (containerCard) {
        containerCard.innerHTML = `
          <div style="text-align: center; padding: 3rem 1.5rem;">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--tech-emerald-light); color: var(--tech-emerald); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <span class="tech-badge tech-badge-emerald" style="margin-bottom: 0.75rem;">Formal RFQ Transmitted</span>
            <h2 style="font-size: 2rem; font-weight: 800; color: var(--slate-900); margin-bottom: 0.5rem;">Thank You, ${name}</h2>
            <p style="font-size: 1rem; color: var(--slate-600); max-width: 540px; margin: 0 auto 2rem auto; line-height: 1.6;">
              Your Request for Quotation for <strong>${company}</strong> has been logged in our central ERP system. A sales application engineer from our Ahmedabad headquarters will contact you with complete pricing and delivery lead-time.
            </p>

            <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 1.5rem; max-width: 600px; margin: 0 auto 2rem auto; text-align: left;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--slate-200); padding-bottom: 0.75rem; margin-bottom: 1rem;">
                <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--slate-500); font-weight: 700;">RFQ Reference Number</span>
                <span style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 800; color: var(--brand-primary);">${refNumber}</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem;">
                <div><strong style="color: var(--slate-500); font-size: 0.75rem; display: block;">INSTRUMENT</strong> ${product}</div>
                <div><strong style="color: var(--slate-500); font-size: 0.75rem; display: block;">QUANTITY</strong> ${quantity} Units</div>
                <div><strong style="color: var(--slate-500); font-size: 0.75rem; display: block;">CONTACT</strong> ${phone} | ${email}</div>
                <div><strong style="color: var(--slate-500); font-size: 0.75rem; display: block;">TIMELINE REQUIRED</strong> ${urgency}</div>
                <div><strong style="color: var(--slate-500); font-size: 0.75rem; display: block;">LOGGED AT</strong> ${submitTime}</div>
                <div><strong style="color: var(--slate-500); font-size: 0.75rem; display: block;">OFFICE</strong> Care Process Instruments Ahmedabad</div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="https://api.whatsapp.com/send?phone=+919327436411&text=${encodeURIComponent('Hi Care Instruments, I just submitted RFQ ' + refNumber + ' for ' + product + ' (Qty: ' + quantity + '). Could you provide urgent quotation?')}" target="_blank" class="btn" style="background-color: #25D366; color: white;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                <span>Fast-Track via WhatsApp (+91-9327436411)</span>
              </a>
              <a href="products.html" class="btn btn-outline">Return to Catalogue</a>
              <button type="button" class="btn btn-secondary" onclick="window.print()">Print Official Confirmation</button>
            </div>
          </div>
        `;
      }
    });
  }
}

window.downloadBomTemplate = function() {
  const csvContent = "data:text/csv;charset=utf-8," 
    + "Item_No,Category_Or_Instrument,Process_Media,Operating_Range,Connection_Flange_Size,Accuracy_Req,Quantity,Remarks_TagNo\n"
    + "1,SS316 Pressure Gauge,Steam,0-16 bar,1/2\" NPT Bottom,Class 1.0,10,PG-101 to PG-110\n"
    + "2,Head Type RTD Pt100,Demineralized Water,-50 to 200°C,1/2\" BSP / 150mm Stem,Class A,5,RTD-201 to RTD-205\n"
    + "3,Digital Flow Meter,Potable Water,0-50 m3/h,DN50 ANSI 150# Flanged,±0.5%,2,FM-301\n"
    + "4,Brainchild Paperless Recorder,Cleanroom Data,Universal 6 Ch,Panel Mount,0.1%,1,REC-401\n";

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Care_Instruments_Tender_BOM_Template.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.showToast?.("Downloaded Tender BOM template (.csv)", "success");
};
