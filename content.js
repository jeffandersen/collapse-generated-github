chrome.extension.onMessage.addListener(function(message, sender, callback) {
  if (!!message.collapseFiles) {
    collapseGeneratedFiles();
  }
});

function collapseGeneratedFiles() {
  document.querySelectorAll(".file-info a").forEach(function(f) {
    if (f.innerText.indexOf("generated/") == 0) {
      document.querySelectorAll("[data-path='" + f.innerText + "'] .file-actions button[aria-expanded=true]").forEach(function(b) { b.click() });
    }
  });
}
