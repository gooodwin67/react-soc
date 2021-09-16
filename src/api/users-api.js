import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'ed0424e4-eda9-44bd-83fd-de6bd13289bc'
    }

})

export const usersApi = {
    getUsers(currentPage, countOnPage) {
        return (
            instance.get(`users?page=${currentPage}&count=${countOnPage}`).then(response => response.data)
        )
    },
    follow(id) {
        return (
            instance.post('follow/' + id).then(response => response.data)
        )
    },
    unfollow(id) {
        return (
            instance.delete('follow/' + id).then(response => response.data)
        )
    }
}