// 현재 시각 표시
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const timeString = now.toLocaleTimeString("ko-KR", { hour: '2-digit', minute: '2-digit' });
  clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// 오버레이 영상
const overlay = document.getElementById("video-overlay");
const introVideo = document.getElementById("introVideo");

// 사용자 터치 시 닫기
overlay.addEventListener("touchstart", () => {
  overlay.classList.remove("active");
  overlay.classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
});

// 메뉴에서 안내영상 보기
function playVideo() {
  const modal = document.getElementById("modal");
  const video = document.getElementById("manualVideo");
  modal.classList.remove("hidden");
  video.currentTime = 0;
  video.play();

  // 모달 바깥 터치 시 닫기
  document.getElementById("modal-bg").onclick = () => {
    video.pause();
    modal.classList.add("hidden");
  };
}
