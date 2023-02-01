let image8 = document.getElementById("image8");

image8.addEventListener("click", function() {
image8.style.position = "fixed";
image8.style.top = "50%";
image8.style.left = "50%";
image8.style.transform = "translate(-50%, -50%)";
image8.style.zIndex = "3";
closeButton.style.display = "block";
closeButton.style.zIndex = "4";
closeButton.style.position = "absolute";
});
closeButton.addEventListener("click", function() {
image8.style.position = "static";
image8.style.top = "";
image8.style.left = "";
image8.style.transform = "";
image8.style.zIndex = "";
closeButton.style.display = "none";
});