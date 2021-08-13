exports.handler = async function http(req) {

    // parameters passed in from url (e.g. /suggestions/:seed) are accessed 
    // through req.pathParameters
    let jsonString = {
        1: `${req.pathParameters.seed}<b> bike</b>`,
        2: `${req.pathParameters.seed}<b> treadmill</b>`
    }

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(jsonString)
    }
}