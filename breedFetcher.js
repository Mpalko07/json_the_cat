const request = require('request');
const breedName = process.argv[2];

if (!breedName) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// Making a GET request to the API endpoint
request(url, (error, response, body) => {
  if (error) {
    console.error('Error occurred:', error);
    return;
  }

  // Checking the status code of the response
  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }

  // Parsing the JSON string into an object
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  if (data.length === 0) {
    console.error('Breed not found.');
    return;
  }

  // Access the first entry in the data array and print description 
  const firstBreed = data[0];

  if (!firstBreed) {
    console.error('No breed information found.');
    return;
  }

  console.log('Description:', firstBreed.description);
});