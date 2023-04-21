/* 
/discover/movie?sort_by=popularity.desc 
/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc
/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10
*/
const rating = 0.5;
const circleProgress = document.querySelector(".circle-progress");
const circumference = 2 * Math.PI * 45;
circleProgress.style.strokeDasharray = `${circumference * rating}, ${
  circumference * (1 - rating)
}`;
if (rating >= 0.7) {
  circleProgress.style.stroke = "#4caf50";
} else if (rating >= 0.5) {
  circleProgress.style.stroke = "#ffc107";
} else {
  circleProgress.style.stroke = "#f44336";
}

var items = document.querySelectorAll(".item");

[...items].forEach((item) => {
  item.addEventListener("mouseup", function () {
    if (item.style.transform === "rotateY(-180deg)") {
      item.style.transform = "rotateY(0deg)";
    } else {
      item.style.transform = "rotateY(-180deg)";
    }
  });
});
