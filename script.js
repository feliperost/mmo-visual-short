document.addEventListener("DOMContentLoaded", function() {
    let timer = 120;
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        timer--;
        timerElement.textContent = `Next effect in: ${timer}s`;

        if (timer <= 0) {
            triggerRandomEffect();
            timer = 120; // Reset the timer
        }
    }

    function triggerRandomEffect() {
        const effects = [
            scrambleText,
            flashNegative,
            moveContent
        ];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        randomEffect();
    }

    function scrambleText() {
        const elements = document.querySelectorAll('.content p, .content h2, .content h1');
        elements.forEach(element => {
            const originalText = element.textContent;
            const scrambledText = originalText.split('').sort(() => 0.5 - Math.random()).join('');
            element.textContent = scrambledText;
            setTimeout(() => {
                element.textContent = originalText;
            }, 2000);
        });
    }

    function flashNegative() {
        document.body.style.filter = 'invert(1)';
        setTimeout(() => {
            document.body.style.filter = 'invert(0)';
        }, 200);
    }

    function moveContent() {
        const content = document.querySelector('.content');
        content.style.transform = 'translate(10px, 10px)';
        setTimeout(() => {
            content.style.transform = 'translate(0, 0)';
        }, 2000);
    }

    setInterval(updateTimer, 1000);
});
