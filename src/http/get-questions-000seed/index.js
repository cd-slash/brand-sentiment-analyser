let Suggestions = require('@architect/shared/suggestions')

exports.handler = async function http(req) {
    
    // req.pathparameters accesses the parameters from the url (e.g. seed in /top/:seed)
    const seed = req.pathParameters.seed;
    const whatResults = await Suggestions.getSuggestions(`what ${seed}`);
    const whichResults = await Suggestions.getSuggestions(`which ${seed}`);

    // combine first 3 what items and first 2 which items (using ES6 destructuring)
    const top5 = [...whatResults.slice(1, 4), ...whichResults.slice(1, 3)];

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(top5)
    }
}