import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
	username: string | null;
};

const initialState: UserState = {
	username: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
		logoutUser(state) {
			state.username = null;
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
