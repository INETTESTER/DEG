import http from 'k6/http';

export function gateway_get() {
    const url = 'https://uat-deg.inet.co.th/api/loadtest/get';
    const params = {
        headers: {
            'Cookie': 'Path=/',
        },
    };

    const res = http.get(url, params);

    // log response body
    //console.log('Response body:', res.body);

    // return response
    return res;
}
