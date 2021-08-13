async function getSuggestions(seed) {
    
    const fetch = require("node-fetch");

    const myHeaders = new fetch.Headers();
    myHeaders.append("Cookie", "CONSENT=PENDING+855");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

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
    
    // get actual results (first item in each array), removing bold tags
    let results = responseJSON[0]
        .map(x => x[0].replace('<b>', '').replace('</b>', '')) 
        .filter(x => x != seed); // filter out the seed itself
    
    return results; // actual suggestions are in the first JSON node
}

module.exports.getSuggestions = getSuggestions;