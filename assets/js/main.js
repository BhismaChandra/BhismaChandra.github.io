// Navigation highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Project card expansion
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const header = card.querySelector('.project-header');

    header.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// Font Awesome for icons (if not already included in your project)
const faScript = document.createElement('script');
faScript.src = 'https://kit.fontawesome.com/your-code-here.js';
faScript.crossOrigin = 'anonymous';
document.head.appendChild(faScript);