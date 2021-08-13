const Suggestions = require('@architect/shared/suggestions')

exports.handler = async function http(req) {
    
    // req.pathparameters accesses the parameters from the url (e.g. seed in /top/:seed)
    const seed = req.pathParameters.seed;
    const suggestions = await Suggestions.getSuggestions(`${seed} vs`);
    const competitors = suggestions.map(x => x.replace(`${seed} vs `, ''))
    const top5 = competitors.slice(1, 6); // return first 5 items only

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(top5)
    }
}