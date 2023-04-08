// TODO Rearange arguments like (payload, key, minLength, setError) to be (key, payload, minLength, setError)

function minLength(payload, key, minLength, setErrors) {

    if (payload[key].length < minLength) {
        setErrors(x => ({ ...x, [key]: `Min length is ${minLength}` }))
    } else {
        setErrors(x => ({ ...x, [key]: null }))
    }
}

function passwordsMatch(payload, setErrors) {
    if (payload.password !== payload.repeatPassword) {
        setErrors(x => ({ ...x, repeatPassword: `Passwords don't match` }))
    } else {
        setErrors(x => ({ ...x, repeatPassword: null }))
    }
}

function isEmpty(key, payload, setErrors) {
    if(payload[key] === '') {
        setErrors(x => ({...x, [key]: `${key.slice(0,1).toUpperCase() + key.slice(1)} can't be empty`}))
    }else {
        setErrors(x => ({...x, [key]: null}))
    }
}

function positiveNumber(payload, setErrors) {
    if(!Number(payload.price) || payload.price <= 0) {
        setErrors(x => ({...x,price: 'Price must be positive number'}))
    } else {
        setErrors(x => ({...x,price: null}))
    }
}

function imagesValidation(payload, setErrors) {
    if (payload.length > 3) return setErrors(x => ({ ...x, images: 'Maximum 3 images allowed' }))
    if (payload.some(i => !i.type.startsWith('image'))) return setErrors(x => ({ ...x, images: 'Only images allowed for upload' }))
    if (payload.some(i => i.size > 2097152 )) return setErrors(x => ({ ...x, images: 'Maximum allowed size is 2 MB' }))

    setErrors(x => ({ ...x, images: null }))
    return true;
}

const validationApi = {
    minLength,
    passwordsMatch,
    isEmpty,
    positiveNumber,
    imagesValidation
}


export default validationApi