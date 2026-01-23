document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            checkin: document.getElementById('checkin').value,
            checkout: document.getElementById('checkout').value,
            guests: document.getElementById('guests').value,
            message: document.getElementById('message').value
        };

        alert('Thank you for your inquiry! We will get back to you soon.\n\nBooking Details:\nName: ' + formData.name + '\nEmail: ' + formData.email + '\nCheck-in: ' + formData.checkin + '\nCheck-out: ' + formData.checkout + '\nGuests: ' + formData.guests);
        
        contactForm.reset();
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

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

    document.querySelectorAll('.room-card, .amenity-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;

    console.log('Lightbox elements found:', {
        lightbox: !!lightbox,
        lightboxImg: !!lightboxImg,
        closeBtn: !!closeBtn,
        galleryItems: galleryItems.length
    });

    // Animate gallery items separately without interfering with clicks
    document.querySelectorAll('.gallery-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
        
        // Add click handler to entire gallery item
        el.addEventListener('click', function(e) {
            console.log('Gallery item clicked:', index);
            const img = this.querySelector('img');
            if (img) {
                currentIndex = index;
                openLightbox(img);
            }
        });
    });

    function openLightbox(img) {
        console.log('Opening lightbox with image:', img.src);
        if (!lightbox) {
            console.error('Lightbox element not found!');
            return;
        }
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        console.log('Lightbox opened, active class added');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    function showImage(index) {
        if (index >= galleryItems.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else {
            currentIndex = index;
        }
        
        lightboxImg.src = galleryItems[currentIndex].src;
        lightboxCaption.textContent = galleryItems[currentIndex].alt;
    }

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);

    // Navigate to previous image
    prevBtn.addEventListener('click', function() {
        showImage(currentIndex - 1);
    });

    // Navigate to next image
    nextBtn.addEventListener('click', function() {
        showImage(currentIndex + 1);
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }
    });
});
