class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; ++i) {
        if (key === currentBucket[i][0]) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArray = [];

    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; ++i) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(59);
myHashTable.set('grapes', 1124);
myHashTable.set('apples', 534);
myHashTable.set('oranges', 2);

// console.log(JSON.stringify(myHashTable));
// console.log(myHashTable.get('apples'));

console.log('keys:', myHashTable.keys());