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


//Space: O(n), Time: O(n^2)
function zigzagLevelOrder(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (!leftToRight) {
            currentLevel.reverse();
        }

        result.push(currentLevel);
        leftToRight = !leftToRight; 
    }

    return result;
}


console.log(zigzagLevelOrder(bst.getRootNode()));