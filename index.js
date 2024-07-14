const themeBtn = document.querySelector("button");
const navBar = document.querySelector("nav");
const searchBar = document.querySelector(".search");

// event listeners
themeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  // funtion to toggle theme when button is clicked
  navBar.classList.add("bg-[#151924]", "text-white"); // adds bg color and text color
  searchBar.classList.add("bg-[#2d313b]");
  const input = document.querySelector("input");
  input.classList.add("bg-[#2d313b]");
}
