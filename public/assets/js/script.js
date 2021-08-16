// hardcoded results for testing population of lists
async function analyseSearches() {
    const seed = document.getElementById("seed-input").value;
    const topSearches = await fetch(`../top/${seed}`)
        .then(response => response.json()); // chain instead of await to avoid multiple variables
    console.log(topSearches);
    populateResultsList('top-searches', topSearches);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');
    
    results.forEach((result, i) => {
        const resultElement = resultsList.children[i];
        resultElement.style.display = "flex"; // display:none by default
        
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