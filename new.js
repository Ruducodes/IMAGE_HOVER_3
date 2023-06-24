const card = document.getElementById("card");
const gradient = document.getElementById("gradient");

gradient.addEventListener("mouseenter", () => {
  card.style.height = "500px";
  card.style.filter = "saturate(100%) blur(0px)";
  gradient.style.opacity = "100%";
});

gradient.addEventListener("mouseleave", () => {
  card.style.height = "700px";
  card.style.filter = "saturate(20%) blur(1.5px)";
  gradient.style.opacity = "0%";
});