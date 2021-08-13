let Suggestions = require('@architect/shared/suggestions')

exports.handler = async function http(req) {
    
    // req.pathparameters accesses the parameters from the url (e.g. seed in /top/:seed)
    const seed = req.pathParameters.seed;
    const badResults = await Suggestions.getSuggestions(`bad ${seed}`);
    const problemResults = await Suggestions.getSuggestions(`${seed} help`);

    // combine first 3 "bad" items and first 2 "problem" items (using ES6 destructuring)
    const top5 = [...badResults.slice(1, 4), ...problemResults.slice(1, 3)];

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(top5)
    }
}