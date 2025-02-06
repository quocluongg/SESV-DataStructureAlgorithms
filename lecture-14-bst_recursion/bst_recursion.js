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
        if (this.root === null) {
            this.root = new Node(data);
            return;
        }

        function searchLeaf(currentNode) {
            if (data < currentNode.val) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(data);
                } else {
                    searchLeaf(currentNode.left);
                }
            } else if (data > currentNode.val) {
                if (currentNode.right === null) {
                    currentNode.right = new Node(data);
                } else {
                    searchLeaf(currentNode.right);
                }
            }
        }

        searchLeaf(this.root);
    }
    exist(data) {
        function searchNode(currentNode) {
            if (currentNode === null) {
                return false;
            }

            if (data < currentNode.val) {
                return searchNode(currentNode.left);
            } else if (data > currentNode.val) {
                return searchNode(currentNode.right);
            } else {
                return true; // Tìm thấy giá trị
            }
        }

        return searchNode(this.root);
    }
    delete(data) {
        function deleteNode(root, data) {
            if (root === null) {
                return root;
            }

            if (data < root.val) {
                root.left = deleteNode(root.left, data);
            } else if (data > root.val) {
                root.right = deleteNode(root.right, data);
            } else {
                if (root.left === null) {
                    return root.right;
                } else if (root.right === null) {
                    return root.left;
                }

                root.val = findMin();
                root.right = deleteNode(root.right, root.val);
            }

            return root;
        }

        this.root = deleteNode(this.root, data);
    }
    findMin() {
        let current = this.root;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current ? current.val : null;
    }

    findMax() {
        let current = this.root;
        while (current && current.right !== null) {
            current = current.right;
        }
        return current ? current.val : null;
    }
    preOrder() {
        if (this.root == null) {
          return null
        } else {
          var result = []
          traversePreOrder(this.root)
          return result
    
          function traversePreOrder(node) {
            result.push(node.val)
            node.left && traversePreOrder(node.left)
            node.right && traversePreOrder(node.right)
          }
        }
    }
    inOrder() {
        if (this.root == null) {
          return null
        } else {
          var result = []
          traverseInOrder(this.root)
          return result
    
          function traverseInOrder(node) {
            node.left && traverseInOrder(node.left)
            result.push(node.val)
            node.right && traverseInOrder(node.right)
          }
        }
      }
      postOrder() {
        if (this.root == null) {
          return null
        } else {
          var result = []
          traversePostOrder(this.root)
          return result
    
          function traversePostOrder(node) {
            node.left && traversePostOrder(node.left)
            node.right && traversePostOrder(node.right)
            result.push(node.val)
          }
        }
      }
}

let bst = new BST();

bst.insert(6);
bst.insert(4);
bst.insert(8);
bst.insert(1);
bst.insert(5);
bst.insert(10);

console.log(JSON.stringify(bst, null, 4))
console.log(bst.postOrder()) // [6, 4, 1, 5, 8, 10]