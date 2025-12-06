// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in on scroll - optimized with IntersectionObserver
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Initial animations - optimized
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
}, { once: true });

// Scrolled header effect - debounced
let lastScroll = 0;
let ticking = false;

function updateHeader() {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }
}, { passive: true });

// Create floating particles - optimized
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40; // Reduced from 60 for better performance
    const sizes = ['small', 'small', 'medium', 'medium', 'large'];
    const colors = ['purple', 'purple', 'blue', 'indigo', 'cyan'];
    const animations = ['particleFloat', 'particleFloat', 'particleFloatAlt', 'particleFloatWave'];
    
    // Create a document fragment for batch DOM insertion
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animation = animations[Math.floor(Math.random() * animations.length)];
        
        particle.className = `particle ${size} ${color}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (12 + Math.random() * 15) + 's';
        particle.style.animationName = animation;
        particle.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
        
        fragment.appendChild(particle);
    }
    
    particlesContainer.appendChild(fragment);
}

createParticles();

// Letter-by-letter glitch effect - optimized
function initGlitchTitle() {
    const titleContainer = document.getElementById('glitchTitle');
    const text = 'VIBE CODER';
    
    // Create a document fragment for batch DOM insertion
    const fragment = document.createDocumentFragment();
    
    // Create individual letter spans
    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.className = 'glitch-letter';
        span.setAttribute('data-letter', letter);
        span.textContent = letter;
        fragment.appendChild(span);
    });
    
    titleContainer.appendChild(fragment);
    
    const letters = titleContainer.querySelectorAll('.glitch-letter');
    let currentIndex = 0;

    // Function to trigger glitch on a specific letter
    function glitchLetter(index) {
        letters[index].classList.add('active');
        setTimeout(() => {
            letters[index].classList.remove('active');
        }, 300);
    }

    // Start sequential glitching
    setInterval(() => {
        glitchLetter(currentIndex);
        currentIndex = (currentIndex + 1) % letters.length;
    }, 1000);

    // Also add random occasional glitches
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * letters.length);
        glitchLetter(randomIndex);
    }, 2000);
}

initGlitchTitle();

// Parallax effect on scroll - optimized with requestAnimationFrame
let parallaxTicking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.orb');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
    
    parallaxTicking = false;
}

window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        window.requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
}, { passive: true });
