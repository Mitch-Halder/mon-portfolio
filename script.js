// Affice ou masque le bouton en fonction du scroll
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// Scroll vers le haut
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function openModal() {
    document.getElementById('cvModal').style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('cvModal');
    const content = modal.querySelector('.modal-content');

    // Ajoute la classe d'animation de fermeture
    content.classList.add('closing');

    // Après l'animation, masque la modale et retire la classe
    setTimeout(() => {
        modal.style.display = 'none';
        content.classList.remove('closing');
    }, 300); // 300ms = durée de fadeOutZoom
}

// Dark mode

const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Récupération du thème si déjà stocké
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});