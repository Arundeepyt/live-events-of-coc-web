const events = [
  {
    title: "Gold Rush",
    description: "Earn double gold in battles today!"
  },
  {
    title: "Hero Boost",
    description: "Heroes gain +20% power today!"
  },
  {
    title: "War Frenzy",
    description: "Clan war rewards increased!"
  }
];

const today = new Date().getDay();
const event = events[today % events.length];

document.getElementById("event-title").innerText = event.title;
document.getElementById("detail-title").innerText = event.title;
document.getElementById("detail-description").innerText = event.description;

function updateCountdown() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);

  const diff = midnight - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `Ends in: ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("viewBtn").addEventListener("click", () => {
  document.getElementById("eventDetails").classList.remove("hidden");
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("eventDetails").classList.add("hidden");
});
