var overlays = []; // Declare an array to store created overlays

function opened() {
  console.log("opened() was called");

  document.addEventListener('click', (e) => {
    // Check if it is a button
    if (e.target && e.target.id.startsWith("btn-")) {
      var popup = document.getElementById(e.target.parentNode.parentNode.id);
      var popupBtn = document.getElementById(e.target.id);
      var popupStr = e.target.parentNode.parentNode.id;
      console.log("This is: " + popupStr);

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

      // Create an overlay div so that you can't click on the background
      var overlay = document.createElement('div');
      overlay.id = "overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
      overlay.style.zIndex = "8";
      document.body.appendChild(overlay);

      // Push the overlay into the array
      overlays.push(overlay);

      popup.onclick = function () {
        popup.style = {};
        popupBtn.style.display = "block";

        // Remove all overlays
        overlays.forEach(function (overlay) {
          if (overlay.parentNode) {
            document.body.removeChild(overlay);
          }
        });

        // Clear the overlays array
        overlays = [];
      }
    }
  });
}
