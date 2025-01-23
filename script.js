// Countdown Timer
const eventDate = new Date("February 3, 2025 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("eventCountdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("eventCountdown").innerHTML = "The event has started!";
    }
}, 1000);

// Interactive Feature: Scroll Animation
window.addEventListener('scroll', () => {
    const details = document.querySelector('.details');
    if (window.scrollY > details.offsetTop - window.innerHeight + 100) {
        details.style.transform = 'translateY(0)';
        details.style.opacity = '1';
        details.style.transition = 'all 0.5s ease-in';
    }
});
