//------reverse Array using reduce--------

// const getReverce = function (init, element) {
//   init.unshift(element);
//   return init;
// }

// const reverse = function (array) {
//   return array.reduce(getReverce, []);
// }

// console.log(reverse([1,2,3]));
// console.log(reverse([1,2,3, 4]));
// console.log(reverse([1]));
// console.log(reverse([]));

//-------reverse a string using reduce--------

// const getReverce = function (init, char) {
//   init = char + init;
//   return init;
// }

// const reverse = function (string) {
//   const array = string.split("");

//   return array.reduce(getReverce, '');
// }

// console.log(reverse(""));
// console.log(reverse("a"));
// console.log(reverse("abcdef"));

const getNthFibo = function ([current, next], element, index, array) {
  const future = current + next;

  if (index === array.length - 1) {
    return future;
  }

  return [next, future];
  // return getNthFibo(init - 1) + getNthFibo(init - 2);
}

const range = function (to) {
  const array = [];

  for (let i = 1; i <= to; i++) {
    array.push(i);
  }

  return array;
}

const nthFibo = function (position) {
  const arr = [position];
  const array = position > 2 ? range(position - 2) : arr;//[1] [1, 2] [1, 2, 3]
  // array[0] = position;
  // const init = position; 
  // console.log(array)
  return array.reduce(getNthFibo, [0, 1]);
}


// console.log(nthFibo(1));
// console.log(nthFibo(2));  
// console.log(nthFibo(3));
// console.log(nthFibo(4));
// console.log(nthFibo(5));
// console.log(nthFibo(6));
// console.log(nthFibo(7));

//------second greatest-------
const secondGreatest = function([max, max2], element) {
  max2 = element > max ? max : (element > max2 ? element : max2); 
  max = element > max ? element : max;

  return [max, max2];
}


const max = function (array) {
  return (array.reduce(secondGreatest, [-Infinity, -Infinity]))[1];
}

console.log(max([2, 3]));
// console.log(max([-2, -3, -1]));
// console.log(max([-2, -3, 1]));
// console.log(max([-2, 3, -1]));
// console.log(max([2, 3, 1, 4, 8,0]));

