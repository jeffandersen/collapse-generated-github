chrome.contextMenus.create({
  "title": "Collapse Generated",
  "contexts": [
    "page"
  ],
  "documentUrlPatterns": [
    "*://github.com/*/*/pull/*/files"
  ],
  "onclick": function() {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        "collapseFiles": true
      });
    });
  },
});
