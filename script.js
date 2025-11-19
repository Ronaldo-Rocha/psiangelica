document.addEventListener('DOMContentLoaded', function() {
    // 1. Scroll Suave para Âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente para o elemento, com um pequeno offset para o header fixo
                const headerHeight = document.querySelector('header').offsetHeight;
                const offset = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    console.log("Landing Page da Psicóloga Angélica carregada.");
});
