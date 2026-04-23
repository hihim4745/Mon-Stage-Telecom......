document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const sections = document.querySelectorAll('section');
    const navIcons = document.querySelectorAll('.nav-icon');

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";

        // Active Icon
        let current = "";
        sections.forEach(section => {
            if (pageYOffset >= (section.offsetTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        navIcons.forEach(icon => {
            icon.classList.remove('active');
            if (icon.getAttribute('href').includes(current)) icon.classList.add('active');
        });
    });

    // Smooth Scroll
    navIcons.forEach(icon => {
        icon.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(icon.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});