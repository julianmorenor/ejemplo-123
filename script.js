// JavaScript para el toggle del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.navbar nav');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (para experiencia móvil)
        document.querySelectorAll('.navbar nav ul li a').forEach(item => {
            item.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // JavaScript para el toggle de las preguntas frecuentes (FAQ)
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Encuentra el padre '.faq-item' y alterna la clase 'active'
            const parentItem = item.closest('.faq-item');
            if (parentItem) {
                parentItem.classList.toggle('active');
            }
        });
    });
});
