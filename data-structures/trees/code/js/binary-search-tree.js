class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  traverse(node, arr = []) {
    while (node !== null) {
      this.traverse(node.left, arr);
      arr.push(node.data);
      this.traverse(node.right, arr);
      break;
    }
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let ptr = this.root;
      while (true) {
        if (data < ptr.data) {
          if (!ptr.left) {
            ptr.left = newNode;
            return this;
          }
          ptr = ptr.left;
        } else {
          if (!ptr.right) {
            ptr.right = newNode;
            return this;
          }
          ptr = ptr.right;
        }
      }
    }
  }

  // check if an item exists in the tree
  lookup(data) {
    if (!this.root) {
      return false;
    }

    let ptr = this.root;

    while (true) {
      if (ptr.data === data) {
        return true;
      }
      if (ptr.data < data) {
        if (!ptr.right) {
          return false;
        }
        ptr = ptr.right;
      } else {
        if (!ptr.left) {
          return false;
        }
        ptr = ptr.left;
      }
    }
  }

  remove(data) {
    if (!this.root) {
      return false;
    }
    if (this.root.data === data && !this.root.left && !this.root.right) {
      this.root = null;
      return true;
    }

    let prev = this.root;
    let curr = this.root;

    while (curr) {
      if (data < curr.data) {
        prev = curr;
        curr = curr.left;
      } else if (data > curr.data) {
        prev = curr;
        curr = curr.right;
      } else {
        // we have found the node

        // node is leaf
        if (!curr.left && !curr.right) {
          if (prev.left === curr) {
            prev.left = null;
          } else {
            prev.right = null;
          }
          return true;

          // node has only one child
        } else if ((curr.left && !curr.right) || (curr.right && !curr.left)) {
          if (curr.left) {
            if (prev.left === curr) {
              prev.left = curr.left;
            } else {
              prev.right = curr.left;
            }
          } else {
            if (prev.left === curr) {
              prev.left = curr.right;
            } else {
              prev.right = curr.right;
            }
          }
          return true;

          // node has 2 children
        } else {

          // if right child has no left child
          if (!curr.right.left) {
            if (prev.left === curr) {
              prev.left = curr.right;
              curr.right.left = curr.left;
            } else {
              prev.right = curr.right;
              curr.right.left = curr.left;
            }
            return true;

            // if right child has left child
          } else {
            let toRemove = curr;
            curr = curr.right;
            let currRight = curr;
            let smallPrev = null;

            // go to the minimum data on the left side
            while (curr.left) {
              smallPrev = curr;
              curr = curr.left;
            }

            if (curr.right) {
              smallPrev.left = curr.right;
            } else {
              smallPrev.left = null;
            }

            if (toRemove === this.root) {
              this.root = curr;
            } else {
              if (prev.left === toRemove) {
                prev.left = curr;
              } else {
                prev.right = curr;
              }
            }

            curr.left = toRemove.left;
            curr.right = currRight;

            return true;
          }
        }
      }
    }
    return false;
  }
}

const bst = new BinarySearchTree();

// bst.insert(9);
// bst.insert(4);
// bst.insert(20);
// bst.insert(1);
// bst.insert(6);
// bst.insert(2);
// bst.insert(15);
// bst.insert(170);
// bst.insert(18);
// bst.insert(5);
bst.insert(5);

let arr = [];
bst.traverse(bst.root, arr);
console.log(JSON.stringify(arr));
console.log('--------------------');
bst.remove(5);
arr = [];
bst.traverse(bst.root, arr);
console.log(JSON.stringify(arr));

// console.log(bst.lookup(6)); //true
// console.log(bst.lookup(15)); //true
// console.log(bst.lookup(22)); //false