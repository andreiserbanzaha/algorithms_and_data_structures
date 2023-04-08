let counter = 0;

const inception = () => {

  // base case -> when the recursion should end
  if (counter > 3) {
    return 'done';
  }
  counter++;

  // if we don't return the value of the function, it will not bubble up and will be lost
  return inception();
}

console.log(inception());