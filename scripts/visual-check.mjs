import { chromium } from "file:///C:/Users/MSI/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const results = [];

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({ path: `.impeccable/review/${viewport.name}.png`, fullPage: true });

  const checks = await page.evaluate(() => ({
    hasContent: document.body.innerText.trim().length > 100,
    hasOverlay: Boolean(document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay")),
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    regionCount: document.querySelectorAll('[role="region"]').length,
    opportunityCount: document.querySelectorAll(".opportunity-row").length,
    brokenImages: Array.from(document.images).filter((image) => !image.complete || image.naturalWidth === 0).length,
  }));

  if (viewport.name === "desktop") {
    await page.getByRole("button", { name: "批准 老房翻新预算最容易漏掉的五项" }).click();
    await page.getByText("2 项待审核").waitFor();
    checks.pendingAfterApproval = await page.getByText("2 项待审核").isVisible();
  }

  results.push({ viewport: viewport.name, errors, ...checks });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));

if (results.some((result) =>
  result.errors.length > 0 ||
  !result.hasContent ||
  result.hasOverlay ||
  result.horizontalOverflow ||
  result.regionCount < 8 ||
  result.opportunityCount !== 5 ||
  result.brokenImages > 0 ||
  result.pendingAfterApproval === false
)) process.exit(1);
