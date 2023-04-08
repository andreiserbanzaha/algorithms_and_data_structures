class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const ptr = this.top;
      this.top = newNode;
      this.top.next = ptr;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const ptr = this.top;
    this.top = this.top.next;
    this.length--;
    return ptr;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.peek());