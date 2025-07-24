document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function() {
        let color = this.style.background;
        let bgClass = this.getAttribute('data-bg');
        let quote = this.getAttribute('data-quote');

        // Change Background
        document.body.className = bgClass;

        // Change Quote
        document.getElementById('quote').textContent = quote;

        // Color Splash Effect
        createSplashEffect(event.clientX, event.clientY, color);
    });
});

function createSplashEffect(x, y, color) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: x,
            y: y,
            radius: Math.random() * 20 + 5,
            color: color,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 - 2,
            alpha: 1
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.alpha -= 0.02;

            if (p.alpha <= 0) {
                particles.splice(index, 1);
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });

        if (particles.length > 0) {
            requestAnimationFrame(animateParticles);
        }
    }

    animateParticles();
}
