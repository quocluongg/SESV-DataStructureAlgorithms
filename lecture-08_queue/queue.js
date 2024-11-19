class Queue {
  constructor() {
    this.queue = [];
  }
  dequeue() {
    console.log(this.queue[0]);
    this.queue.shift();
  }
  enqueue(element) {
    this.queue.push(element);
  }
  peek() {
    console.log(this.queue[0]);
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

//delete
queue1.dequeue(); //output: 1
queue1.print(); //output: [2. 3]

//peek
queue1.peek(); //output: 2
queue1.print(); //output: [2, 3]

//size
console.log(queue1.size()); //output: 2
