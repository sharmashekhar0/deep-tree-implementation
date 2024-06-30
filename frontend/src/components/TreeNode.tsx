"use client";
import React from "react";

type TreeNodeProps = {
	id: number;
	name: string;
	children?: TreeNodeProps[];
};

const TreeNode: React.FC<TreeNodeProps> = ({ id, name, children }) => {
	return (
		<div>
			<p>{name}</p>
			{children &&
				children.map((child) => <TreeNode key={child.id} {...child} />)}
		</div>
	);
};

export default TreeNode;
