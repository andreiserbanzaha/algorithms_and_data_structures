
# Sorting algorithms

- sorting is a process of rearranging the items in a collection (e.g. array) so that the items are in a some kind of order
- examples:
  - sorting numbers from smallest to largest
  - sorting names alphabetically
  - sort movies based on revenue
  - etc.


- why do we need to learn this?
  - sorting is an incredibly common task, so it's good to know how it works
  - there are many different ways to sort things, and different techniques have their own advantages and disadvantages


- https://www.toptal.com/developers/sorting-algorithms


## Bubble sort

- a sorting algorithm where the largest values bubble up to the top
- before we sort, we must swap (swap method)


- time complexity: **O(n^2)**


- pseudocode:
  - start from the beginning
  - incrementing by 1, check the current number and the next one
  - if they are not sorted, swap
  - the largest number will eventually arrive at the end of the array
  - repeat until list is sorted


## Selection sort

- go through the whole array
- find the minimum value
- set it to it's position


- time complexity: **O(n^2)**


- pseudocode:
  - store the first element as the **smallest** value you've seen so far
  - compare this element to the next items in the array
  - if a smaller number is found, designate the new number as the **minimum** number and continue until the end of the array
  - if the **minimum** is not the value (index) you initially began with, swap the two values
  - repeat until array is sorted


## Insertion sort

- builds up the sort by gradually creating a larger left half which is always sorted


- time complexity: **O(n^2)**


- pseudocode:
  - start by picking the second element in the array
  - compare to the one before it, if necessary, we swap
  - continue to the next element and if it's in the incorrect order, iterate through the sorted portion(left side) to place the element in the correct place
  - repeat until array is sorted


## Merge sort

- it's a combination of 2 things: merging and sorting
- exploits the fact that arrays of 0 or 1 element are always sorted
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array


- time complexity: **O(n log n)**
- space complexity: **O(n)**


- pseudocode:
  - break up the array into halves until you have 2 arrays that are empty or have one element
  - once you have smaller sorted arrays, merge those arrays with the **merge()** function until you are back at the full length of the array
  - once the array has been merged back together, return the sorted array


**Merging arrays**

- in order to implement merge sort -> first implement a function that can merge arrays
- given 2 arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements of the 2 arrays
- function should run in **O(n + m)** time and **O(n + m)** space and should NOT modify the parameters passed to it


- pseudocode:
  - create empty array
  - while there are still values in the 2 arrays:
    - if the value of the element in the first array is smaller than the value in the second array, push the value from the first array into the new array and move to the next value in the first array
    - if the value of the second array is smaller, push that one and go to next
    - once we exhaust one array, push remaining values from the other array into the new array


## Quick sort

- like merge sort, exploits the fact that arrays of 0 and 1 elements are always sorted
- works by selecting one element (called the "pivot") and finding the index where the **pivot** should end up in the sorted array
- once the **pivot** is positioned appropriately, quick sort can be applied on either side of the pivot


- time complexity: **O(n^2)**


- pseudocode:
  - call the pivot() helper function on the array
  - when the helper returns the updated pivot index, recursively call the pivot() helper on the subarray to the left side of the index, and the subarray to the right side of the index
  - no new arrays are made


**Pivot helper**

- in order to implement a **Quick sort**, it's useful to implement first a function responsible for arranging elements in an array on either side of a pivot
- given an array, this helper function should designate an element as the pivot
- it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- the order of the elements of either side of the pivot doesn't matter!
- the helper function should do this **in place**, that is, it should not create a new array
- when complete, the helper should return the index of the pivot


- **picking a pivot**
  - the runtime depends in part on how the pivot is selected
  - ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting


- pivot pseudocode:
  - it will help to accept 3 arguments: an array, a start index, an end index
    - these can default to 0 and length-1
  - grab the pivot from the start of the array (this can be any element)
  - store the current pivot index in a variable (this will keep track of where the pivot should end up)
  - loop through the array from the start until the end
    - if the pivot is greater than the current element, increment the pivot index variable and swap the current element with the element at the pivot index
  - swap the starting element (i.e. the pivot) with the pivot index
  - return the pivot index  


## Heap sort

- to read about
- https://brilliant.org/wiki/heap-sort/
- https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort

## Radix sort

- https://brilliant.org/wiki/radix-sort/
- https://www.cs.usfca.edu/~galles/visualization/RadixSort.html


- special sorting algorithm that works no lists of numbers
- not a comparison sort like the others (does not compare elements)
- it exploits the fact that the information about the size of a number is encoded in the number of digits
- more digits mean bigger number


- time complexity: **O(nk)**
  - n -> number of elements in the array
  - k -> number of digits


- pseudocode:
  - define a function that accepts a list of numbers
  - figure out how many digits the largest number has
  - loop from k = 0 to the largest number of digits
  - for each iteration of the loop
    - create bucket for each digit (0 to 9)
    - place each number in the corresponding bucket based on its **k** th digit
  - replace out existing array with the values in our buckets (starting from 0 and going up to 9)
  - return list at the end


**Radix sort helper functions**

- **getDigit(num, place)**
  - returns the digit in *num* at the given place value


- **digitCount(num)**
  - returns the number of digits in *num*


- **mostDigits(arr)**
  - given an array of numbers, returns the number of digits of the largets numbers in the list


## Counting sort

- https://brilliant.org/wiki/counting-sort/
- https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
