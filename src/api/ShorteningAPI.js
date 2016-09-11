export default class ShorteningAPI {
    shorten(url) {
        //track if there are any pending requests
        //if there are - abot old and trigger new
        return new Promise(function (resolve) {
            let delay = 1000;

            let response = {
                "url": url,
                "shorten_url": "http://localhost:3000/s4"
            };

            let bitLySampleResponse = {
                "status_code": 200,
                "status_txt": "OK",
                "data": {
                    "long_url": url,
                    "url": "http:\/\/bit.ly\/2ciW6PZ",
                    "hash": "2ciW6PZ",
                    "global_hash": "2ciV2v8",
                    "new_hash": 1
                }
            };

            setTimeout(() => resolve(bitLySampleResponse), delay);
        });
    }
}