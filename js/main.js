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