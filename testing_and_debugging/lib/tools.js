let https = require('https');

let tools = {
    sayHi() {
        return 'hello';
    },

    loadWiki(string, callback) {
        let url = `https://en.wikipedia.org/wiki/${string}`;

        https.get(url, res => {

            let body = '';

            res.setEncoding('UTF-8');

            res.on('data', chunk => {
                body += chunk
            });

            res.on('end', () => {
                callback(body)
            });
        })
    }
};

module.exports = tools;