import axios from 'axios'

const apiFetch = axios.create({
    baseURL: 'https://api-receitas-pi.vercel.app/receitas',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiFetch;