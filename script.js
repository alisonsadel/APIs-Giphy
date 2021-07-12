// Create request object to retrieve JSON data
var request = new XMLHttpRequest();

// Use Open Method to create request
request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=p4Vt3iXwcw8FVLRnrO2kA0o29YgmsAh5&tag=penguin');

// Function to handle extracted data once response is completed
request.onload = function() {
	var response = request.response;
	// Parse API Response - Convert from string to object
	var parsedData = JSON.parse(response);
	var originalUrl = parsedData.data.images.original.url;
	console.log(originalUrl);

	//Load gif on webpage
	var gif = document.createElement('img'); // Create image element and assign to variable
	gif.setAttribute('src', originalUrl);
	document.body.appendChild(gif);
};

// Send request
request.send();