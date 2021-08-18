function enableAnalysis() {
    document.getElementById("analyse-button").disabled = false;
}

function createListItem(itemText) {

    let element = document.createElement('li');
    // Give the item a unique ID - source: https://gist.github.com/gordonbrander/2230317
    const id = Math.random().toString(36).substr(2, 9);
    element.id = id;
    element.className = 'list-item'
    element.innerHTML = `
        <span>${itemText}</span>
        <i class="fas fa-plus-circle add-to-research" onclick="addToResearch(this);"></i>
    `
    return element;

}

async function analyseSearches() {
    // avoid repeat search for the same seed by disabling analyse button 
    document.getElementById("analyse-button").disabled = true;

    // clear lists 
    ['top-searches', 'questions', 'competitors', 'concerns'].forEach(x => {
        document.getElementById(`${x}-list`).innerHTML = '';
        document.getElementById(`loading-${x}`).style.removeProperty('display');
    });

    // show the results area
    document.getElementById("results-area").style.maxHeight = "3000px";

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

    results.forEach((result) => {
        resultsList.appendChild(createListItem(result));
    });

    // hide the loading animation in the box header
    document.getElementById(`loading-${listName}`).style.display = 'none';
}

// time delay function that can be awaited in a loop
// source: https://stackoverflow.com/a/44476626/726221
const timeDelay = ms => new Promise(resolve => setTimeout(resolve, ms));

// function is async so we can await the time delay (specified in ms)
async function typewriterText(target, textStrings, charDelay) {

    // span that the text will be inserted into / removed from
    const targetNode = document.getElementById(target);

    // Run on a continuous loop
    while (true) {

        for (let i = 0; i <= (textStrings.length - 1); i++) {

            // remove any existing characters one-by-one, with a delay between each
            const existingText = targetNode.textContent;
            for (let x = 0; x <= existingText.length; x++) {
                targetNode.textContent = existingText.substring(0, existingText.length - x);
                await timeDelay(charDelay);
            }

            // add the characters in the string one-by-one
            for (let y = 0; y <= textStrings[i].length; y++) {
                targetNode.textContent = textStrings[i].substring(0, y);
                await timeDelay(charDelay);
            }

            // pause while the full brand is displayed
            await timeDelay(3000);
        }

        // pause longer on the last item ("your brand")
        await timeDelay(3000);
    }
}

function alternateBrandSuggestions() {

    const brands = [
        'Starbucks',
        'Peloton',
        'Playstation',
        'Greggs',
        'Amazon',
        'Coca Cola',
        'your brand'
    ]
    typewriterText('title-search-seed', brands, 50);
}

function addToResearch(e) {
    const itemID = e.parentNode.id;
    let newList = document.createElement('ul');
    // true means deep clone the list item - i.e. get the elements within it too
    newNode = document.getElementById(itemID).cloneNode(true);
    // get the icon element in the list item
    iconNode = newNode.getElementsByTagName("i")[0]
    // remove the add to research button
    iconNode.classList.remove("fa-plus-circle");
    iconNode.classList.remove("add-to-research");
    // add an open in new tab button
    iconNode.classList.add("fa-external-link-alt");
    iconNode.classList.add("external-search");
    // append the item to the research list
    newList.appendChild(newNode);
    targetList = document.getElementById("further-research-body");
    targetList.appendChild(newList);
}