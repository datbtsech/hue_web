let contents = document.querySelectorAll(".content-slider .content");
let index = 0;
function changeContent() {
    contents.forEach(content => content.classList.remove("active"));
    contents[index].classList.add("active");
    index = (index + 1) % contents.length;
}
setInterval(changeContent, 2000);