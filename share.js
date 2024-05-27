async function shareCanvas() {
        const response = await fetch('prev.png');
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
