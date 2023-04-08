
# Arrays

- stored in contiguous memory (in order)
- smallest footprint of any data structure


- 2 types of arrays:
  - **static** - fixed in size
  - **dynamic** - copy and rebuild an array at a new location with more memory


- for dynamic arrays, the *push()* method can be **O(n)** from time to time, when the size of the array is exceeded when adding an element (usually the size of the array is doubled)
  - this is because the array must be looped over and copied to the newly allocated memory


- in javascript, arrays are just objects with integer based keys that act like indexes
