const body = document.querySelector("body");

const IMG_NUM = 4;

function getRandom() {
    const number = Math.floor(Math.random() *IMG_NUM)+1;
    console.log(number);
    return number
}
function handleLoadImg() {
   
    console.log("Loading Finshed");
}
function paintBg(imgNumber) {

    const img = new Image();
    img.src = `Images/${imgNumber+1}.jpg`;
    img.classList.add("bgimage");
    img.addEventListener("loadend" , handleLoadImg);
    body.appendChild(img);
}

function init() {
    const randomNum = getRandom();
    paintBg(randomNum); 
}
init();