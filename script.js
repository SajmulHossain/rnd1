document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
});
