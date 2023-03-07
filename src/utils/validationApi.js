function minLength(payload, key,minLength, setError) {
    
    if(payload[key].length < minLength) {
        setError(x => ({...x, [key]: `Min length is ${minLength}`}))
    } else {
        setError(x => ({...x, [key]: null}))
    }
}

function passwordsMatch(payload, setError){
    if(payload.password !== payload.repeatPassword) {
        setError(x => ({...x, repeatPassword: `Passwords don't match`}))
    } else {
        setError(x => ({...x, repeatPassword: null}))
    }
}

const validationApi = {
    minLength,
    passwordsMatch
}
export default validationApi