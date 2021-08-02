window.onscroll = () => {
  Navfunction();
};

let navbar = document.getElementById("navbar-main");
let sticky = navbar.offsetTop;
function Navfunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
