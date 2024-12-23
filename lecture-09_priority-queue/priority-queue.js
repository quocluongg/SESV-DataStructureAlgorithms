class PriorityQueue {
  constructor() {
    this.queue = []; //Space: O(1) , Time: O(1)
  }
  //build from array
  //Space: O(1) , Time: O(n)
  enqueue(data) {
    if (this.queue.length === 0) {
      //Space: O(1) , Time: O(1)
      return this.queue.push(data); //Space: O(1) , Time: O(1)
    } else {
      //Space: O(1) , Time: O(n)
      for (let i = 0; i < this.queue.length; i++) {
        //Space: O(1) , Time: O(1)
        if (data[1] < this.queue[i][1]) {
          //Space: O(1) , Time: O(1)
          this.queue.splice(i, 0, data);
          return;
        }
      }
      //Space: O(1) , Time: O(1)
      return this.queue.push(data);
    }
  }
  //Space: O(1) , Time: O(n)
  dequeue() {
    //Space: O(1) , Time: O(n)
    return this.queue.shift();
  }
  //Space: O(1) , Time: O(1)
  peek() {
    console.log(this.queue[0]);
  }

  //Space: O(1) , Time: O(1)
  size() {
    return this.queue.length;
  }
  //Space: O(1) , Time: O(1)
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
