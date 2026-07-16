/* ==========================================================================
   Nico Christmann's Wii U Relay & Juxt Hub — Clean Application Logic
   ========================================================================== */

// Copy Text Utility for SD Card Paths
function copyText(text, btnElement) {
  if (!navigator.clipboard) return;
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.textContent;
    btnElement.textContent = "Copied!";
    btnElement.style.backgroundColor = "#059669";
    btnElement.style.color = "#ffffff";
    
    setTimeout(() => {
      btnElement.textContent = originalText;
      btnElement.style.backgroundColor = "";
      btnElement.style.color = "";
    }, 2000);
  });
}

// FAQ Accordion Toggle
function toggleFaq(buttonEl) {
  const itemEl = buttonEl.parentElement;
  const answerEl = buttonEl.nextElementSibling;
  const indicatorEl = buttonEl.querySelector(".faq-indicator");

  const isOpen = itemEl.classList.contains("open");

  // Close all other accordions
  document.querySelectorAll(".faq-item").forEach(item => {
    item.classList.remove("open");
    const ans = item.querySelector(".faq-answer");
    const ind = item.querySelector(".faq-indicator");
    if (ans) ans.style.maxHeight = null;
    if (ind) ind.textContent = "+";
  });

  if (!isOpen) {
    itemEl.classList.add("open");
    answerEl.style.maxHeight = answerEl.scrollHeight + "px";
    if (indicatorEl) indicatorEl.textContent = "-";
  }
}
