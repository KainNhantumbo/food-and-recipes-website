import axios from 'axios';

const accessToken = () => {
	var token;
	if (typeof window !== 'undefined') {
		token = JSON.parse(localStorage.getItem('uminoToken') || `{"token": ""}`);
	}
	console.log(token?.token);
	return `Bearer ${token?.token}`;
};

const fetchData = axios.create({
	baseURL: 'http://localhost:4670/api/v1/services',
	headers: { authorization: `Bearer ${accessToken()}` },
});

fetchData.interceptors.response.use((response) => {
	if (response.statusText === 'Unauthorized') {
		window.location.assign('/login');
		console.log('Aborted')
	}
	return response;
}, (err)=> {return Promise.reject(err)});
export default fetchData;
