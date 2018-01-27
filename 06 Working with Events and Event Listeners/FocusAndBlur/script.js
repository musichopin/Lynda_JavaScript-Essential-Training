
var emailField = document.getElementById("email");

// **value property olmasına dikkat (innerHTML değil)**
emailField.onfocus = function() {
	if ( emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if ( emailField.value == "") {
		emailField.value = "your email";
	}
};
