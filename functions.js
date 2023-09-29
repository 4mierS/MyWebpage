// Description: This file contains all the functions that are used in the website
var overlay = document.createElement('div');
overlay.id = "overlay";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
overlay.style.zIndex = "8";


function opened() {
  console.log("opened() was called");

  document.addEventListener('click', (e) => {
    // Check if it is a button
    if (e.target && e.target.id.startsWith("btn-")) {
      var popup = document.getElementById(e.target.parentNode.parentNode.id);
      var popupBtn = document.getElementById(e.target.id);
      var popupStr = e.target.parentNode.parentNode.id;
      console.log("This is: " + popupStr);
        
      //if the popup is open, i cant srcoll
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable Scrolling
      window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false);

      popup.style.display = "block";
      popup.style.position = "absolute";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.zIndex = "9";
      popup.style.backgroundColor = "white";
      popup.style.width = "50%";
      popup.style.height = "50%";
      popup.style.borderRadius = "10px";
      popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      popupBtn.style.display = "none";
      document.body.appendChild(overlay);

      popup.onclick = function () {
        popup.style = {};
        popupBtn.style.display = "block";

      //Call this to Enable Scrolling 
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }
    }
  });
}
