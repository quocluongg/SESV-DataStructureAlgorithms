class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Space: O(1) , Time: O(1)
  insert(element) {
    //Space: O(1) , Time: O(1)
    const newNode = new Node(element);
    //Space: O(1) , Time: O(1)
    if (this.head === null) {
      //Space: O(1) , Time: O(1)
      this.head = this.tail = newNode;
    } else {
      //Space: O(1) , Time: O(1)
      this.tail.next = newNode;
      //Space: O(1) , Time: O(1)
      newNode.prev = this.tail;
      //Space: O(1) , Time: O(1)
      this.tail = newNode;
    }
    //Space: O(1) , Time: O(1)
    this.length++;
  }
  //Space: O(1) , Time: O(n)
  delete(element) {
    if (!this.head) return;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === element) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head) this.head.prev = null;
        } else if (currentNode === this.tail) {
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  //Total: Space: O(1) , Time: O(1)
  deleteHead() {
    //Space: O(1) , Time: O(1)
    if (!this.head) return null;
    //Space: O(1) , Time: O(1)
    const tmp = this.head.data;
    //Space: O(1) , Time: O(1)
    this.head = this.head.next;
    //Space: O(1) , Time: O(1)
    if (this.head) {
      //Space: O(1) , Time: O(1)
      this.head.prev = null;
    } else {
      //Space: O(1) , Time: O(1)
      this.tail = null;
    }
    //Space: O(1) , Time: O(1)
    this.length--;
    return tmp;
  }
  search(element) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === element) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }
  dequeue() {
    console.log(this.queue.head);
    this.queue.deleteHead();
  }
  enqueue(element) {
    this.queue.insert(element);
  }
  peek() {
    console.log(this.queue.head);
  }
  size() {
    return this.queue.length;
  }
  print() {
    console.log(this.queue);
  }
}

const queue1 = new Queue();
//insert
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.print(); //output: [1, 2, 3]
console.log(
  "------------------------------------------------------------------"
);

//delete
queue1.dequeue(); //output: 1
queue1.print(); //output: [2. 3]
console.log(
  "------------------------------------------------------------------"
);
//peek
queue1.peek(); //output: 2
queue1.print(); //output: [2, 3]
console.log(
  "------------------------------------------------------------------"
);
//size
console.log(queue1.size()); //output: 2
