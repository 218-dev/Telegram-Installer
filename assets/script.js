document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Install button functionality
    const installBtn = document.getElementById('installBtn');
    
    installBtn.addEventListener('click', function() {
        // Show loading state
        installBtn.innerHTML = '<span class="btn-text">جاري التحميل...</span>';
        installBtn.classList.add('loading');
        
        // Start installation
        setTimeout(() => {
            window.location.href = 'itms-services://?action=download-manifest&url=https://218-dev.github.io/Telegram-Installer/manifest.plist';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                installBtn.innerHTML = '<span class="btn-text">تثبيت التطبيق</span><span class="btn-icon">↓</span>';
                installBtn.classList.remove('loading');
            }, 3000);
        }, 1000);
    });
});
