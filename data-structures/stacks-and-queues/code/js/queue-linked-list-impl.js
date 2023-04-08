class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.length) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const ptr = this.first;
    this.first = this.first.next;
    this.length--;
    return ptr;
  }
}

const queue = new Queue();
queue.enqueue('person1');
queue.enqueue('person2');
queue.enqueue('person3');
console.log(queue);
console.log('peek:', queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);