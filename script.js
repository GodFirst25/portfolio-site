function scrollLeft() {
    document.getElementById('projectScroll').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('projectScroll').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

function toggleMenu() {
    const nav = document.getElementById('nav-ul');
    nav.classList.toggle('show');
}