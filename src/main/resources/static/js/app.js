// Small interactions for the public landing page. Real authentication will be implemented server-side.
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.header-nav');
    const modal = document.querySelector('#auth-modal');
    const title = document.querySelector('#auth-title');
    const notice = document.querySelector('#auth-notice');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('open', !expanded);
        });
        nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
        }));
    }

    const openModal = (mode) => {
        if (!modal) return;
        title.innerHTML = mode === 'signup'
            ? 'Your stay starts <em>here.</em>'
            : 'Welcome <em>back.</em>';
        notice.textContent = '';
        modal.hidden = false;
        const close = modal.querySelector('.modal-close');
        if (close) close.focus();
    };

    document.querySelectorAll('[data-open-auth]').forEach(button => {
        button.addEventListener('click', () => openModal(button.dataset.openAuth));
    });

    document.querySelectorAll('[data-auth-notice]').forEach(button => {
        button.addEventListener('click', () => {
            notice.textContent = 'Account features are not connected yet. The next development stage will add secure registration, email OTP verification, and login.';
        });
    });

    const closeModal = () => { if (modal) modal.hidden = true; };
    if (modal) {
        modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
        modal.addEventListener('click', event => {
            if (event.target === modal) closeModal();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !modal.hidden) closeModal();
        });
    }
});
