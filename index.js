const leftSide = document.getElementById("margin-left-side");
const rightSide = document.getElementById("margin-right-side");

(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.main-box');
      
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if ((positionFromTop +50) - windowHeight <= 0) {

          element.classList.add('left-right-animation');
          leftSide.style.display = "flex";
          rightSide.style.display = "flex";

        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();