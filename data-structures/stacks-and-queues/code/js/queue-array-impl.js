class Queue {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  enqueue(data) {
    this.data.push(data);
  }

  dequeue() {
    return this.data.shift();
  }
}

const queue = new Queue();
queue.enqueue('andrei');
queue.enqueue('costi');
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());