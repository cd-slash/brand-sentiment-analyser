// hardcoded results for testing population of lists
function analyseSearches() {
    populateResultsList('top-searches', ['Result 1', 'Result 2']);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');
    // TODO: truncate the number of results so it doesn't exceed number of list items
    results.forEach((result, i) => {
        const resultElement = resultsList.children[i];
        // results box is hidden (display=none) by default
        resultElement.style.display = "flex";
        // getElementsByTagName returns an array, so take the first span since this
        // should always be the current (empty) result text
        const span = resultElement.getElementsByTagName('span')[0];
        const resultText = document.createTextNode(result);
        // remove any existing text from the span
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild(resultText);
    });
}