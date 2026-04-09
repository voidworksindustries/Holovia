// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards and feature items
document.querySelectorAll('.product-card, .feature-item, .download-card, .social-card, .patch-note, .policy-article, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const inputs = contactForm.querySelectorAll('input, textarea');
        let allFilled = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        
        if (allFilled) {
            // Create a simple alert (in production, you'd send this to a server)
            const email = contactForm.querySelector('input[type="email"]').value;
            alert(`Thank you for your message!\n\nWe'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you for subscribing! Check ${email} for confirmation.`);
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
});

console.log('🚀 Welcome to Voidworks Industries - Where Innovation Meets Imagination');
