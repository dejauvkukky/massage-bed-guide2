let idleTimer;
const idleTimeout = 30000;

function navigateToMenu() {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('menu-screen').style.display = 'block';
  document.getElementById('promo-video').pause();
  resetIdleTimer();
}

function openModal(videoPath) {
  const modal = document.getElementById('modal');
  const video = document.getElementById('modal-video');
  video.src = videoPath;
  modal.style.display = "block";
  video.play();
  resetIdleTimer();
}

function closeModal() {
  const modal = document.getElementById('modal');
  const video = document.getElementById('modal-video');
  video.pause();
  video.src = "";
  modal.style.display = "none";
}

function resetToMain() {
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('main-screen').style.display = 'block';
  const promo = document.getElementById('promo-video');
  promo.load();  // 강제 리셋
  promo.play();
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    closeModal();
    resetToMain();
  }, idleTimeout);
}

document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('click', resetIdleTimer);
document.addEventListener('touchstart', resetIdleTimer);
