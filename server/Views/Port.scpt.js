// Smooth Scroll with Slower Effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        const offsetTop = targetSection.offsetTop;

        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Custom animation for slower scrolling
        const scrollStep = 10;
        const scrollInterval = 10; // Higher values for slower scrolling
        let currentScroll = window.pageYOffset;

        const smoothScroll = setInterval(() => {
            if (currentScroll < offsetTop) {
                window.scrollBy(0, scrollStep);
                currentScroll += scrollStep;
                if (currentScroll >= offsetTop) {
                    clearInterval(smoothScroll);
                }
            } else {
                window.scrollBy(0, -scrollStep);
                currentScroll -= scrollStep;
                if (currentScroll <= offsetTop) {
                    clearInterval(smoothScroll);
                }
            }
        }, scrollInterval);
    });
});

// Typing Effect in Text
const typing = document.querySelector('.typing');
const text = 'Bhojaviya Abhishekkumar Balvantbhai';
let index = 0;
function type() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

// Image Transition Effects
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
});
