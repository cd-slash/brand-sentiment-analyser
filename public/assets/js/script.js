// hardcoded results for testing population of lists
function createListItem(itemText) {

    let element = document.createElement('li');
    element.innerHTML = `
        <li class="list-item">
            <span>${itemText}</span>
            <i class="fas fa-plus-circle add-to-research"></i>
        </li>
    `
    return element;

}

// TODO: clicking analyse twice re-runs the analysis and appends the same items
async function analyseSearches() {
    const seed = document.getElementById("seed-input").value;
    const topSearches = await fetch(`../top/${seed}`)
        .then(response => response.json()); // chain instead of await to avoid multiple variables
    console.log(topSearches);
    populateResultsList('top-searches', topSearches);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');
    
    results.forEach((result) => {
        resultsList.appendChild(createListItem(result));
    });
}