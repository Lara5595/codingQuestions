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
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    }).join('');
    suggestions.innerHTML = html;
}

// This is for the search input
const searchInput = document.querySelector('.search')

// this will be the city and state
const suggestions = document.querySelector('.suggestions')


// this is once you are done typing on the search input it display
searchInput.addEventListener('change', displayMatches)

// this is on every key
searchInput.addEventListener('keyup', displayMatches)