// two global variables
var secondsRemaining;
var intervalHandle;
var paused = false; // **used as a flag**

function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}

function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // add a leading zero (as a string value) if seconds less than 10
    // also adds color when less than 10 seconds available
    if (sec < 10) {
        if (min === 0) {
            timeDisplay.style.color = "red";
        }
        sec = "0" + sec;
    }

    // concatenate with colon (no need for toString() method)
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle); 
        // ***doesnt exit from the tick() function. however this tick() 
        // function is not called from within startCountdown() function anymore***
        resetPage();
    }
    // subtract from seconds remaining
    secondsRemaining--;
    // **if statementın aşağısında olmasına dikkat**
}

function test() {
    if (!paused) tick();
}

function toggleCountdown() {
    if (!paused) {
        paused = true;
        document.getElementById("toggle").value = "Resume";
    } else {
        paused = false;
        document.getElementById("toggle").value = "Pause";
    }
}

function startCountdown() {
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
    // check if not a number
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }
    if (minutes < 1 || minutes > 10) {
        alert("Please enter a number between 1 and 10 minutes!")
        return;
    }

    // how many seconds?
    secondsRemaining =  minutes * 60;
    // ***every 1 second, call the "tick" function and then within tick 
    // function decrement secondsRemaining by 1**
    intervalHandle = setInterval(test, 1000);
    // hide the form
    document.getElementById("inputArea").style.display = "none";

    // event handler for toggling 
    // ***(startButton.onclick event handlingin içinde bulunmasına dikkat)***
    document.getElementById("toggle").onclick = function () {
        toggleCountdown();
    };
}

// as soon as the page is loaded...
window.onload =  function () {
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    // create pause button
    var toggleButton = document.createElement("input");
    toggleButton.setAttribute("type","button");
    toggleButton.setAttribute("value", "Pause");
    toggleButton.setAttribute("id", "toggle");
    toggleButton.style.width="50%";
    toggleButton.style.height="40px";

    startButton.onclick = function () {
        startCountdown();
    };

    // add elements to the DOM
    document.getElementById("toggle-wrapper").appendChild(toggleButton)
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};