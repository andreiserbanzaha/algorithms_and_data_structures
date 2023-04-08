# Big O


### Why?

- it's important to have a precise vocabulary to talk about how our code performs
- useful for discussing trade-offs between different approaches
- when your code slows down or crashes, identifying parts of the code that are
inefficient can help us find pain points in our application


- why not use time instead? (The problem with time)
  - different machines will record different times
  - the *same* machine will record different times
  - it's not consistent
  - for fast algorithms, speed measurements may not be precise enough
  - we don't want do run the code in order to check the timings


- rather than counting seconds, which are very variable, we can count the **number** of simple operations (addition, multiplication etc.) the computer has to perform (that remains constant, no matter what computer we run it on)


- how to count the operations?
  - it's debatable, and it doesn't really matter, we care about a general trend


- **The Big O Notation**
  - is a way to formalize fuzzy counting
  - it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow (a way of describing the relationship between an input to a function as it grows and how that changes the runtime of that function, the relationship between the input size and the time relative to the input)
  - we don't care about the other details, only the broad trends


- **The Big O notation** is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity (Wikipedia)


- **The Big O notation** is a simplified analysis of an algorithm's efficiency
  - gives us an algorithm's complexity in terms of input size (n)
  - machine independent
  - basic computer steps
  - time and space


### Rule book

1. **Worst case**
    - Big-O is always based on worse case scenario
2. **Remove constants**
    - we care about how the line moves, so constants are redundant
3. **Different terms for inputs**
    - if there are multiple inputs, the Big O will depend on both
        - e.g. for a function that receives 2 arrays, and loops through both
        separately -> *O(m + n)*
4. **Drop non dominants**
    - only take the worse one into account
        - e.g. if an algorithms is *O(n + n^2)* -> ***O(n^2)***


### Big O shorthands

- analyzing complexity with big O can get complicated
- there are rules of thumb that can help
- these rules won't ALWAYS work, but are a helpful starting point

1. arithmetic operations are constant
2. variable assignment is constant
3. accessing elements in an array (by index) or object (by key) is constant
4. in a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop


## Space and Time complexity

### Time complexity

### Space complexity (memory)

- how much **additional** space do we need to allocate in our memory in order to run the code in our algorithm?
- **auxiliary space complexity** - space required by the algorithm, not including the space taken up by the inputs


- rules of thumb (in JS):
  - most primitives (bool, numbers, undefined etc) are constant space
  - strings require *O(n)* space, where *n* is the string length
  - reference types are generally *O(n)*, where *n* is the length (for arrays) or the number of keys (for objects)
