// Simple Ajax example.

// 1: Create the request var
var myRequest;

// feature check and then create request object!
if (window.XMLHttpRequest) {  // does it exist? we're in Firefox, Safari etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2: ***create an event handler for our request to call back as "response".
// we tell what to do when a response comes in before configuring the request.
// onreadystatechange event is called multiple times and every time it is called, 
// it is a different stage of request and response.
// this cud also be click event or window load event***
myRequest.onreadystatechange = function(){
    console.log("We were called!");
    console.log(myRequest.readyState);

    // when we got a readystate of 4 we know that we got a response from the server
    if (myRequest.readyState === 4) { 
    	var p = document.createElement("p");
    	var t = document.createTextNode(myRequest.responseText);
    	// **txt'deki data saklanır ve doma aktarılır**
    	p.appendChild(t); /*alt: p.innerHTML = myRequest.responseText;*/
    	document.getElementById("mainContent").appendChild(p);
    }
};

// 3: we configure and send the request
// open and send it (true means asynchronous)
myRequest.open('GET', 'simple.txt', true); 
// normally we wud use server-side data instead of a local text file
// we send the request with no parameters
myRequest.send(null);

// ***if we had more code below it would be executed without us having 
// to wait which is why we set up the event handler above***
// console.log(1234);