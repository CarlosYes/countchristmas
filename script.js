function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new               Date(currentDate.getFullYear(), 11, 25); 

    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


function createRandomSnowflakes(numSnowflakes) {
    const body = document.body;

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px'; 
        snowflake.style.top = '0'; 
        body.appendChild(snowflake);

        animateSnowflake(snowflake);
    }
}

function animateSnowflake(snowflake) {
    const duration = Math.random() * 10 + 5;
    const speed = Math.random() * 3 + 1;

    snowflake.style.animation = `fall ${duration}s linear infinite`;
    snowflake.style.animationDelay = `${Math.random() * duration * -1}s`;
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;

    setTimeout(() => {
        snowflake.remove();
        createRandomSnowflakes(1);
    }, duration * 1000);
}

createRandomSnowflakes(100);