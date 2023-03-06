const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// this is a empty array till we push the data inside
const cities = [];

// fetching api

fetch(endpoint)
    .then(blob => blob.json())
    // data gives you the name of the cities
    // we are using the spread operator to get all the data and not have a nested array and we are pushing the cities
    .then(data => cities.push(...data))
