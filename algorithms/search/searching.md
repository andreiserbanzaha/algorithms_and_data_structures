# Searching algorithms

## Linear search

- check each element


## Binary Search

- much faster than linear search
- rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- only works on sorted arrays


## Naive string search

- how many times does a string appear in another string


## Breadth first search/traversal (BFS)

- used for traversing a tree/graph
- left to right, level by level
- uses additional memory -> it is necessary to track the child nodes of all the nodes on a given level, while searching that level


- pros:
  - **shortes path**
  - closer nodes
- cons:
  - more memory


## Depth first search/traversal (DFS)

- the search follows one branch of the tree down as many levels as possible until the target node is found or the end has reached
- when the search can't go on any further, it continues at the nearest ancestor with an unexplored child
- requires lower memory -> does not need to store child pointers at each level


- pros:
  - **checks if path exists**
  - less memory
- cons:
  - can get slower


- can be done in 3 ways:
  - inorder - from lowest to highest
  - preorder - can be used to re-create a tree
  - postorder - from bottom to top, by level


```
example:

     9
  4     20
1  6  15  170

- inorder: 1 4 6 9 15 20 170
- preorder: 9 4 1 6 20 15 170
- postorder: 1 6 4 15 170 20 9
```
