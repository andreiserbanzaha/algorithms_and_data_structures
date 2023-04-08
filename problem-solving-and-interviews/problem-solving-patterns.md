# Problem solving patterns

- some patterns:
  - frequency counter
  - multiple pointers
  - sliding window
  - divide and conquer
  - dynamic programming
  - greedy algorithms
  - backtracking
  - many others..


## Frequency counter pattern

- uses objects or sets to collect values/frequencies of values
- this can often avoid the need for nested loops or O(n^2) operations with arrays/strings


- example:
  - write a function called **same**, which accepts 2 arrays
  - the function should return true if every value in the array has its corresponding value squared in the second array
  - the frequency of the values must be the same


## Multiple pointers

- creating pointers or values that correspond to an index or position and move towards the beginning, middle and end based on a certain condition
- very efficient for solving problems with minimal space complexity as well


- example 1:
  - write a function called 'sumZero' which accepts a **sorted** array of integers
  - the function should find the first pair where the sum is 0
  - return an array that includes both values that sum to zero or *undefined* if pair does not exits


- example 2:
  - implement a function called 'countUniqueValues' which accepts a sorted array, and counts the unique values in an array
  - there can be negative numbers
  - always sorted


## Sliding window pattern

- create a **window** (array or a number from one position to another)
- depending on a certain condition, the window either increases or closes (and a new window is created)
- very useful for keeping track of a subset of data in an array/string etc.


- example:
  - write a function called 'maxSubarraySum' which accepts an array of integers and a number called *n*
  - the function should calculate the maximum sum of *n* consecutive elements in the array


## Divide and Conquer pattern

- dividing a data set into smaller chunks and then repeating a process with a subset of data
- can tremendously **decrease time complexity**


- example:
  - given a **sorted** array of integers
  - write a function called search, that accepts a value and returns the index where the value passed to the function is located
  - if value not found, return -1
