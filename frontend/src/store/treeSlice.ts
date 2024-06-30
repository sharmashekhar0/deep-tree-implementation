import { createSlice } from "@reduxjs/toolkit";

interface TreeNode {}

interface TreeState {
	treeData: TreeNode | null;
}

const initialState: TreeState = {
	treeData: null,
};

const treeSlice = createSlice({
	name: "tree",
	initialState,
	reducers: {
		initializeTree(state, action) {
			state.treeData = action.payload;
		},
		updateNodeValue(state, action) {},
	},
});

export const { initializeTree, updateNodeValue } = treeSlice.actions;

export default treeSlice.reducer;
