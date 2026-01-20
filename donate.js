const radioOptions = document.querySelectorAll('.radio-option');
        
// Add click event to each option
radioOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove 'selected' class from all options
        radioOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Add 'selected' class to clicked option
        this.classList.add('selected');
        
        // Check the radio input inside this label
        const radioInput = this.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
        }
    });
    
    // Also handle when radio button itself is clicked
    const radioInput = option.querySelector('input[type="radio"]');
    if (radioInput) {
        radioInput.addEventListener('change', function() {
            if (this.checked) {
                // Remove 'selected' from all
                radioOptions.forEach(opt => opt.classList.remove('selected'));
                // Add to parent label
                this.closest('.radio-option').classList.add('selected');
            }
        });
    }
});
// Live Donation Counter - Slowly increasing like donations are coming in
function startLiveDonationCounter(element, baseAmount, incrementPerMinute) {
    let currentAmount = baseAmount;
    
    // Calculate increment per second (spread over 60 seconds)
    const incrementPerSecond = incrementPerMinute / 100;
    
    // Update every 1 second for smooth, slow counting
    setInterval(() => {
        // Add random small increments to make it look natural
        const randomIncrement = (Math.random() * 1.0 + 1.5) * incrementPerSecond;
        currentAmount += randomIncrement;
        
        // Update display
        element.textContent = '$' + formatNumber(Math.floor(currentAmount));
    }, 2000); // Update every 1 second
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize live counters when page loads
function initLiveDonationCounters() {
    const counters = document.querySelectorAll('.impact-amount[data-base]');
    
    counters.forEach(counter => {
        const baseAmount = parseInt(counter.getAttribute('data-base'));
        const incrementPerMinute = parseInt(counter.getAttribute('data-increment'));
        
        // Start the live counter
        startLiveDonationCounter(counter, baseAmount, incrementPerMinute);
    });
}

// Start when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLiveDonationCounters);
} else {
    initLiveDonationCounters();
}

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