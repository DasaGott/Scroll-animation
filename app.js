const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const windowLength =
    (window.innerHeight / 5) * 3;
  // nechceme dat nejake fixne cislo, kedy sa budu boxy pridavat na plochu
  // zadali sme trigger point kedy bude box naskakovat na plochu
  // trochu vyssie nad koncom strany
  boxes.forEach((box) => {
    const boxTop =
      box.getBoundingClientRect().top;
    if (boxTop < windowLength) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
