const backToTopButton = document.getElementById("back-to-top");

// Show button after scrolling 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Smooth scroll to top
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});