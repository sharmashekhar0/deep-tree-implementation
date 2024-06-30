class TreeNode {
	id: number;
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(id: number, value: number) {
		this.id = id;
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	root: TreeNode | null;

	constructor() {
		this.root = null;
	}

	addNode(id: number, value: number): void {
		const newNode = new TreeNode(id, value);
		if (!this.root) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	private insertNode(node: TreeNode, newNode: TreeNode): void {
		if (newNode.id < node.id) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (!node.right) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	inorderTraversal(
		node: TreeNode | null,
		visit: (node: TreeNode) => void
	): void {
		if (node) {
			this.inorderTraversal(node.left, visit);
			visit(node);
			this.inorderTraversal(node.right, visit);
		}
	}

	updateNodeValue(id: number, newValue: number): void {
		const findAndModify = (node: TreeNode | null): TreeNode | null => {
			if (!node) return null;
			if (id < node.id) {
				node.left = findAndModify(node.left);
			} else if (id > node.id) {
				node.right = findAndModify(node.right);
			} else {
				node.value = newValue;
			}
			return node;
		};
		this.root = findAndModify(this.root);
	}

	findNode(id: number): TreeNode | null {
		const find = (node: TreeNode | null): TreeNode | null => {
			if (!node) return null;
			if (id < node.id) {
				return find(node.left);
			} else if (id > node.id) {
				return find(node.right);
			} else {
				return node;
			}
		};
		return find(this.root);
	}
}

export { TreeNode, Tree };
export default Tree;
