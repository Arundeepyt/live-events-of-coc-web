<script>
const targetDate = new Date("March 10, 2026 18:00:00").getTime();

const timer = setInterval(function() {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);

    document.getElementById("countdown").innerHTML = 
      "<h2 style='color:#ff0066;'>🔥 HERO HAS ARRIVED! 🔥</h2>";

    // Trigger flash
    const flash = document.getElementById("lightFlash");
    flash.classList.add("light-active");

    // Extra glow effect on hero
    document.getElementById("heroImage").style.filter =
      "drop-shadow(0 0 60px #ffcc00)";
  }

}, 1000);
</script>