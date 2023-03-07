export function saveUserSession(user) {
    sessionStorage.setItem('session',JSON.stringify(user))
}

export function getUser() {
    const user = JSON.parse(sessionStorage.getItem('session')) 
    return user
}

export function removeUserSession() {
    sessionStorage.removeItem('session');
}