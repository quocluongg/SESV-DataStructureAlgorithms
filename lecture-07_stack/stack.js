class Stack {
  constructor() {
    this.stack = [];
  }
  //method
  push(element) {
    this.stack.push(element);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  print() {
    console.log("stack contain: ");
    console.log(this.stack);
  }
}

const stack1 = new Stack();
//insert
stack1.push(1);
stack1.push(2);
stack1.push("Hello");
stack1.print();

//delete-access
console.log(stack1.pop());
stack1.print();
