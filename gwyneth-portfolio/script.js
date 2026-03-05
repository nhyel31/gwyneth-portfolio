// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Simple Console Log to confirm script is working
console.log("Portfolio loaded successfully!");