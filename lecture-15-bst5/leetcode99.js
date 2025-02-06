/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//Space: O(n), Time: O(n) 
var recoverTree = function (root) {
    //Space: O(1), Time: O(1)
    let first = null;
    //Space: O(1), Time: O(1)
    let second = null; 
    //Space: O(1), Time: O(1)
    let prev = null;

    //Space: O(n), Time: O(n)
    const inOrder = (node) => {
        if (!node) return;

        inOrder(node.left);

        if (prev && prev.val > node.val) {
            if (!first) {
                first = prev;
            }
            second = node;
        }
        prev = node;

        inOrder(node.right);
    };

    inOrder(root);

    //Time: O(1), Space: O(1)
    if (first && second) {
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};