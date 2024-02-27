const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.error('Error fetch details:', error);
  } else {
    console.log('Description:', desc);
  }
});