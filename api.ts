import axios, { AxiosResponse } from 'axios';
import { ClothingItem } from './types';

export const getData = async () => {
	const result: AxiosResponse = await axios
		.get('https://fakestoreapi.com/products')
		.catch((error) => {
			return error;
		});
	return result.data;
};

export const postData = async (data: ClothingItem) => {
	axios
		.post('https://fakestoreapi.com/products', data)
		.then((response) => console.log('response', response.data))
		.catch((error) => console.log('error', error));
};
