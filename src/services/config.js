import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://www.algoritolabs.com.br/api/',
})