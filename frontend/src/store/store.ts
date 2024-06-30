import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import treeReducer from "./treeSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		tree: treeReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
