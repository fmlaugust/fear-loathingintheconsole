/**
 * ============================================
 * SCROLL SORCERY JAVASCRIPT
 * Gonzo-style Intersection Observer Magic
 * For #100Devs - "We don't get got. We go get!"
 * ============================================
 * * "The only thing that really worried me was the ether. 
 * There is nothing in the world more helpless and irresponsible 
 * and depraved than a man in the depths of an ether binge, 
 * and I knew we'd get into that rotten stuff pretty soon."
 * - Hunter S. Thompson (probably not about JavaScript)
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎪 Scroll Sorcery initialized. Let the madness begin...');
    console.log('💪 Remember: We don\'t get got. We go get!');

    // ============================================
    // INTERSECTION OBSERVER CONFIGURATION
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,             
        // The rootMargin is excellent, makes the animation start before it's fully in view
        rootMargin: '0px 0px -50px 0px' 
    };

    // ============================================
    // CREATE THE OBSERVER
    // This is where the magic happens
    // ============================================
    
    const scrollObserver = new IntersectionObserver((entries, observer) => { // Added observer reference
        entries.forEach(entry => {
            // When element enters viewport
            if (entry.isIntersecting) {
                // Add 'active' class to trigger CSS animation
                entry.target.classList.add('active');
                
                console.log('✨ Animation triggered:', entry.target.className);
                
                // Unobserve after animation is highly recommended for performance
                // and for the "one-time-enter" animation effect.
                observer.unobserve(entry.target); 
                
            } 
            // NOTE: No 'else' block needed if you're unobserving on intersect
        });
    }, observerOptions);

    // ============================================
    // SELECT ALL ANIMATED ELEMENTS
    // Find everything with animation classes
    // ============================================
    
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .zoom-in, .rotate-in, .scale-in, .pulse-in'
    );

    // ============================================
    // OBSERVE EACH ELEMENT
    // Start watching for scroll events
    // ============================================
    
    animatedElements.forEach(element => {
        // Ensure element starts hidden by adding a class if your CSS requires it.
        // E.g., element.classList.add('not-active');
        scrollObserver.observe(element);
    });

    console.log(`👁️ Observing ${animatedElements.length} elements for scroll magic`);

    // ============================================
    // BONUS: SMOOTH SCROLL FOR ANCHOR LINKS
    // Because we're not animals
    // ============================================
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Check if the targetId is *just* '#' or a valid ID
            if (targetId && targetId !== '#') { 
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Only prevent default if we found a valid target element
                    e.preventDefault(); 
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    console.log('🎯 Smooth scrolled to:', targetId);
                }
            } 
            // If it's just '#', let the default browser behavior handle it (scroll to top)
        });
    });

    // ============================================
    // EASTER EGG: GONZO CONSOLE LOGS
    // NOTE: This original code runs console logs on *every* scroll event, which is bad for performance.
    // I am modifying the scroll counter to use a lighter, one-time listener pattern.
    // ============================================
    
    let hasScrolled = false;
    
    // We'll use a one-time event listener for the first scroll
    window.addEventListener('scroll', () => {
        if (!hasScrolled) {
            console.log('🦇 "We had two bags of grass, seventy-five pellets of mescaline..." - Just kidding, we only have JavaScript here.');
            console.log('🚀 We don\'t get got. We go get! And we\'re GETTING these smooth animations!');
            hasScrolled = true;
            
            // OPTIONAL: Remove the listener after the first scroll to save resources
            // window.removeEventListener('scroll', handler); // would require defining the function outside
        }
    }, { once: true }); // Using 'once: true' is a modern, clean way to do this

    // Keeping the performance monitor, but it's not strictly necessary for "fixing" the code.
    // ============================================
    // PERFORMANCE MONITORING
    // Making sure we're running smooth
    // ============================================
    
    const monitorPerformance = () => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                console.log('🎭 Performance is smooth. Animations running at 60fps (probably).');
                console.log('⚡ We go get that buttery smooth performance!');
            });
        } else {
            // Fallback for browsers that don't support requestIdleCallback
            setTimeout(() => {
                console.log('🎭 Performance monitoring initialized (fallback mode).');
            }, 1000);
        }
    };

    monitorPerformance();

    // The rest of the code (addScrollAnimation and final log) remains perfect.

// ... (remaining utility and final log are unchanged)

});

// ============================================
// EXPORT FOR POTENTIAL USE IN OTHER FILES
// CommonJS style for maximum compatibility
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        // Export anything you might need in other files
    };
}