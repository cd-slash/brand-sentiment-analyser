// hardcoded results for testing population of lists
function analyseSearches() {
    populateResultsList('top-searches', ['Result 1', 'Result 2']);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');
    results.forEach((result, i) => {
        // getElementsByTagName returns an array, so take the first span since this
        // should always be the current (empty) result text
        const span = resultsList.children[i].getElementsByTagName('span')[0];
        const resultText = document.createTextNode(result);
        // remove any existing text from the span
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild(resultText);
    });
}