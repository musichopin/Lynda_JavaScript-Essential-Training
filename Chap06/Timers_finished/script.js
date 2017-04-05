// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	// ***alt: myImage.src = imageArray[imageIndex];***
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
// **we store the returned value so that we can reference it by passing inside clearInterval()**
var intervalHandle = setInterval(changeImage,3000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
	alert("image stopped");
};









