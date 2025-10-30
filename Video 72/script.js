const container = document.getElementById("videoContainer");
const addBtn = document.getElementById("addBtn");

let count = 1;

// Example function to generate random video data
function getRandomVideo() {
  const titles = [
    "Master JavaScript in 10 Minutes",
    "HTML & CSS Crash Course",
    "Building a Portfolio Website",
    "Learn React from Scratch",
    "Top 10 VS Code Extensions",
    "Node.js Express Tutorial",
  ];

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomViews = Math.floor(Math.random() * 500) + 1 + "K views";
  const randomMonths = ["1 month ago", "2 months ago", "3 weeks ago", "5 days ago"];
  const randomMonth = randomMonths[Math.floor(Math.random() * randomMonths.length)];
  const randomDuration = Math.floor(Math.random() * 9) + ":" + Math.floor(Math.random() * 60).toString().padStart(2, "0");

  return {
    thumbnail: `https://picsum.photos/seed/${Math.random()}/300/180`,
    title: randomTitle,
    views: randomViews,
    uploadTime: randomMonth,
    duration: randomDuration,
  };
}

function addVideoCard() {
  const video = getRandomVideo();

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img class="thumbnail" src="${video.thumbnail}" alt="Thumbnail">
    <div class="details">
      <div class="title">${video.title}</div>
      <div class="meta">
        <span>${video.views}</span>
        <span>${video.uploadTime}</span>
      </div>
      <div class="meta">
        <span>⏱ ${video.duration}</span>
      </div>
    </div>
  `;

  container.appendChild(card);
}

addBtn.addEventListener("click", addVideoCard);
