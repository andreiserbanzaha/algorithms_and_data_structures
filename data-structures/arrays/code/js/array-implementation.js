class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(elem) {
    this.data[this.length] = elem;
    ++this.length;
    return this.length;
  }

  pop() {
    let lastElem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    --this.length;
    return lastElem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftToLeft(index);
  }

  shiftToLeft(index) {
    for (let i = index; i < this.length - 1; ++i) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    --this.length;
  }
}

const newArray = new MyArray();

newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);
newArray.push(7);

console.log(newArray);
console.log(newArray.pop());
console.log(newArray);
newArray.delete(3);
console.log(newArray);