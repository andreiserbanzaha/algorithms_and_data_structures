
# Recursion

- is a process (function) that calls itself
- recursion is good for tasks that have repeated sub-tasks to do


- essential parts:
  - **base case** (when to return) -> otherwise you will have stack overflow
  - different input


- rules:
  1. identify the base case
  2. identify the recursive case
  3. get closer and closer and return when needed. Usually 2 returns


- anything that can be done recursively, can be done iteratively (loop)


- **tail call optimization** - recursive function without adding to the call stack


- pros:
  - DRY
  - readable
- const:
  - large stack


- when to use? (rules)
  - every time you are using a tree or converting something into a tree, consider recursion
    1. divided into a number of subproblems that are smaller instances of the same problem
    2. each instance of the subproblem is identical in nature
    3. the solution to each subproblem can be combined to solve the bigger problem at hand 
  - divide and conquer



## Helper method recursion

```
function outer(input) {

  var outerScopedVariable = [];

  function helper(helperInput) {

    // modify outerScopedVariable

    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

```
