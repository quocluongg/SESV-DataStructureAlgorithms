let nodeCount = 1;

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
  this.id = nodeCount++;
}

// Create the tree structure
var root = new Node(0);
root.children.push(new Node(5));
root.children.push(new Node(3));
root.children.push(new Node(6));
root.children[0].children.push(new Node(4));
root.children[1].children.push(new Node(2));
root.children[1].children.push(new Node(0));
root.children[2].children.push(new Node(1));
root.children[2].children.push(new Node(5));
root.children[1].children[0].children.push(new Node(1));
root.children[1].children[1].children.push(new Node(10));
root.children[1].children[0].children[0].children.push(new Node(1));

//Input: Start node
//Output: all possible path
//Time: O(n) ~ set+ stack, Time: O(n) - visit all node
const dfsSalesPath = (node) => {
  const visited = new Set(); // visited
  const stack = [[node, []]]; // stack
  const paths = []; //path

  //Space: O(n), Space: O(n) ~ visit all node in graph
  while (stack.length > 0) {
    const [currentNode, currentPath] = stack.pop(); // Get current node and current path

    // add the current node's cost to the path
    const newPath = currentPath.concat(currentNode.cost);

    // if is leaf node, save the path and computing sum
    if (currentNode.children.length === 0) {
        paths.push([newPath.join(','), newPath.reduce((sum, cost) => sum + cost, 0)]);
    } else {
      // add the neighbor(children)
      for(let neighbor of currentNode.children){
        if (!visited.has(neighbor.id)) {
            visited.add(neighbor.id); // mark as visited
            stack.push([neighbor, newPath]); // push into stack
        }
      };
    }
  }

  return paths;
};

console.log('All possible paths & costs:', dfsSalesPath(root));

