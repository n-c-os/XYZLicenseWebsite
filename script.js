const toast = document.getElementById("toast");

function showToast(message = "Copied.") {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast();
  } catch {
    showToast("Copy failed.");
  }
}

document.getElementById("copyLicense").addEventListener("click", () => {
  copyText(document.getElementById("licenseText").innerText.trim());
});

document.getElementById("copyShort").addEventListener("click", () => {
  copyText(document.getElementById("shortNotice").innerText.trim());
});
