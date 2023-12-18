import axios from 'axios';

export async function callServerApi (data) {
	const res = await axios.post('http://localhost:4500/server_api', { request_data: data });
	return res.data;
}