// Suavizar o scroll do site
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link: Element) => {
    link.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const targetId = (e.target as HTMLElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade In: Quando o conteúdo entra na tela ao rolar
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach((element) => {
    fadeInObserver.observe(element);
});
