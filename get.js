// Add this JavaScript to your gethelp.html file (in the <script> section)

// FAQ Accordion functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = faqItem.querySelector('.faq-icon');
            
            // Toggle active class
            faqItem.classList.toggle('active');
            
            // Toggle answer visibility
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// Initialize FAQ when page loads
window.addEventListener('load', function() {
    initFAQ();
    
    // Set max date for disaster date to today
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.max = today;
    }
});
      function submitForm(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(event.target);
            const name = formData.get('text') || 'there';
            
            // Show success message
            alert(`Thank you for submitting your request. Our case manager will contact you within 24 hours at the phone number you provided. Please keep your phone nearby.\n\nIf you need immediate assistance, please call our emergency hotline: +234 800 HELP NOW`);
            
            // Reset form
            event.target.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Set max date for disaster date to today
        window.addEventListener('load', function() {
            const dateInput = document.querySelector('input[type="date"]');
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.max = today;
            }
        });