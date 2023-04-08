
# Linked lists

- 2 types:
  - singly linked lists
  - doubly linked lists


- lists contain **nodes**
- **nodes** contain:
  - data
  - pointer to next node
  - pointer to previous node (in case of a doubly linked list)


- **head** - first node
- **tail** - last node (some people say that all nodes except the *head* are *tail* nodes)


- linked lists:
  - are *null* terminated -> end of the list
  - have a loose structure (allows you to insert a value into the middle of the list by simply resetting a few pointers)
  - don't have O(1) access to elements, the list must be *traversed*
  - nodes are scattered throughout the memory -> not good for the cache -> lower performance


- singly vs doubly linked lists:
  - singly linked list:
    - easier to implement
    - faster
    - less memory
    - cannot be iterated in reverse
  - doubly linked list:
    - can be traversed both ways
    - a bit slower
    - uses more memory
    - search can be faster since it can start on both ends
    - when removing an element, you don't need a pointer to the previous node, you can access it with 'previous' property
