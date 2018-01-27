// show and hide sections of a form
function preparePage() {
	document.getElementById("brochures").onclick = function() {
		if (document.getElementById("brochures").checked) {
			// use CSS style to show it
			document.getElementById("tourSelection").style.display = "block";
			// alt: document.getElementById("tourSelection").addClass = "";
		} else {
			// hide the div
			document.getElementById("tourSelection").style.display = "none";
			// alt: document.getElementById("tourSelection").addClass = "someCSSClass";
		}
	};
	// ***now hide it on the initial page load. 
	// this was not done on css page in case js is disabled on user's browser***
	document.getElementById("tourSelection").style.display = "none";
	// alt: document.getElementById("tourSelection").addClass = "someCSSClass";
}

window.onload =  function() {
	preparePage();
};

