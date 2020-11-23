/** *****  CSS  TRANSITION ANIMATION HELPER function ************ */
function fadeIn(element) {
    element.classList.add('show');
    console.log(element);
    setTimeout(() => {
      element.style.opacity = '1';
    }, 20);
  }
  
  function fadeOut(element) {
    element.style.opacity = '0';
  
    setTimeout(() => {
      element.classList.remove('show');
    }, 500);
  }