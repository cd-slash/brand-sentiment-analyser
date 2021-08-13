let Suggestions = require('@architect/shared/suggestions')

exports.handler = async function http(req) {
    
    const results = await Suggestions.getSuggestions('Peloton');

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(results)
    }
}