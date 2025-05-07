document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    const header = document.querySelector('header');
    const navs = document.querySelectorAll("header nav ul li a");


    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-toggle') && !event.target.closest('.nav-menu')) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Change header color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
            navs.forEach(nav => {
                nav.classList.add('scrolled');
            })
        } else {
            header.classList.remove('scrolled');
            navs.forEach((nav) => {
              nav.classList.remove("scrolled");
            });
        }
    });
});


// *for typewriter


var titles = document.querySelectorAll(".slide-title");

titles.forEach((title, idx) => {
    var typewriter = new Typewriter(title, {
      loop: true,
      delay: 75,
    });
    
    typewriter
      .pauseFor(0)
      .typeString(
        idx === 1
          ? "Welcome to our city"
          : idx === 2
          ? "Peaceful Country Living"
          : "Modern Living Spaces"
      )
      .pauseFor(3000)
      .start();
})
