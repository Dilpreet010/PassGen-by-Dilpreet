//scroll prevention
window.addEventListener('load', function() {
    document.body.classList.remove('noscroll');
  });
  document.body.classList.add('noscroll');
const slider = document.querySelector(".hamburg-wrapper");
//Modal open function
const openNav = () => {
    console.log("Modal is Open");
    slider.style.width="250px";
    slider.style.visibility="visible";
};
  
//Modal close function
const closeNav = () => {
    slider.style.width="0px";
    slider.style.visibility="hidden";
};  