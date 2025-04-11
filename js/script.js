// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.querySelector('.back-to-top');
  const skillBars = document.querySelectorAll('.skill-progress');
  const heroTitle = document.querySelector('.hero-title .name');

  // Add cyberpunk glitch effect to headings
  const headings = document.querySelectorAll('h1, h2');
  headings.forEach(heading => {
    heading.setAttribute('data-text', heading.textContent);
  });

  // Add cyberpunk terminal effect
  function createTerminalEffect() {
    const terminalLines = [
      'INITIALIZING CYBERPUNK INTERFACE...',
      'LOADING USER PROFILE: SHUBHAM MUKHERJEE',
      'ACCESSING HR SYSTEMS...',
      'ESTABLISHING SECURE CONNECTION...',
      'CYBERPUNK 2025 INTERFACE READY'
    ];

    const terminal = document.createElement('div');
    terminal.classList.add('terminal-overlay');
    document.body.appendChild(terminal);

    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    const terminalText = document.createElement('div');
    terminalText.classList.add('terminal-text');
    terminal.appendChild(terminalText);

    const interval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
          currentLine += terminalLines[lineIndex][charIndex];
          terminalText.innerHTML = `<div>${currentLine}<span class="cursor">_</span></div>`;
          charIndex++;
        } else {
          terminalText.innerHTML += '<br>';
          lineIndex++;
          charIndex = 0;
          currentLine = '';

          if (lineIndex === terminalLines.length) {
            terminalText.innerHTML += '<div class="success">ACCESS GRANTED</div>';
            setTimeout(() => {
              terminal.style.opacity = '0';
              setTimeout(() => {
                terminal.remove();
              }, 1000);
            }, 1000);
            clearInterval(interval);
          }
        }
      }
    }, 50);

    // Add terminal styles
    const style = document.createElement('style');
    style.textContent = `
      .terminal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(10, 10, 15, 0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 1s ease;
      }
      .terminal-text {
        font-family: monospace;
        color: #00f3ff;
        font-size: 1.2rem;
        text-shadow: 0 0 10px #00f3ff;
        max-width: 80%;
        line-height: 1.5;
      }
      .cursor {
        animation: blink 1s infinite;
      }
      .success {
        color: #00ff66;
        text-shadow: 0 0 10px #00ff66;
        margin-top: 1rem;
        font-weight: bold;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // Run terminal effect on page load
  createTerminalEffect();

  // Add random glitch effect to elements
  function addRandomGlitch() {
    const elements = document.querySelectorAll('.hero-title, .section-title, .project-title, .education-content h3');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];

    randomElement.classList.add('glitch-effect');
    setTimeout(() => {
      randomElement.classList.remove('glitch-effect');
    }, 200);

    setTimeout(addRandomGlitch, Math.random() * 5000 + 3000);
  }

  // Start random glitch effect after 3 seconds
  setTimeout(addRandomGlitch, 3000);

  // Add glitch effect style
  const glitchStyle = document.createElement('style');
  glitchStyle.textContent = `
    .glitch-effect {
      position: relative;
      animation: textGlitch 0.2s linear;
    }

    @keyframes textGlitch {
      0% {
        transform: translate(0);
        text-shadow: 0 0 15px var(--neon-blue);
      }
      25% {
        transform: translate(-2px, 1px);
        text-shadow: -2px 0 var(--neon-red), 2px 0 var(--neon-green);
      }
      50% {
        transform: translate(1px, -1px);
        text-shadow: 2px 0 var(--neon-purple), -1px 0 var(--neon-green);
      }
      75% {
        transform: translate(-1px, -2px);
        text-shadow: -2px 0 var(--neon-green), 1px 0 var(--neon-red);
      }
      100% {
        transform: translate(0);
        text-shadow: 0 0 15px var(--neon-blue);
      }
    }
  `;
  document.head.appendChild(glitchStyle);

  // Mobile Menu Toggle
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Add glitch effect on menu toggle
    document.body.classList.toggle('menu-glitch');
    setTimeout(() => {
      document.body.classList.remove('menu-glitch');
    }, 500);
  });

  // Close mobile menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Sticky Header on Scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to Top Button Visibility
    if (window.scrollY > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }

    // Animate skill bars when in viewport
    animateSkillBars();
  });

  // Back to Top Button Click
  backToTop.addEventListener('click', function(e) {
    e.preventDefault();

    // Add glitch effect to body on back to top click
    document.body.classList.add('scroll-glitch');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      document.body.classList.remove('scroll-glitch');
    }, 500);
  });

  // Add scroll glitch style
  const scrollGlitchStyle = document.createElement('style');
  scrollGlitchStyle.textContent = `
    .scroll-glitch {
      animation: scrollGlitch 0.5s linear;
    }

    @keyframes scrollGlitch {
      0%, 100% {
        filter: none;
      }
      10%, 15%, 25%, 35%, 45% {
        filter: blur(1px) hue-rotate(90deg) saturate(1.5);
      }
      20%, 30%, 40% {
        filter: blur(1px) hue-rotate(-90deg) saturate(1.5);
      }
    }

    .menu-glitch {
      animation: menuGlitch 0.3s linear;
    }

    @keyframes menuGlitch {
      0%, 100% {
        filter: none;
      }
      20%, 80% {
        filter: hue-rotate(90deg) saturate(1.5);
      }
      40%, 60% {
        filter: hue-rotate(-90deg) saturate(1.5);
      }
    }
  `;
  document.head.appendChild(scrollGlitchStyle);

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        // Add glitch effect on navigation
        document.body.classList.add('scroll-glitch');

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          document.body.classList.remove('scroll-glitch');
        }, 500);
      }
    });
  });

  // Active Navigation Link on Scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + header.offsetHeight + 50;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Animate Skill Bars when in viewport
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (barPosition < screenPosition) {
        const width = bar.getAttribute('style') ? bar.getAttribute('style').replace('width: 0%', '') : '';
        if (!width) {
          const targetWidth = bar.parentElement.previousElementSibling.querySelector('span').textContent;
          bar.style.width = targetWidth;
        }
      }
    });
  }

  // Initialize skill bars with 0% width
  skillBars.forEach(bar => {
    bar.style.width = '0%';
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Here you would typically send the form data to a server
      // For now, we'll just log it to the console
      console.log({
        name,
        email,
        subject,
        message
      });

      // Show cyberpunk success message
      const successMessage = document.createElement('div');
      successMessage.classList.add('cyberpunk-alert');
      successMessage.innerHTML = `
        <div class="alert-content">
          <div class="alert-header">[TRANSMISSION SENT]</div>
          <div class="alert-body">Your message has been received. Expect a response within 48 hours.</div>
          <button class="alert-close">CLOSE</button>
        </div>
      `;
      document.body.appendChild(successMessage);

      // Add alert styles
      const alertStyle = document.createElement('style');
      alertStyle.textContent = `
        .cyberpunk-alert {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(10, 10, 15, 0.8);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: alertFadeIn 0.3s ease;
        }

        .alert-content {
          background-color: var(--cyber-gray);
          border: 1px solid var(--neon-blue);
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          position: relative;
          box-shadow: 0 0 30px rgba(0, 243, 255, 0.5);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
        }

        .alert-header {
          color: var(--neon-green);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px var(--neon-green);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .alert-body {
          color: #ffffff;
          margin-bottom: 2rem;
        }

        .alert-close {
          background-color: var(--cyber-dark);
          color: var(--neon-blue);
          border: 1px solid var(--neon-blue);
          padding: 0.5rem 1rem;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
        }

        .alert-close:hover {
          background-color: var(--neon-blue);
          color: var(--cyber-dark);
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
        }

        @keyframes alertFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(alertStyle);

      // Close alert on button click
      const closeButton = successMessage.querySelector('.alert-close');
      closeButton.addEventListener('click', function() {
        successMessage.style.opacity = '0';
        setTimeout(() => {
          successMessage.remove();
          alertStyle.remove();
        }, 300);
      });

      // Reset form
      contactForm.reset();
    });
  }

  // Add animation to elements when they come into view
  const animateElements = document.querySelectorAll('.section-header, .about-content, .timeline-item, .project-card, .education-card, .skills-group, .contact-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');

        // Add glitch effect when element comes into view
        entry.target.classList.add('glitch-effect');
        setTimeout(() => {
          entry.target.classList.remove('glitch-effect');
        }, 200);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animateElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });
});
