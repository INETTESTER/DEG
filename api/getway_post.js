import http from 'k6/http';

export function getway_post() {
    const url = 'https://uat-deg.inet.co.th/api/loadtest/post';
    const payload = JSON.stringify({
        name: "Test",
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'Path=/',
        },
    };

    const res = http.post(url, payload, params);

    // log response body
    //console.log('Response body:', res.body);

    // return response
    return res;
}
