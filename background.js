(async function main() {
  await browser.tabs.create({url: browser.extension.getURL('page.html')});
}());