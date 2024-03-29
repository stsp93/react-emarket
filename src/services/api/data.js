import * as api from './api.js';

const endpoints = {
    'allCategories': '/items/categories',
    'allInCategory': (category) => `/items?cat=${category}`,
    'create': '/items',
    'byId': (id) => `/items/${id}`,
    'search': (query, category) => `/items?q=${query}&cat=${category}`,
    'profile': '/users/profile',
    'messages': '/users/replies',
    'messageById': (id) => `/users/replies/${id}`,
    'image-upload': '/items/image-upload'
}

export async function uploadImages(payload) {
    // TODO : Dropbox API request
    const res = await api.post(endpoints['image-upload'], payload)
    return res;
}

export async function getAllCategories() {
    const res = await api.get(endpoints.allCategories);
    return res;
}

export async function getCategoryResults(category) {
    const res = await api.get(endpoints.allInCategory(category));
    return res;
}

export async function createListing(payload) {
    const res = await api.post(endpoints.create, payload);
    return res;
}

export async function getItemDetails(id) {
    const res = await api.get(endpoints.byId(id));
    return res;
}

export async function deleteItemListing(id) {
    const res = await api.del(endpoints.byId(id));
    return res;
}

export async function editListing(id, payload) {
    const res = await api.put(endpoints.byId(id), payload);
    return res;
}

export async function searchItems(query) {
    const res = await api.get(endpoints.search(query.q || '', query.cat || ''));
    return res;
}

export async function getProfile() {
    const res = await api.get(endpoints.profile);
    return res;
}

export async function getMessages() {
    const res = await api.get(endpoints.messages);
    return res;
}

export async function sendMessage(username, message) {
    const res = await api.post(endpoints.messages, { username, reply: message });
    return res;
}

export async function deleteMessage(messageId) {
    const res = await api.del(endpoints.messageById(messageId));
    return res;
}