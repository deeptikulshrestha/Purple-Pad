const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const preview = document.getElementById("preview");

function updatePreview() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  preview.srcdoc = html + css + js;
}

// Initial render
updatePreview();

// Auto-update on input
[htmlCode, cssCode, jsCode].forEach(el => {
  el.addEventListener("input", updatePreview);
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const editors = [htmlCode, cssCode, jsCode];

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    editors.forEach(e => e.classList.add("hidden"));
    tab.classList.add("active");
    editors[index].classList.remove("hidden");
  });
});

