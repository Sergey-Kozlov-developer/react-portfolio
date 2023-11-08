import { createSlice } from "@reduxjs/toolkit";

// начальное состояние
const initialState = {
	categoryId: 0,
};

// create slice
const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
	},
});
export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
