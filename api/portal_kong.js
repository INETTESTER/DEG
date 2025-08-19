import http from 'k6/http';
import { token } from './token.js';

export function portal_kong() {
    const url = 'https://uat-deg-portal.inet.co.th/api/v1/kong';

    const params = {
        headers: {
            'Authorization': 'Bearer '+token,
        },
    };

    const res = http.get(url, params);

    // log response body
    // if(res.status == 500){
    //     console.log('Response body:', res.body);
    // }
    

    // return response
    return res;
}
