let Suggestions = require('@architect/shared/suggestions')

exports.handler = async function http(req) {
    
    // req.pathparameters accesses the parameters from the url (e.g. seed in /top/:seed)
    const result = await Suggestions.combinedSuggestionLists(req.pathParameters.seed, 'bad', 'help', 3, 2)

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(result)
    }
}