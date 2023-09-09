import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com',
})


const setToken = (token) =>
	(instance.defaults.headers.common['Authorization'] = `Bearer ${token}`)

export const deleteToken = () =>
	delete instance.defaults.headers.common['Authorization']

export const login = async (body) => {
	const { data } = await instance.post('/users/login', body)
	setToken(data.token)
	return data
}

export const getAllUsers = async () => {
	const { data } = await instance('/users')
	return data
}