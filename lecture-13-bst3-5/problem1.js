class Node {
    constructor(data) {
        this.data = data;
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
        if (newNode.data < node.data) {
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

    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
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


//Space: O(n), Time: O(n)
let printLayerByLayer = function(root) {
    //Space: O(n), Time: O(1)
    let queue = [];
    //Space: O(n), Time: O(1)
    let result = [];
    //Space: O(1), Time: O(1)
    queue.push(root);
    //Space: O(1), Time: O(n)
    while(queue.length > 0){
      let currentNode = queue.shift();
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
      result.push(currentNode.data);
    }
    return result;
}

console.log(printLayerByLayer(bst.getRootNode()));