import axios from 'axios';
import { useEffect, useState } from 'react';
import {
	Button,
	FlatList,
	ListRenderItem,
	SafeAreaView,
	TextInput,
} from 'react-native';
import { ClothingCard } from './components/ClothingCard';
import { ClothingItem } from './types';
import { getData, postData } from './api';

export default function App() {
	const [data, setData] = useState();
	const [productTitle, setProductTitle] = useState<string>('');
	const [forceReRender, setForceReRender] = useState(0);

	useEffect(() => {
		const fetch = async () => {
			await getData()
				.then((response) => setData(response))
				.catch((error) => console.log(error));
		};
		fetch();
	}, [forceReRender]);

	const Item = ({ item }: { item: ClothingItem }) => (
		<ClothingCard
			id={item.id}
			title={item.title}
			image={item.image}
			price={item.price}
			key={item.id}
		/>
	);

	const renderItem: ListRenderItem<ClothingItem> = ({ item }) => (
		<Item item={item} />
	);

	const handleSaveProduct = async () => {
		postData({
			id: 'abc',
			image: './gsjhdfgajhdfa.png',
			title: productTitle,
			price: 32,
			description: 'Lorem ipsum dolors sit amet...',
			category: 'winter',
		})
			.then(() => setForceReRender((prev) => prev + 1))
			.catch((error) => console.log(error));
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<TextInput
				style={{
					borderWidth: 1,
					borderColor: 'grey',
					height: 30,
					width: '100%',
				}}
				value={productTitle}
				onChangeText={(value) => setProductTitle(value)}
			/>
			<Button title='Save' onPress={handleSaveProduct} />

			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item: ClothingItem) => item.id}
			/>
		</SafeAreaView>
	);
}
