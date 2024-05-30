const img = document.querySelector("img");
const canvas = document.querySelector("canvas");
const resultPara = document.querySelector(".alert")

function resolveCanvasDimensions() {
const { width, height } = window.getComputedStyle(img);

canvas.width = +parseFloat(width) * 2;
canvas.height = +parseFloat(height) * 2;

canvas.style.width = width * 2;
canvas.style.height = height * 2;
const ctx = canvas.getContext("2d");

ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

async function dataUrlToBlob(url) {
return fetch(url).then((res) => res.blob());
}
    

function toggleButtons(enabled) {
document.querySelectorAll("em").forEach((button) => {
enabled
? button.removeAttribute("disabled")
: button.setAttribute("disabled", true);
});
}

    
function share() {
let start = Date.now();
toggleButtons(false);
resolveCanvasDimensions();
let canvascopy = Date.now();
let url = canvas.toDataURL("image/png");
let dataurl = Date.now();
dataUrlToBlob(url).then((blob) => {
let blobtime = Date.now();
var file = new File([blob], "prev.png", {
type: "image/png"
});
var filesArray = [file];
var shareData = { files: filesArray };

if (navigator.canShare && navigator.canShare(shareData)) {
// Adding title afterwards as navigator.canShare just
// takes files as input
shareData.title = "Profile Pic Generator";
shareData.text = "Profile Pic Generator";
shareData.url = "https://susahcebok.github.io/laughing-invention/";

navigator
.share(shareData)
.then(() => /* alert("Share was successful")) */ resultPara.textContent = "shared successfully");
.catch((error) =>
/* alert("Sharing failed") */ resultPara.textContent = `Error: Sharing failed`
);
} else {
alert("Your system doesn't support sharing files");
}
toggleButtons(true);
});
}

function initialize() {
img.addEventListener(
"load",
() => {
toggleButtons(true);
},
false
);
img.crossOrigin = "Anonymous";
img.src =
"https://susahcebok.github.io/laughing-invention/prev.png";
}

document.getElementById("share").addEventListener("click", share);

toggleButtons();
initialize();
