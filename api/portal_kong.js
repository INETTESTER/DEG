import http from 'k6/http';

export function portal_kong() {
    const url = 'https://uat-deg-portal.inet.co.th/api/v1/kong';

    const params = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3NTU1NzQwMDEsImhvc3BpdGFsX2NvZGUiOiJEQjYwNSIsImhvc3BpdGFsX25hbWUiOiLguKHguLXguYjguJfguJTguKrguK3guJoiLCJtb3BoIjoiIiwibmFtZSI6IiIsInNlY3VyZV9jb2RlIjoiZjE1NTViNWFkY2Y5ZmM5OGUzZTdmMWM2ODk4ODMyZTQwY2IxMjI2NzQ1MDZiNWYzMjRhNDNlM2IxZGIyMDU1NTJkYjYxYjQ5NDg4NjI1YzczNDI4Mjc3NzZlNjgxNWQ5ZGZkOGM0MDgiLCJzeXN0ZW0iOiJ3ZWIiLCJ1c2VyX2lkIjoiYjI1NWJmZGNkYWZiN2NjNjgyZDJmMTkyOGRhNmFkMzhjZWU1ZjdmNDIwM2JlMzUzNTk1NGYzZTA5NzE3NjkxYTVlMWM0YjU3NTg4MDk0MjBlMiJ9.Ie5z52-HwBy8pAZ7iqneEPO265w6Dcv-gtkiW_aQrzE',
        },
    };

    const res = http.get(url, params);

    // log response body
    //console.log('Response body:', res.body);

    // return response
    return res;
}
