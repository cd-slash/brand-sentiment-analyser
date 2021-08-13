exports.handler = async function http(req) {

    const fetch = require("node-fetch");
    var myHeaders = new fetch.Headers();
    myHeaders.append("Cookie", "CONSENT=PENDING+855");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    // long url - using multi-line string instead of template literals for easier reading
    const response = await fetch(
        "https://www.google.com/complete/search?q="
        + req.pathParameters.seed // parameter passed in from url (/suggestions/:seed) 
        + "&cp=1&client=gws-wiz&xssi=t",
        requestOptions);

    // fetch is asynchronous, so use await to avoid returning an empty result
    let responseText = await response.text();
    // response has some "JSON hijacking" protection characters at the start
    // so substring is used to strip leading characters that invalidate JSON
    // see: https://stackoverflow.com/questions/26955167/json-data-that-starts-with-closing-brackets
    const responseJSON = JSON.parse(responseText.substring(5));

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(responseJSON)
    }
}