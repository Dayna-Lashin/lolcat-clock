var time = new Date().getHours(); // current time

var wakeupTime = 9; // 9am
var noon = 12; // 12pm
var lunchTime = 12; // 12pm
var napTime = lunchTime + 2; // 2PM
var partyTime = 17; // 5pm
var evening = 18; // 6pm

// party button is not clicked
var isPartyTime = false;
// selecting party button in html
var partyTimeButton = document.getElementById("partyTimeButton");

// selecting each of the three dropdowns in the html
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


// updates the lolcat content and runs website clock
var updateClock = function()
	{
	  // changing message over the image
	  var messageText;
	  // default image
	  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp- content/uploads/2016/09/cat5.jpg";

	  // selecting the white overlay text on the image in html
	  var timeEvent = document.getElementById("timeEvent");
	  // selecting the photo of the lolcat in html
	  var lolcat = document.getElementById("lolcat");

	  // change messageText and image based on the time
	  if (time == partyTime)
	  	{
	   		messageText = "IZ PARTEE TIME!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	    }

	  else if (time == napTime)
	    {
	      messageText = "IZ NAP TIME…";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	    }

	  else if (time == lunchTime)
	    {
	      messageText = "IZ NOM NOM TIME!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	    }

	  else if (time == wakeupTime)
	    {
	      messageText = "IZ TIME TO GET UP!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	    }

	  else if (time < noon)
	    {
	      messageText = "Good morning!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	    }

	  else if (time > evening)
	    {
	      messageText = "Good evening!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	    }

	  else
	    {
	      messageText = "Good afternoon!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	    }

	// changes the text based on what time it is in html
	timeEvent.innerText = messageText;
	// changes the img based on what time it is in html
	lolcat.src = image;

	// call current time function
	showCurrentTime();
	};


// website clock
var showCurrentTime = function()
  {
  	// display the time string on the webpage
    var clock = document.getElementById('clock');

    // Get current time
    var currentTime = new Date(); // new date object
    var hours = currentTime.getHours(); // hours
    var minutes = currentTime.getMinutes(); // mins
    var seconds = currentTime.getSeconds(); // seconds
    var meridian = "AM"; // setting AM and PM

    // set hours and AM vs PM
    if (hours >= noon)
    	{
      	meridian = "PM";
    	}

    if (hours > noon)
    	{
      	hours = hours - 12;
    	}

    // set minutes
    if (minutes < 10)
    	{
      	minutes = "0" + minutes;
    	}

    // set seconds
    if (seconds < 10)
    	{
      	seconds = "0" + seconds;
    	}

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

		// show the new time in the html
    clock.innerText = clockTime;
  };

  // calls update image and text function
  updateClock();

	// Clock has 1 second interval
  var oneSecond = 1000;
	// sets interval
  setInterval( updateClock, oneSecond);


// party Time Button
var partyEvent = function()
	{
		// if button hasn't been clicked
  	// starts false bc false = not clicked
		if (isPartyTime === false)
	  	{
      	// change value so we know button was clicked
      	isPartyTime = true;
      	// set time to partyTime to change image and messageText
      	time = partyTime;
      	// button text changes
      	partyTimeButton.innerText = "PARTY TIME!!!";
		  	// button color changes
		  	partyTimeButton.style.backgroundColor = "#808080";
    	}

    // if button has been clicked
	  else
		  {
		  	// change value so we know button was clicked
      	isPartyTime = false;
      	// set time back to the current time
      	time = new Date().getHours();
      	// button text changes
		  	partyTimeButton.innerText = "PARTY OVER";
      	// button color changes
		  	partyTimeButton.style.backgroundColor = "#222";
    	}
  };

// click event listener for party button
partyTimeButton.addEventListener("click", partyEvent);


// drop down selectors
// changes value based on what's selected
var wakeUpEvent = function()
{
  wakeupTime = wakeUpTimeSelector.value;
};

// changes value based on what's selected
var lunchEvent = function()
{
  lunchTime = lunchTimeSelector.value;
};

// changes value based on what's selected
var napEvent = function()
{
  napTime = napTimeSelector.value;
};

// event listeners for the change in value
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
