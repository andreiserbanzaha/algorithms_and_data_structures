const reverse = (str) => {

  if (!str || str.length < 2 || typeof(str) !== 'string') {
    return 'invalid input';
  }

  let backwardsString = [];
  for (let i = str.length - 1; i >= 0; --i) {
    backwardsString.push(str[i]);
  }

  return backwardsString.join('');
}

const reverse2 = (str) => {
  return str.split('').reverse().join('');
}

console.log(reverse());
console.log(reverse(123));
console.log(reverse('a'))
console.log(reverse("andrei e smecher"));
console.log(reverse("asd"));