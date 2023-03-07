const host = 'http://localhost:3030'

async function request(method, url, payload) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const user =  JSON.parse(sessionStorage.getItem('session')) 
    if(user) {
        const token = user.token;
        options.headers['authorization'] = token
    }
    if(payload !== undefined) {
        options['body'] = JSON.stringify(payload)
    }

    try {
        const res = await fetch(host+url,options);

        if(!res.ok) {
            const error = await res.json();
            if(res.status === 403) {
                sessionStorage.removeItem('session');
            }
            throw new Error(error.errors)
        }

        if(res.status === 204) {
            return res;
        } 
        const data = await res.json()
        return data;

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del
}