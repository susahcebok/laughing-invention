async function shareCanvas() {
        const canvas = document.getElementById('cvs');
        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();
        const filesArray = [
    new File(
      [blob],
      'prev.png',
      {
        type: blob.type,
        lastModified: new Date().getTime()
      }
    )
  ];
    const shareData = {
        files: filesArray,
        title: "Profile Pic Generator",
        text: "Profile Pic Generator",
        url: "https://susahcebok.github.io/laughing-invention/",
  };
        navigator.share(shareData);
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
