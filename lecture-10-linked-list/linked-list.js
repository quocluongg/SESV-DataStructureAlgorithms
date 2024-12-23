class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //Total: Space: O(1) , Time: O(n)
  insert(element) {
    //Space: O(1) , Time: O(1)
    const newNode = new Node(element);
    //Space: O(1) , Time: O(1)
    if (this.head === null) {
      //Space: O(1) , Time: O(1)
      this.head = newNode;
    } else {
      //Space: O(1) , Time: O(1)
      let currentNode = this.head;
      //Space: O(1) , Time: O(n)
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //Space: O(1) , Time: O(1)
      currentNode.next = newNode;
    }
    //Space: O(1) , Time: O(1)
    this.length++;
  }
  //Total: Space: O(1) , Time: O(n)
  delete(element) {
    //Space: O(1) , Time: O(1)
    let currentNode = this.head;
    //Space: O(1) , Time: O(1)
    let previousNode;
    //Space: O(1) , Time: O(1)
    if (currentNode.data === element) {
      this.head = currentNode.next;
    } else {
      //Space: O(1) , Time: O(n)
      while (currentNode.data !== element) {
        //Space: O(1) , Time: O(1)
        previousNode = currentNode;
        //Space: O(1) , Time: O(1)
        currentNode = currentNode.next;
      }
      //Space: O(1) , Time: O(1)
      previousNode.next = currentNode.next;
    }
    //Space: O(1) , Time: O(1)
    this.length--;
  }

  //Total: Space: O(1) , Time: O(n)
  search(element) {
    //Space: O(1) , Time: O(1)
    let currentNode = this.head;
    //Space: O(1) , Time: O(n)
    while (currentNode && currentNode.data !== element) {
      //Space: O(1) , Time: O(1)
      currentNode = currentNode.next;
    }
    //Space: O(1) , Time: O(1)
    return currentNode;
  }
}

const linkedList = new LinkedList();
console.log(linkedList);

// insert
linkedList.insert("Quoc");
console.log(linkedList);
// LinkedList { head: Node { data: 'Quoc', next: null }, length: 1 }

linkedList.insert("Kien");
console.log(linkedList);
// LinkedList { head: Node { data: 'Kien', next: Node { data: 'b', next: null } }, length: 2 }

// delete
linkedList.delete("Quoc");
console.log(linkedList);
// LinkedList { head: Node { data: 'Kien', next: null }, length: 1 }

// search
linkedList.insert("Linh");
linkedList.insert("Hung");

console.log(linkedList.search("Linh"));
// Node { data: 'Linh', next: null }

console.log(linkedList.search("Huy"));
// null
