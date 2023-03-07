import * as api from './api.js';

const endpoints = {
    'register' : '/users/register',
    'login' : '/users/login',
    'logout' : '/users/logout',
}

export async function login(email, password) {
    const res = await api.post(endpoints.login,{email, password});
    return res;
}

export async function register(email,username, password) {
    const res = await api.post(endpoints.register,{email, username,password});
    return res;
}

export async function logout() {
    const res = await api.get(endpoints.logout);
    return res;
}