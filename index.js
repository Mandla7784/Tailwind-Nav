const themeBtn = document.querySelector("button");
const navBar = document.querySelector("nav");
const searchBar = document.querySelector(".search");
const input = document.querySelector("input");
// event listeners
themeBtn.addEventListener("click", toggleTheme);
let icon = themeBtn.querySelector("ion-icon");
function toggleTheme() {
  // funtion to toggle theme when button is clicked
  navBar.classList.add("bg-[#151924]", "text-white"); // adds bg color and text color
  searchBar.classList.add("bg-[#2d313b]");
  icon.setAttribute(
    "name",
    icon.getAttribute("name") === "moon-outline"
      ? "sunny-outline"
      : "moon-outline"
  );
  icon.classList.add("transition-all", "duration-500");

  input.classList.add("bg-[#2d313b]");
}
