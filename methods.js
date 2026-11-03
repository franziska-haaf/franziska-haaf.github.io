const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function activateTab(tab, updateHash = true) {
  const panelId = tab.dataset.tab;

  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== panelId;
  });

  if (panelId !== "portfolio") {
    showPortfolioOverview(false);
  }

  if (updateHash) {
    history.replaceState(null, "", `#${panelId}`);
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex]);
  });
});

const portfolioOverview = document.querySelector(".portfolio-overview");
const portfolioDetail = document.querySelector(".portfolio-detail");
const artworkCards = [...document.querySelectorAll(".artwork-card")];
const backToOverview = document.querySelector(".back-to-overview");

function showPortfolioOverview(moveFocus = true) {
  if (!portfolioOverview || !portfolioDetail) return;
  portfolioOverview.hidden = false;
  portfolioDetail.hidden = true;
  if (moveFocus) artworkCards[0]?.focus();
}

function showPortfolioDetail() {
  if (!portfolioOverview || !portfolioDetail) return;
  portfolioOverview.hidden = true;
  portfolioDetail.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  backToOverview?.focus({ preventScroll: true });
}

artworkCards.forEach((card) => {
  card.addEventListener("click", showPortfolioDetail);
});

backToOverview?.addEventListener("click", () => showPortfolioOverview());

const initialTab = tabs.find((tab) => `#${tab.dataset.tab}` === window.location.hash);
if (initialTab) activateTab(initialTab, false);
