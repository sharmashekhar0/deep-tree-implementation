"use client";
import React from "react";
import TreeNode from "./TreeNode";

type TreeProps = {
	data: { id: number; name: string; children?: TreeProps["data"][] };
};

const Tree: React.FC<TreeProps> = ({ data }) => {
	return <TreeNode {...data} />;
};

export default Tree;
