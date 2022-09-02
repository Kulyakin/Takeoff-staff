// Запрос к серверу


import axios from "axios"

export const getUsers = () => {
    axios.get('http://localhost:3001/users')
        .then((r) => {
            const data = r.data
            return data
        })
        .catch((e) => console.log(e))
}

export const getUser = (id) => {
    axios.get(`http://localhost:3001/users/${id}`)
        .then((r) => {
            const { data } = r
        })
        .catch((e) => console.log(e))
}

export const getUsers2 = () => {
    const data = fetch('http://localhost:3001/users')
        .then((r) => {
            r.json()
        })
        .then((r) => {
            const users = r.users
            console.log(users)
        }
        )
        .catch((e) => console.log(e))
}



