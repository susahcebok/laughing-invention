var btns = document.querySelectorAll(".popup");
for (let b of btns) {
  b.onclick = () => {
    let modal = b.parentElement.querySelector(".modal")
    let span = modal.querySelector(".close");
    modal.style.display = "block";
    
    span.onclick = () => {
      modal.style.display = "none";
    }
    
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}
