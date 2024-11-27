// main.ts
// Função que adiciona animação de fade-in quando a seção é visível
function fadeInSection(section) {
    section.style.opacity = '1';
}
// Função que adiciona animação de fade-out quando a seção sai da tela
function fadeOutSection(section) {
    section.style.opacity = '0';
}
// Monitorando a rolagem da página para animar as seções
function onScroll() {
    var sections = document.querySelectorAll('.section');
    var scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        // Verificando se a seção está visível na tela
        if (scrollPosition > sectionTop + sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight) {
            fadeInSection(section);
        }
        else {
            fadeOutSection(section);
        }
    });
}
// Adiciona o evento de rolagem
window.addEventListener('scroll', onScroll);
// Inicializa as seções com opacidade 0 para aplicar a animação
document.querySelectorAll('.section').forEach(function (section) {
    section.style.opacity = '0';
});
// Adiciona a rolagem suave
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        var _a;
        event.preventDefault();
        var targetId = (_a = event.target.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.slice(1);
        var targetSection = document.getElementById(targetId || '');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajusta a posição da rolagem
                behavior: 'smooth',
            });
        }
    });
});
