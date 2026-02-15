document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success-message');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        contactForm.style.display = 'none';
                        successMessage.style.display = 'block';
                        contactForm.reset();
                    } else {
                        alert('There was a problem submitting your form. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was a problem submitting your form. Please try again.');
                });
        });
    }
});
