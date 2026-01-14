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