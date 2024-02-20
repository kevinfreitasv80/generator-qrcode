const form = document.querySelector("form");
const img = document.querySelector("img");
const span = document.querySelector("span");

form.addEventListener("submit", e => {
    e.preventDefault();

    const sizeSelected = e.target.size.value;
    const text = e.target.text.value;
    if (!text) {
        span.style.display = "block";
        return false;
    }else span.style.display = "none";

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${sizeSelected}x${sizeSelected}&data=${text}`;
    img.src = url;
});