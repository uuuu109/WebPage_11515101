// 烤鹹魚（CHARCOAL GRILLED FISH）三頁共用 JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // 1. 行動版選單控制
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "開啟導覽選單");
      siteNav.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menuToggle.setAttribute("aria-label", isExpanded ? "開啟導覽選單" : "收合導覽選單");
      siteNav.classList.toggle("is-open", !isExpanded);
    });

    siteNav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  // 2. 自動更新當前年份
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
});
