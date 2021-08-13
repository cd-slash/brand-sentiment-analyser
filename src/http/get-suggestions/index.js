exports.handler = async function http(req) {

    let jsonString = {1: "Peloton<b> bike</b>", 2: "Peloton<b> treadmill</b>"}

    return {
        headers: { 'content-type': 'application/json; charset=utf8' },
        statusCode: 200,
        body: JSON.stringify(jsonString)
    }
}