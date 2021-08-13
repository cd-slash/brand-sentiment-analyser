const fetch = require("node-fetch");

const myHeaders = new fetch.Headers();
myHeaders.append("Cookie", "CONSENT=PENDING+855");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

async function getSuggestions(seed) {

    // long url - using multi-line string instead of template literals for easier reading
    const response = await fetch(
        "https://www.google.com/complete/search?q="
        + seed 
        + "&cp=1&client=gws-wiz&xssi=t",
        requestOptions);
    
    // fetch is asynchronous, so use await to avoid returning an empty result
    let responseText = await response.text();
    
    // response has "JSON hijacking" protection characters at the start; substring strips these
    // see: https://stackoverflow.com/questions/26955167/json-data-that-starts-with-closing-brackets
    const responseJSON = JSON.parse(responseText.substring(5));
    
    const results = responseJSON[0].map(x => x[0] // result is first item in each sub-node
            .replace('<b>', '').replace('</b>', '')) // remove bold tags
        .filter(x => x != seed); // filter out the seed itself
    
    return results;
}

async function combinedSuggestionLists(
    seed, seedModifier1, seedModifier2, returnLength1, returnLength2
) {
    const resultsList1 = await getSuggestions(`${seedModifier1} ${seed}`);
    const resultsList2 = await getSuggestions(`${seed} ${seedModifier2}`);

    // combine lists using ES6 destructuring
    return [
        ...resultsList1.slice(1, returnLength1 + 1),
        ...resultsList2.slice(1, returnLength2 + 1)
    ];

}

module.exports.combinedSuggestionLists = combinedSuggestionLists;
module.exports.getSuggestions = getSuggestions;