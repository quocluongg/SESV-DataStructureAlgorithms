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

  insert(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

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

const doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList);

// insert
doublyLinkedList.insert("Quoc");
console.log(doublyLinkedList);

doublyLinkedList.insert("Kien");
console.log(doublyLinkedList);

// delete
doublyLinkedList.delete("Quoc");
console.log(doublyLinkedList);

// search
doublyLinkedList.insert("Linh");
doublyLinkedList.insert("Hung");

console.log(doublyLinkedList.search("Linh")); // Node { data: 'Linh', next: Node { ... }, prev: Node { ... } }
console.log(doublyLinkedList.search("Huy")); // null

