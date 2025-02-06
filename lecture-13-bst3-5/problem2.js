class Node {
    constructor(data) {
        this.val = data; // Node stores value in "val"
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.val < node.val) { // Corrected: use .val
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    getRootNode() {
        return this.root;
    }
}

// Test the code
const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(4);
bst.insert(8);
bst.insert(1);
bst.insert(5);
bst.insert(10);

function printAllPaths(root) {
    if (!root) return [];

    let stack = [{ node: root, path: [] }];
    let result = [];

    while (stack.length > 0) {
        let { node, path } = stack.pop();
        let newPath = [...path, node.val];

        if (!node.left && !node.right) {
            result.push(newPath);
        }

        if (node.right) stack.push({ node: node.right, path: newPath });
        if (node.left) stack.push({ node: node.left, path: newPath });
    }

    return result;
}

console.log(printAllPaths(bst.getRootNode())); 
