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