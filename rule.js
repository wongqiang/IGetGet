module.exports = {
    summary: 'a rule to modify response',
    *beforeSendResponse(requestDetail, responseDetail) {
        console.log(requestDetail.url);
        if (requestDetail.url === 'http://httpbin.org/user-agent') {
            const newResponse = responseDetail.response;
            newResponse.body += '-- AnyProxy Hacked! --';
            return new Promise((resolve, reject) => {
                setTimeout(() => { // delay
                    resolve({response: newResponse});
                }, 100);
            });
        }
    },
};