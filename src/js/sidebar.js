/* window.onload = () => {
    $(".navbar-toggler").on("click", function () {
      $("#sidebar, #content").toggleClass("active");
      $("body").toggleClass("overflow-y-hidden");
    });
    window.addEventListener("resize", () => {
      $(".navbar-toggler").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
        $("body").toggleClass("overflow-y-hidden");
      });
    });
  }; */

function addNavbarTogglers() {
  const togglers = document.getElementsByClassName("navbar-toggler");
  [...togglers].forEach((toggler) => {
    toggler.addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
      document.getElementById("content").classList.toggle("overflow-y-hidden");
    });
  });
}

module.exports = { addNavbarTogglers };
