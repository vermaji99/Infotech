document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.getElementById('mobile-menu');
    const menuClose = document.querySelector('.menu-close');
    const menuLinks = document.querySelectorAll('.menu-nav-link');
    const desktopBreakpoint = 1024;

    if (!menuToggle || !menuOverlay) return;

    const openMenu = () => {
        menuOverlay.hidden = false;
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        menuClose?.focus();
    };

    const closeMenu = () => {
        menuOverlay.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    };

    menuToggle.addEventListener('click', () => {
        if (menuOverlay.hidden) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    menuClose?.addEventListener('click', closeMenu);

    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) closeMenu();
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menuOverlay.hidden) closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > desktopBreakpoint && !menuOverlay.hidden) {
            closeMenu();
        }
    });
});
