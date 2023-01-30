function mobileMenu() {
    var node = document.getElementByClass("nav-links");
    document.getElementByClass("menu").appendChild(node);
    toggle();
  }
  
  function toggle() {
    var x = document.getElementByClass("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
  }
  document.getElementByClass("nav-link").addEventListener("click", mobileMenu);