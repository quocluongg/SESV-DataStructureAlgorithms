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

function inorderTraversal(root) {
    let stack = [];
    let result = [];
    let currentNode = root;

    while (currentNode !== null || stack.length > 0) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.right;
        }

        currentNode = stack.pop();
        result.push(currentNode.val);
        currentNode = currentNode.left;
    }

    return result;
}

// Test the code
const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(4);
bst.insert(8);
bst.insert(1);
bst.insert(5);
bst.insert(10);

console.log(inorderTraversal(bst.getRootNode())); // Output: [1, 4, 5, 6, 8, 10]