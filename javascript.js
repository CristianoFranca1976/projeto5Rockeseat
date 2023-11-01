let changeCSS = document.getElementsByTagName("img");

for (let i = 0; i < changeCSS.length; i++) {
    changeCSS[i].addEventListener("mouseenter", changeMouseEnter);
    changeCSS[i].addEventListener("mouseleave", changeMouseLeave);
}
function changeMouseEnter(event) {
    event.target.style.border = "1px solid rgb(15, 14, 14)";
    event.target.style.boxShadow = "3px 3px 50px 20px black";
}

function changeMouseLeave(event) {
    event.target.style.border = "none";
    event.target.style.boxShadow = "none";
}