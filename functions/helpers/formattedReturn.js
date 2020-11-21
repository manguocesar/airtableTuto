
//this simplifies the return so that no need to specify the data and stringify the body data

module.exports = (statusCode, body) => {
    return {
        statusCode,
        body: JSON.stringify(body),
    };
};
