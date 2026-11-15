document.querySelectorAll(".main-nav").forEach((nav) => {
    const toggle = nav.querySelector(".nav-toggle");
    const links = nav.querySelector(".nav-links");

    if (!toggle || !links) {
        return;
    }

    nav.classList.add("menu-ready");

    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        links.classList.toggle("is-open", !isOpen);
    });

    links.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation");
            links.classList.remove("is-open");
        }
    });
});
