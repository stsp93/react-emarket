const endpoints = {
    upload: 'https://content.dropboxapi.com/2/files/upload',
    sharing: 'https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings'
}

async function request(url, file) {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_DROPBOX_API_KEY}`,
        }
    }
    if (file?.path_display) {
        options['body'] = JSON.stringify({
            path: file.path_display,
            settings: {
                requested_visibility: 'public'
            }
        })
        options.headers['Content-Type'] = 'application/json'
    } else if (file) {
        options.headers['Dropbox-API-Arg'] = JSON.stringify({
            path: '/images/' + file.name,
            mode: 'add',
            autorename: true,
            mute: false,
        });
        options.headers['Content-Type'] = 'application/octet-stream'
        options['body'] = file
    }

    try {
        const res = await fetch(url , options)
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



