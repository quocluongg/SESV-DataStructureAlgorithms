
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

const bst = new BinarySearchTree();

bst.insert(6);
bst.insert(4);
bst.insert(8);
bst.insert(1);
bst.insert(5);
bst.insert(10);

//Space: O(1), Time: O(h)
function isBST(root) {
    //Space: O(1), Time: O(1)
    if (!root) return true;
    return isBST(root.left) && isBST(root.right);
}

console.log(isBST(bst.getRootNode())); // Output: true