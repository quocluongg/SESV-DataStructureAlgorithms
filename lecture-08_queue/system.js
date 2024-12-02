class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    return this.queue.push(data);
  }
  dequeue() {
    console.log(this.queue[0]);
    this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  print() {
    console.log(this.queue);
  }
}

const mySystem = new Queue();

const oneMilionUser = [];
for (let i = 0; i < 1000000; i++) {
  let user = `User${i}`;
  oneMilionUser.push(user);
}

const requestToBuy = (user) => {
  if (mySystem.size() < 40000) {
    mySystem.enqueue(user);
    console.log(`${user} - Bạn đang trong hàng đợi để thanh toán tiền vé`);
  }
};

for (let user of oneMilionUser) {
  requestToBuy(user);
}
