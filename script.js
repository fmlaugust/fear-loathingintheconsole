// script.js

// Intersection Observer for scrolling effects
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the section is visible
};

function checkVisibility(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}

const sectionObserver = new IntersectionObserver(checkVisibility, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});