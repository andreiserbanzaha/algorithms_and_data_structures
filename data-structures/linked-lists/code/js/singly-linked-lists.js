class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// to-do: create double-linked list
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  prepend(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.length;
    return this;
  }

  insert(data, position) {
    let newNode = new Node(data);
    if (position === 0) {
      this.prepend(data);
    } else if (position > this.length) {
      this.append(data);
    } else {
      let currentNode = this.head;
      let previousNode = null;
      for (let i = 0; i < position; ++i) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = newNode;
      newNode.next = currentNode;
      ++this.length;
    }
    return this;
  }

  remove(position) {
    if (position < 0 || position > this.length - 1) {
      return undefined;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let currentNode = this.head;
      let previousNode = null;
      while (index < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        ++index;
      }
      previousNode.next = currentNode.next;
    }
    --this.length;
    return this;
  }

  traverseToIndex(position) {
    if (position < 0 || position > this.length - 1) {
      return undefined;
    }

    let currentNode = this.head;
    let index = 0;

    while (index != position) {
      currentNode = currentNode.next;
      index++;
    }
    return currentNode;
  }

  printList() {
    if (!this.length) {
      console.log("list is empty");
    } else {
      const array = [];
      let currentNode = this.head;
      while (currentNode.next) {
        array.push(currentNode.data);
        currentNode = currentNode.next;
      }
      array.push(currentNode.data);
      console.log(array);
    }
  }

  // reverse() {
  //   // if only one element, return the list
  //   if (!this.head.next) {
  //     return this;
  //   }
  //
  //   // set the tail to be the head
  //   this.tail = this.head;
  //
  //   let prev = this.head;
  //   let curr = prev.next;
  //
  //   while (curr) {
  //     const temp = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = temp;
  //   }
  //
  //   this.head.next = null;
  //   this.head = prev;
  //
  //   return this;
  // }

  reverse() {
    let prev = null;
    this.tail = this.head;
    while (this.head) {
      let next = this.head.next;
      this.head.next = prev;
      prev = this.head;
      this.head = next;
    }
    this.head = prev;
    return this;
  }
}

let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.printList();
list.reverse();
list.printList();