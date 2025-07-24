const video = document.getElementById("intro-video");
const closeBtn = document.getElementById("close-video-btn");
const menuSection = document.getElementById("menu-section");
const videoSection = document.getElementById("video-section");
const timeWeather = document.getElementById("time-weather");

function updateTimeWeather() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // 실제 날씨 API를 연결하려면 서버단 필요함. 현재는 더미 텍스트 사용
  const weather = "맑음";

  timeWeather.textContent = `${hours}:${minutes} / ${weather}`;
}

setInterval(updateTimeWeather, 10000);
updateTimeWeather();

video.addEventListener("ended", () => {
  videoSection.classList.add("hidden");
  menuSection.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  videoSection.classList.add("hidden");
  menuSection.classList.remove("hidden");
});

document.querySelectorAll(".menu-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const videoFile = btn.dataset.video;
    video.querySelector("source").src = "videos/" + videoFile;
    video.load();
    video.play();
    menuSection.classList.add("hidden");
    videoSection.classList.remove("hidden");
  });
});
