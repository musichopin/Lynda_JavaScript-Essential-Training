// Simple Ajax example.

// 1: Create the request 
var myRequest;

// feature check!
if (window.XMLHttpRequest) {  // does it exist? we're in Firefox, Safari etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2: create an event handler for our request to call back
// **we set up listening before we asked the question below with send method, 
// since its possible that response wud be sent back before we fully set up the listener code
// (send metodu sonrasında response oluyor diye düşün)**
myRequest.onreadystatechange = function(){
    console.log("We were called!");
    console.log(myRequest.readyState);
    if (myRequest.readyState === 4) {
        var p = document.createElement("p");
        var t = document.createTextNode(myRequest.responseText);
        p.appendChild(t); // alt: p.innerHTML = myRequest.responseText
        document.getElementById("mainContent").appendChild(p);
        // alt:
        // document.getElementById("mainContent").innerHTML = myRequest.responseText;
    }
};

// 3: open the file (normally a php file)
myRequest.open('GET', 'simple.txt', true);

// 4: send the request
// any parameters?
myRequest.send(null);

//....