        // Global variables for donation form
        let selectedAmount = null;
        let selectedDonationType = 'one-time';

        // Page navigation

        // Mobile menu toggle
        function toggleMobileMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }

        // Donation type selection
        function selectDonationType(element, type) {
            document.querySelectorAll('.type-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            element.classList.add('active');
            selectedDonationType = type;
        }

        // Amount selection
        function selectAmount(element, amount) {
            document.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            element.classList.add('active');
            selectedAmount = amount;

            const customAmountInput = document.getElementById('customAmount');
            if (amount === 'custom') {
                customAmountInput.style.display = 'block';
                customAmountInput.required = true;
            } else {
                customAmountInput.style.display = 'none';
                customAmountInput.required = false;
                customAmountInput.value = '';
            }
        }

        // Form submissions
        function submitHelpForm(event) {
            event.preventDefault();
            alert('Thank you for your request! Our team will contact you within 24 hours.');
            event.target.reset();
        }

        function submitDonation(event) {
            event.preventDefault();
            
            const finalAmount = selectedAmount === 'custom' ? document.getElementById('customAmount').value : selectedAmount;
            
            if (!finalAmount) {
                alert('Please select or enter a donation amount');
                return;
            }

            alert(`Thank you for your ${selectedDonationType} donation of ₦${parseInt(finalAmount).toLocaleString()}! Your generosity will help families rebuild their lives.`);
            event.target.reset();
            
            // Reset amount selection
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('customAmount').style.display = 'none';
            selectedAmount = null;
        }

        // Initialize page on load
        window.addEventListener('load', function() {
            showPage('home');
        });
