# Trees

- hierarchical structure
- as opposed to lists and arrays, which are linear, trees can have 0 or more child nodes
- trees start with a single root node
- every child of the tree descends from that root node
- parent-child relationship, unidirectional
- leaf nodes (end of a tree data structure)
- within a tree, you can have sub-trees
- a node can only point to a child
- children don't (have to) reference their parents
- e.g. linked lists are a type of tree, with a single path


- **abstract syntax tree**


## Binary Trees

- each node can have 0, 1 or 2 nodes
- each child can only have 1 parent


- **full binary tree**
  - a node has either 0 or 2 children


### Perfect Binary Tree

- all leafs are full (no node has only one child - only 0 or 2 children)
- bottom layer of the tree is completely filled
- each level down, the number of nodes doubles! (1 -> 2 -> 4 ...)
- the number of nodes on the last level = all other nodes + 1 (half of the nodes are on the last level)
- number of nodes on each level:
  - Level 0: 2^0 = 1 nodes
  - Level 1: 2^1 = 2 nodes
  - Level 2: 2^2 = 4 nodes
  - ...


- total number of nodes in a perfect binary tree:
  - **nodes = 2^height - 1**
  - **log nodes = height(steps)**


## Binary Search Tree (BST)

- preserves relationships
- left -> decrease
- right -> increase
- a node can only have up to 2 children


- **Balanced** vs **Unbalanced** BST
  - balanced is great
    - O(logN)
  - unbalanced is NOT great
    - can be O(n) if all elements are added on the same side (basically it becomes a linked list)


- Pros:
  - better than O(n)
  - ordered
  - flexible size
- Cons:
  - no O(1) operations


- note: to redo the remove node method (also on leetcode)


## AVL trees + Red-Black trees (read mode)

- in production, most likely we will not use BST, because we can potentially have linear time
- for best performance, we need balanced trees: AVL or Red-Black


## Binary Heap (read more)

- parent is always greater than the children
- new nodes bubble up to the top if larger
- can be used to implement priority queues

- pros:
  - better than O(n)
  - priority based
  - flexible size
  - fast insert
- cons:
  - slow lookup


## Priority queues (read more)

- priorities in, highest priorities out
- can be implemented using binary heaps


## Trie (read more)

- tree where each node can have multiple children
- used for word predictions
- O(word length)
