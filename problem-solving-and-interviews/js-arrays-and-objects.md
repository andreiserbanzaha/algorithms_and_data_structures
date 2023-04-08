# Analyzing performance of arrays and objects (in JavaScript)

## The big O of **objects**

- what are objects (in js)?
  - unordered data structures
  - key-value pairs


- when to use objects?
  - when you don't need order
  - when you need fast access, insertion and removal


- the big O of objects:
  - insert: **O(1)**
  - remove: **O(1)**
  - access: **O(1)**
  - search: **O(n)**


- the big O of object methods:
  - Object.keys: **O(n)**
  - Object.values: **O(n)**
  - Object.entries: **O(n)**
  - Object.hasOwnProperty: **O(1)**


## The big O of **arrays**

- what are arrays?
  - ordered lists (?)


- when to use arrays?
  - when you need order
  - when you need fast access, insertion and removal (not in all cases)


- the big O of arrays:
  - insertion: **It depends**
    - at the end: **O(1)**
    - at the beginning: **O(n)**
  - removal: **It depends**
    - at the end: **O(1)**
    - at the beginning: **O(n)**
  - searching: **O(n)**
  - access: **O(1)**


- the big o of array methods:
  - push: **O(1)**
  - pop: **O(1)**
  - shift: **O(n)**
  - unshift: **O(n)**
  - concat: **O(n)**
  - slice: **O(n)**
  - splice: **O(n)**
  - sort: **O(n log n)**
  - forEach/map/filter/reduce: **O(n)**
