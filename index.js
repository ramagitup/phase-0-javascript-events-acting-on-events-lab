let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  dodger.addEventListener("keydown", function(e) {
    if(e.key==="Arrowleft") {
        moveDodgerLeft
    }
  })
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if(left>0) {
      dodger.style.left = `${left + 1}px`
    }
}
dodger.addEventListener("keyup", function(e) {
  if(e.key==="Arrowleft") {
    moveDodgerRight
  }
})
