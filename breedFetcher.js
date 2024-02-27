const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  // Making a GET request to the API endpoint
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    // Checking the status code of the response
    if (response.statusCode !== 200) {
      callback(`Unexpected status code: ${response.statusCode}`, null);
      return;
    }

    // Parsing the JSON string into an object
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('Breed not found.', null);
      return;
    }

    // Access the first entry in the data array and return the description
    const firstBreed = data[0];

    if (!firstBreed) {
      callback('No breed information found.', null);
      return;
    }

    callback(null, firstBreed.description);
  });
};

module.exports = { fetchBreedDescription };