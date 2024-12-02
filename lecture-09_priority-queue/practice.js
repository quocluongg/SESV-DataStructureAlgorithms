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
          this.queue[i];
          this.queue.splice(i, 0, data);
          //When a user with a higher priority is pushed, the users behind
          //the newly added user with higher priority will have their priority increased.
          for (let j = i + 1; j < this.queue.length; j++) {
            if (this.queue[j][1] > 2) {
              this.queue[j][1] -= 1;
            }
          }
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
pqueue.enqueue(["anh A", 1]); //[["anh A",1]]
pqueue.enqueue(["anh B", 8]); //[["anh A",1],["anh B",8]]
pqueue.enqueue(["anh C", 1]); //[["anh A",1],["anh C",1],["anh B",7]] //"anh B" increase 1 priority
pqueue.enqueue(["anh Q", 1]); //[["anh A",1],["anh C",1],["anh Q",1]["anh B",6]]
pqueue.enqueue(["anh K", 3]); //[["anh A",1],["anh C",1],["anh Q",1], ["anh K", 3]["anh B",5]]
pqueue.enqueue(["anh J", 2]); //[["anh A",1],["anh C",1],["anh Q",1], ["anh J",2],["anh K", 2]["anh B",4]]
pqueue.print();
