// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollBtn = document.getElementById('scrollTop');
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// MORE button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all detailed content as hidden
    document.querySelectorAll('.detailed-content').forEach(content => {
        content.style.display = 'none';
    });

    // Add click handlers to all MORE buttons
    document.querySelectorAll('.more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.section');
            const detailedContent = this.nextElementSibling;
            
            if (detailedContent.style.display === 'none' || !detailedContent.style.display) {
                detailedContent.style.display = 'block';
                this.textContent = 'LESS';
                // Smooth scroll to detailed content
                setTimeout(() => {
                    detailedContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                detailedContent.style.display = 'none';
                this.textContent = 'MORE';
                // Smooth scroll back to section
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
