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


function biggestSum(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return root.val;

    let leftSum = biggestSum(root.left);
    let rightSum = biggestSum(root.right);
    
    return root.val + Math.max(leftSum, rightSum);
}


console.log(biggestSum(bst.getRootNode())); 
