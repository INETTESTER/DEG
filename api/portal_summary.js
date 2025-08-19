import http from 'k6/http';
import { token } from './token.js';

export function portal_summary() {
    const url = 'https://uat-deg-portal.inet.co.th/api/v1/workspaces/meta';

    const params = {
        headers: {
            'Authorization': 'Bearer '+token,
        },
    };

    const res = http.get(url, params);

    // log response body
    //console.log('Response body:', res.body);

    // return response
    return res;
}
