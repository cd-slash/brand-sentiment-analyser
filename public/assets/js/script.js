function enableAnalysis() {
    document.getElementById("analyse-button").disabled = false;
}

function createListItem(itemText) {

    let element = document.createElement('li');
    element.className = 'list-item'
    element.innerHTML = `
            <span>${itemText}</span>
            <i class="fas fa-plus-circle add-to-research"></i>
    `
    return element;

}

async function analyseSearches() {
    // avoid repeat search for the same seed by disabling analyse button 
    document.getElementById("analyse-button").disabled = true;

    const seed = document.getElementById("seed-input").value;
    const topSearches = await fetch(`../top/${seed}`)
        .then(response => response.json()); // chain instead of await to avoid multiple variables
    const questions = await fetch(`../questions/${seed}`)
        .then(response => response.json());
    const competitors = await fetch(`../competitors/${seed}`)
        .then(response => response.json());
    const concerns = await fetch(`../concerns/${seed}`)
        .then(response => response.json());
    // populate each list individually, asynchronously
    // TODO: handle errors, e.g. empty lists
    // TODO: parse ASCII tokens (e.g. &#39, for apostrophe)
    populateResultsList('top-searches', topSearches);
    populateResultsList('questions', questions);
    populateResultsList('competitors', competitors);
    populateResultsList('concerns', concerns);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');

    // clear any existing results
    resultsList.innerHTML = '';

    results.forEach((result) => {
        resultsList.appendChild(createListItem(result));
    });
}