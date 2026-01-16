

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

        const navbar = document.getElementById('navbar');
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



        // Form submissions
        function submitHelpForm(event) {
            event.preventDefault();
            alert('Thank you for your request! Our team will contact you within 24 hours.');
            event.target.reset();
        }


        // Initialize page on load
        window.addEventListener('load', function() {
            showPage('home');
        });
