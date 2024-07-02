const button = document.getElementById("btn");

const colors = [
  "#FF5733",
  "#F9FF33",
  "#3371FF",
  "red",
  "green",
  "rgb(85, 255, 51)",
];

button.addEventListener("click", () => {});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
