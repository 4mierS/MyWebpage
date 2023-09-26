// Path: functions.js
function opened() {
    console.log("opened() was called");
    var popup = null; // Initialize popup outside the event listener
    
    document.addEventListener('click', (e) => {
        //if it is a button
        if ( e.target && e.target.id.startsWith("btn-") ) {

            popup = document.getElementById(e.target.parentNode.parentNode.id);
            popupBtn = document.getElementById(e.target.id);
            popupStr = (e.target.parentNode.parentNode.id);
            console.log("This is: "+ popupStr);
            
            
            popup.style.display = "block";
            popup.style.position = "absolute";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.zIndex = "100";
            popup.style.backgroundColor = "white";
            popup.style.width = "50%";
            popup.style.height = "50%";
            popup.style.borderRadius = "10px";
            popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
            popupBtn.style.display = "none";
               
            popup.onclick = function() {
                popup.style = {};
                popupBtn.style.display = "block";
            }

        }  
    }
    );
}