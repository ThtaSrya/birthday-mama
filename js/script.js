const birthday = new Date(2026, 10, 29, 0, 0, 0); // Bulan 10 = November
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownCaption = document.getElementById("countdownCaption");

function updateCountdown() {
  const now = new Date();
  let target = birthday;
  if (now > birthday && now.toDateString() !== birthday.toDateString()) {
    target = new Date(2027, 10, 29, 0, 0, 0);
  }
  const distance = target - now;
  if (now.toDateString() === birthday.toDateString()) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    countdownCaption.textContent = "Hari ini adalah hari istimewa Mama! Selamat ulang tahun! ♡";
    return;
  }
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);
  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Musik: browser biasanya memerlukan interaksi pengguna sebelum audio diputar.
const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add("playing");
      musicLabel.textContent = "Musik menyala";
      musicToggle.setAttribute("aria-label", "Jeda musik");
    } catch (error) {
      musicLabel.textContent = "Tambahkan file MP3";
      alert("File musik belum tersedia. Tambahkan file bernama birthday.mp3 ke folder assets/music, lalu coba lagi.");
    }
  } else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicLabel.textContent = "Putar musik";
    musicToggle.setAttribute("aria-label", "Putar musik");
  }
});

// Surat interaktif.
const letterModal = document.getElementById("letterModal");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const modalBackdrop = document.getElementById("modalBackdrop");

function showLetter() {
  letterModal.classList.add("open");
  letterModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function hideLetter() {
  letterModal.classList.remove("open");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
openLetter.addEventListener("click", showLetter);
closeLetter.addEventListener("click", hideLetter);
modalBackdrop.addEventListener("click", hideLetter);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideLetter();
});

// Tiup lilin + confetti.
const cake = document.querySelector(".cake");
const blowButton = document.getElementById("blowButton");
const blowMessage = document.getElementById("blowMessage");
const cakeHint = document.getElementById("cakeHint");
let candlesBlown = false;

function launchConfetti(amount = 90) {
  const colors = ["#d58d9c", "#e9c99b", "#f1b9b7", "#b7a1b0", "#fff0d5"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.setProperty("--drift", `${Math.random() * 240 - 120}px`);
    piece.style.setProperty("--fall-time", `${2.3 + Math.random() * 2.5}s`);
    piece.style.animationDelay = `${Math.random() * .7}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

blowButton.addEventListener("click", () => {
  if (!candlesBlown) {
    cake.classList.add("blown");
    candlesBlown = true;
    blowButton.innerHTML = 'Nyalakan lagi <span>↻</span>';
    blowMessage.textContent = "Yay! Semoga semua harapan baik Mama terkabul. ♡";
    cakeHint.textContent = "Make a wish, and let it come true ✨";
    launchConfetti(110);
  } else {
    cake.classList.remove("blown");
    candlesBlown = false;
    blowButton.innerHTML = 'Tiup lilinnya <span>✧</span>';
    blowMessage.textContent = "Lilin sudah menyala kembali. Buat harapan baru!";
    cakeHint.textContent = "Tiga lilin kecil, sejuta doa baik ✨";
  }
});

// Taburan bintang dekoratif.
const sparkleLayer = document.getElementById("sparkleLayer");
for (let i = 0; i < 24; i++) {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.textContent = Math.random() > 0.5 ? "✦" : "✧";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 12}px`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  star.style.animationDuration = `${3 + Math.random() * 4}s`;
  sparkleLayer.appendChild(star);
}
