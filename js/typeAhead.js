const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// this is a empty array till we push the data inside
const cities = [];

// fetching api

fetch(endpoint)
    .then(blob => blob.json())
    // data gives you the name of the cities
    // we are using the spread operator to get all the data and not have a nested array and we are pushing the cities
    .then(data => cities.push(...data))



function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}


function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    console.log(matchArray)
}

// This is for the search input
const searchInput = document.querySelector('.search')

// this will be the city and state
const suggestions = document.querySelector('.suggestions')


// this is once you are done typing on the search input it display
searchInput.addEventListener('change', displayMatches)

// this is on every key
searchInput.addEventListener('keyup', displayMatches)