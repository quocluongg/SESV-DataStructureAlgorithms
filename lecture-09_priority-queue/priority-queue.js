class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  //build from array
  enqueue(data) {
    if (this.queue.length === 0) {
      return this.queue.push(data);
    } else {
      for (let i = 0; i < this.queue.length; i++) {
        if (data[1] < this.queue[i][1]) {
          this.queue.splice(i, 0, data);
          return;
        }
      }
      return this.queue.push(data);
    }
  }
  dequeue() {
    return this.queue.shift();
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

const pqueue = new PriorityQueue();

//insert
pqueue.enqueue(["anh A", 1]);
pqueue.enqueue(["anh B", 8]);
pqueue.enqueue(["anh C", 4]);
pqueue.enqueue(["anh Q", 2]);
pqueue.enqueue(["anh K", 3]);
pqueue.print(); //[ [ 'Quốc', 1 ],[ 'Kiên', 2 ],[ 'Huy', 3 ],[ 'Linh', 4 ],[ 'Phú', 8 ]]

//delete
pqueue.dequeue(); //[ 'Quốc', 1 ]
pqueue.dequeue(); //["Kiên", 2];
pqueue.dequeue(); //[ 'Huy', 3 ]
pqueue.print(); //[[ 'Linh', 4 ],[ 'Phú', 8 ]]

//peek
pqueue.peek(); //["Linh",4]

//size
console.log(pqueue.size()); //2
