export default function createToaster(root) {
    return function toast(message, kind = 'info', ms = 3200) {
        const el = document.createElement('div');
        el.className = `toast toast-${kind}`;
        el.textContent = message;
        root.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        setTimeout(() => {
            el.classList.remove('show');
            setTimeout(() => el.remove(), 300);
        }, ms);
    };
}
