import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ItemType = 'clothing' | 'outfit';

export type ClothingItem = {
	id: string;
	title: string;
	category: string;
	description: string;
	image: string;
	price: number;
	rating: {};
};

type ClothingItemState = {
	clothingItems: ClothingItem[];
};

const initialState: ClothingItemState = {
	clothingItems: [],
};

export const clothingSlice = createSlice({
	name: 'clothing-slice',
	initialState,
	reducers: {
		saveClothing(state, action: PayloadAction<ClothingItem>) {
			state.clothingItems.push({
				...action.payload,
			});
		},
		deleteClothing(state, action: PayloadAction<string>) {
			const itemIndex = state.clothingItems.findIndex((item) => {
				return item.id === action.payload;
			});
			state.clothingItems.splice(itemIndex, 1);
		},
	},
});

export default clothingSlice;
export const { saveClothing, deleteClothing } = clothingSlice.actions;
