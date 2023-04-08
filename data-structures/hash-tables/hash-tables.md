
# Hash Tables

- also known as:
  - hash maps
  - maps
  - unordered maps
  - dictionaries
  - objects (in javascript)
  - etc.


- is an efficient way to store a value by key and retrieve a value by key
- preallocating a number of rows (slots, buckets) - this can expand or shrink if the number of elements increase or decrease
- a hash function will take a key and generate a number in that preallocated array
- it looks like a grid with 2 columns
  - first column - slot number
  - second column - value


## Hash function

- maps strings to numbers and those numbers correspond to indexes in an array
- **idempotent** - a function given the same input, always returns the same output


## Hash collisions

- if 2 separate keys get the same hash number (index) that will be called a collision
- the previously added element will have a pointer to the newly added element (singly linked list)
- this will make the retrieval of the value from the hash table slower -> potentially O(n) if the hash function is poorly written
