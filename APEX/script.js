import gsap from 'gsap';

// Loader Animation
document.addEventListener('DOMContentLoaded', () => {
  gsap.to('.loader', {
    opacity: 0,
    duration: 1,
    delay: 2,
    onComplete: () => {
      document.querySelector('.loader').style.display = 'none';
    }
  });

  // Animate hero content
  gsap.from('.hero-content', {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 2.5
  });

  // Animate footer sections on scroll
  const footerSections = document.querySelectorAll('.footer-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s forwards';
      }
    });
  }, { threshold: 0.2 });

  footerSections.forEach(section => observer.observe(section));

  // Animate showcase items on scroll
  const showcaseItems = document.querySelectorAll('.showcase-item');
  
  const showcaseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      }
    });
  }, { threshold: 0.2 });

  showcaseItems.forEach(item => showcaseObserver.observe(item));
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme',
    document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  );
});

// Slider Animation
const slider = document.querySelector('.slide-track');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.style.cursor = 'grabbing';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Blog Card Tilt Effect
document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Showcase Item Hover Effect
document.querySelectorAll('.showcase-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});