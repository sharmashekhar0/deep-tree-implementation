import React, { useState } from "react";
import { Tree, TreeNode } from "../utils/TreeImplementation";
import TreeNodeComponent from "../components/TreeNode";

const TreeComponent: React.FC = () => {
	const [tree, setTree] = useState<Tree | null>(null);
	const [updatedNode, setUpdatedNode] = useState<TreeNode | null>(null);

	React.useEffect(() => {
		const initialTree = new Tree();
		initialTree.addNode(1, 1);
		initialTree.addNode(2, 1);
		initialTree.addNode(3, 1);
		setTree(initialTree);
	}, []);

	const handleUpdateNode = (id: number, newValue: number) => {
		if (tree) {
			tree.updateNodeValue(id, newValue);
			setUpdatedNode(tree.findNode(id));
		}
	};

	if (!tree) return null;

	return (
		<div className="bg-zinc-900 mx-8 p-8 rounded">
			<h1 className="text-3xl font-bold">Tree Structure.</h1>
			<TreeNodeComponent
				node={tree.root}
				onUpdateNode={handleUpdateNode}
			/>
		</div>
	);
};

export default TreeComponent;
