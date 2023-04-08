const endpoints = {
    upload: 'https://content.dropboxapi.com/2/files/upload',
    sharing: 'https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings',
    delete: 'https://api.dropboxapi.com/2/files/delete_v2'
}


async function request(url, payload) {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_DROPBOX_API_KEY}`,
            'Content-Type': 'application/json'
        }
    }
    if (payload?.path_display) {
        options['body'] = JSON.stringify({
            path: payload.path_display,
            settings: {
                requested_visibility: 'public'
            }
        })
    } else if (typeof payload === 'string') {
        options['body'] = JSON.stringify({
            path: `/images/${payload}`
        })
    } else if (payload) {
        options.headers['Dropbox-API-Arg'] = JSON.stringify({
            path: '/images/'+ Date.now() ,
            mode: 'add',
            autorename: true,
            mute: false,
        });
        options.headers['Content-Type'] = 'application/octet-stream'
        options['body'] = payload
    }

    try {
        const res = await fetch(url, options)
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function uploadImage(file) {
    const res = await request(endpoints.upload, file);
    return res
}

export async function createLink(response) {
    const res = await request(endpoints.sharing, response);
    return res
}


export async function deleteImage(url) {
const fileNamePattern = /https:\/\/.+\/(.+)\?dl=0&raw=1/g

    const fileName = fileNamePattern.exec(url)[1]
    const res = await request(endpoints.delete, fileName);
    return res
}

