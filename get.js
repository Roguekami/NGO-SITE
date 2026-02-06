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
        // Store uploaded files
let uploadedFiles = {
    front: null,
    back: null
};

// Handle file upload
function handleFileUpload(event, side) {
    event.stopPropagation();
    const file = event.target.files[0];
    
    if (!file) return;
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        event.target.value = '';
        return;
    }
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image (JPG, PNG) or PDF file');
        event.target.value = '';
        return;
    }
    
    // Store the file
    uploadedFiles[side] = file;
    
    // Update UI
    const uploadBox = document.getElementById(`${side}UploadBox`);
    const previewDiv = document.getElementById(`${side}Preview`);
    
    uploadBox.classList.add('active');
    
    // Create preview
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewDiv.innerHTML = `
                <img src="${e.target.result}" class="preview-image" alt="${side} side preview">
                <div class="file-name">${file.name}</div>
                <button type="button" class="remove-file" onclick="removeFile('${side}')">Remove File</button>
            `;
        };
        reader.readAsDataURL(file);
    } else {
        previewDiv.innerHTML = `
            <svg width="48" height="48" fill="none" stroke="#16a34a" viewBox="0 0 24 24" style="margin-top: 1rem;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <div class="file-name">${file.name}</div>
            <button type="button" class="remove-file" onclick="removeFile('${side}')">Remove File</button>
        `;
    }
}

// Remove uploaded file
function removeFile(side) {
    uploadedFiles[side] = null;
    
    const uploadBox = document.getElementById(`${side}UploadBox`);
    const previewDiv = document.getElementById(`${side}Preview`);
    const fileInput = document.getElementById(`${side}License`);
    
    uploadBox.classList.remove('active');
    previewDiv.innerHTML = '';
    fileInput.value = '';
}

// Update form submission to include files
function submitForm(event) {
    event.preventDefault();
    
    // Check if both license sides are uploaded
    if (!uploadedFiles.front || !uploadedFiles.back) {
        alert('Please upload both sides of your driver\'s license');
        return;
    }
    
    // Create FormData object
    const formData = new FormData(event.target);
    
    // Add license files
    formData.append('licenseFront', uploadedFiles.front);
    formData.append('licenseBack', uploadedFiles.back);
    
    // Show success message
    alert('Thank you for your request! Our team will contact you within 24 hours.');
    
    // Reset form and uploaded files
    event.target.reset();
    removeFile('front');
    removeFile('back');
}



const forminit = new Forminit();
const FORM_ID = "kgztk69kjg3"; // Replace with your actual Forminit form ID

document.getElementById("helpForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const { data, error } = await forminit.submit(FORM_ID, formData);
  if (error) {
    document.getElementById("result").textContent = error.message;
    return;
  }
  document.getElementById("result").textContent = "Submitted successfully!";
  e.target.reset();
});