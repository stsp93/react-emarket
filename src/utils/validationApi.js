// TODO Rearange arguments like (payload, key, minLength, setError) to be (key, payload, minLength, setError)

function minLength(payload, key, minLength, setError) {

    if (payload[key].length < minLength) {
        setError(x => ({ ...x, [key]: `Min length is ${minLength}` }))
    } else {
        setError(x => ({ ...x, [key]: null }))
    }
}

function passwordsMatch(payload, setError) {
    if (payload.password !== payload.repeatPassword) {
        setError(x => ({ ...x, repeatPassword: `Passwords don't match` }))
    } else {
        setError(x => ({ ...x, repeatPassword: null }))
    }
}

function isEmpty(key, payload, setError) {
    if(payload[key] === '') {
        setError(x => ({...x, [key]: `${key.slice(0,1).toUpperCase() + key.slice(1)} can't be empty`}))
    }else {
        setError(x => ({...x, [key]: null}))
    }
}

function validImageUrl(payload, setError) {
    if(!payload.imageUrl.match(/https?:\/\//i)) {
        setError(x => ({...x,imageUrl: 'Invalid Image URL'}))
    } else {
        setError(x => ({...x,imageUrl: null}))
    }
}

function positiveNumber(payload, setError) {
    if(!Number(payload.price) || payload.price <= 0) {
        setError(x => ({...x,price: 'Price must be positive number'}))
    } else {
        setError(x => ({...x,price: null}))
    }
}

const validationApi = {
    minLength,
    passwordsMatch,
    isEmpty,
    validImageUrl,
    positiveNumber
}


export default validationApi