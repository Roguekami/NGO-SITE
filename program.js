// Add this to your main.js file or create a new script section

// Function to animate counting numbers
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const isDecimal = target % 1 !== 0;
    
    const timer = setInterval(() => {
        start += increment;
        
        if (start >= target) {
            element.textContent = prefix + formatNumber(target) + suffix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + formatNumber(Math.floor(start)) + suffix;
        }
    }, 16);
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize counters when page loads or when section comes into view
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                // Get all counter elements
                const counters = entry.target.querySelectorAll('[data-count]');
                
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    const prefix = counter.getAttribute('data-prefix') || '';
                    const suffix = counter.getAttribute('data-suffix') || '';
                    const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
                    
                    // Start animation
                    animateCounter(counter, target, duration, prefix, suffix);
                });
            }
        });
    }, { threshold: 0.3 });
    
    // Observe the stats banner
    const statsBanner = document.querySelector('.stats-banner');
    if (statsBanner) {
        observer.observe(statsBanner);
    }
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
} else {
    initCounters();
}
        // Mobile menu toggle
        function toggleMobileMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }

        const navbar = document.querySelector('.navbar');
        const scrollThreshold = 50; // Starts shrinking after 50px scroll

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > scrollThreshold) {
                // Scrolled down - shrink navbar
                navbar.classList.add('scrolled');
            } else {
                // At top - enlarge navbar
                navbar.classList.remove('scrolled');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navMenu = document.getElementById('navMenu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });