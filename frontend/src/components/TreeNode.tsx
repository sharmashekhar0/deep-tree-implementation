import React, { useState } from "react";
import { TreeNode } from "../utils/TreeImplementation";

type TreeNodeProps = {
	node: TreeNode;
	onUpdateNode: (id: number, newValue: number) => void;
};

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, onUpdateNode }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleNodeClick = () => {
		const newValue = parseInt(inputValue);
		if (!isNaN(newValue)) {
			onUpdateNode(node.id, newValue);
			setInputValue("");
		} else {
			alert("Please enter a valid number.");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div
				style={{
					border: "1px solid black",
					padding: "5px",
					margin: "5px",
				}}
			>
				<span>
					Node {node.id}: {node.value}
				</span>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					style={{ marginLeft: "10px", width: "50px" }}
					placeholder="New value"
				/>
				<button
					onClick={handleNodeClick}
					style={{ marginLeft: "10px" }}
				>
					Update
				</button>
			</div>
			<div style={{ display: "flex" }}>
				{node.left && (
					<TreeNodeComponent
						node={node.left}
						onUpdateNode={onUpdateNode}
					/>
				)}
				{node.right && (
					<TreeNodeComponent
						node={node.right}
						onUpdateNode={onUpdateNode}
					/>
				)}
			</div>
		</div>
	);
};

export default TreeNodeComponent;
