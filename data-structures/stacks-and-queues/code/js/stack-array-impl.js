class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack();
stack.push('google');
stack.push('brazzers');
stack.push('udemy');
console.log(stack.peek());

console.log(stack.pop());
console.log(stack);