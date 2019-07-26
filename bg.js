const body = document.querySelector("body");


function getRandom() {
    const number = Math.floor(Math.random() *IMG_NUM);
    return number
}
function handleLoadImg() {
    console.log("Loading Finshed");
}
function paintBg() {

    const img = new Image();
    img.src = randomImage(3000,3000 ,'city night');
    img.classList.add("bgimage");
    body.appendChild(img);
}

function randomImage(wid, hei ,theme) {
    const randPics = `https://source.unsplash.com/random/${wid}x${hei}/?${theme}`;
    return randPics;
}

function init() {
     paintBg(); 
}
init();