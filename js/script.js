
const image = document.querySelector(".body-image img");
image.style.top = "55px";
document.addEventListener("mousemove", (e) => {
    let wh = window.innerHeight / 2;
    let ww = window.innerWidth / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    image.style.top = `${(mouseY - ww) * 0.03}px`;
    image.style.left = `${(mouseX - wh) * 0.003}%`;
});