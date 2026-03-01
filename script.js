console.log("Script Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {

    // target: today at 03:00pm local time
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 8, 0, 0, 0);
    const targetDate = target.getTime();

    let interval;

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(interval);

            document.getElementById("countdownMessage").innerHTML =
                "<h2>🔥 HERO HAS ARRIVED! 🔥</h2>";

            document.getElementById("flash").classList.add("active");

            const hero = document.getElementById("heroImage");
            hero.style.transform = "scale(1.2)";
            hero.style.filter = "drop-shadow(0 0 100px gold)";

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    interval = setInterval(updateCountdown, 1000);

});
