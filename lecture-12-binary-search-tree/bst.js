class Node {
    constructor(data){
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(data){
        this.root = data ? new Node(data) : null;
    }
    insert(data){
        if(this.root === null) {
            this.root = new Node(data);
            return;
        } else {
            function searchLeaf(currentNode) {
                if(currentNode.left === null || currentNode.right === null){
                    if(data < currentNode.val) return currentNode.left = new Node(data);
                    if(data > currentNode.val) return currentNode.right = new Node(data);
                }
                if(data < currentNode.left.val){
                    searchLeaf(currentNode.left);
                }
                if(data > currentNode.right.val){
                    searchLeaf(currentNode.right);
                }
            } 
            searchLeaf(this.root);
        }
    }
    delete(data) {
        if(this.root === null) {
            return;
        } else {
            function searchLeaf(currentNode) {
                if(currentNode.left === null && currentNode.right === null){
                    return;
                }
                if(data === currentNode.left.val) {
                    currentNode.left = null;
                }
                if(data === currentNode.right.val) {
                    currentNode.right = null;
                }
                if(data < currentNode.left.val){
                    searchLeaf(currentNode.left);
                }
                if(data > currentNode.right.val){
                    searchLeaf(currentNode.right);
                }
            }
            searchLeaf(this.root);
        }
    }
}


const bst1 = new BST();
bst1.insert(50);
bst1.insert(17);
bst1.insert(72);
bst1.insert(12);