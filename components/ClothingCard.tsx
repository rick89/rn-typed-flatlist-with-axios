import { Image, Text, View } from 'react-native';

interface ClothingCardProps {
	id: string;
	title: string;
	image: string;
	price: number;
}

export const ClothingCard = ({
	id,
	title,
	image,
	price,
}: ClothingCardProps) => {
	return (
		<View key={id}>
			<Image
				style={{ height: 100, width: 200 }}
				source={{ uri: image }}
			/>
			<Text>{title}</Text>
			<Text>£{price}</Text>
		</View>
	);
};
