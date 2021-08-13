let Suggestions = require('@architect/shared/suggestions')

exports.handler = async function http(req) {
    
    // req.pathparameters accesses the parameters from the url (e.g. seed in /top/:seed)
    const seed = req.pathParameters.seed;
    const results = await Suggestions.getSuggestions(seed);
    const top5 = results.slice(1, 6); // return first 5 items only

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(top5)
    }
}