console.log("Script Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {

    // 🔥 Force event as ARRIVED RIGHT NOW
    showArrival();

    function showArrival() {

        // Hide countdown numbers
        document.querySelector(".countdown-container").style.display = "none";

        // Show message
        document.getElementById("countdownMessage").innerHTML =
            `<div class="arrival-popup">
                ⚡🔥 HERO HAS ARRIVED! 🔥⚡
            </div>`;

        // Flash screen
        document.getElementById("flash").classList.add("active");

        // Hero power glow
        const hero = document.getElementById("heroImage");
        hero.classList.add("hero-power");

        // Remove LIVE badge
        const badge = document.querySelector(".live-badge");
        if (badge) {
            badge.innerText = "LIVE NOW";
            badge.style.background = "limegreen";
        }
    }

});
