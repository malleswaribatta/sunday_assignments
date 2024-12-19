function isFormatValid(jungle, index, value1, value2) {
  if (index > jungle.length - 1) {
    return false;
  }

  if (jungle[index] === "Z") {
    value1 = 1;
  }

  if (jungle[index] === "L") {
    value2 = 1;
  }

  if (value1 + value2 === 2) {
    return true;
  }

  return isFormatValid(jungle, index + 1, value1, value2);
}

function findClosestZebra(text, left, right) {
  if (text[left] === "Z") {
    return left;
  }

  if (text[right] === "Z") {
    return right;
  }

  return findClosestZebra(text, left - 1, right + 1);
}

function findNextLionClosestZebra(jungle, index, closestZebra1,
  landDifference1) {
  if (index > jungle.length - 1) {
    return closestZebra1;
  }

  if (jungle[index] === "L") {
    const closestZebra2 = findClosestZebra(jungle, index - 1, index + 1);
    const landDifference2 = closestZebra2 > index ? closestZebra2 - index :
      index - closestZebra2;

    if (landDifference1 > landDifference2) {
      closestZebra1 = closestZebra2;
      landDifference1 = landDifference2;
    }
  }

  return findNextLionClosestZebra(jungle, index + 1, closestZebra1, landDifference1);
}

function findNextIndex(jungle, index) {
  if (index > jungle.length - 1) {
    return jungle.length;
  }

  if (jungle[index] === "L") {
    return index + 1;
  }

  return findNextIndex(jungle, index + 1);
}

function recurciveFindPosOfZebraInDanger(jungle, closestZebra, landDifference,
   index) {
  if (index > jungle.length - 1) {
    return closestZebra;
  }

  if (jungle[index] === "L") {
    closestZebra = findClosestZebra(jungle, index - 1, index + 1);

    landDifference = closestZebra > index ? closestZebra - index : index -
      closestZebra;
      
    index = findNextIndex(jungle, index + 1);

    return findNextLionClosestZebra(jungle, index + 1, closestZebra, landDifference);
  }

  return recurciveFindPosOfZebraInDanger(jungle, closestZebra, landDifference,
     index + 1);
}


function findPosOfZebraInDanger(jungle) {
  if (!isFormatValid(jungle, 0, 0, 0)) {
    return -1;
  }

  return recurciveFindPosOfZebraInDanger(jungle, -1, 0, 0);
}

function testAll() {
  // console.log(findPosOfZebraInDanger("agbfhjty"));//-1
  // console.log(findPosOfZebraInDanger(""));//-1
  // console.log(findPosOfZebraInDanger("Z Z"));//-1
  // console.log(findPosOfZebraInDanger("ZZ"));//-1
  // console.log(findPosOfZebraInDanger("L"));//-1
  // console.log(findPosOfZebraInDanger("LL L"));//-1
  // console.log(findPosOfZebraInDanger("L"));//-1
  // console.log(findPosOfZebraInDanger("Z"));//-1
  // console.log(findPosOfZebraInDanger("ZL  ZL  Z"));//0 
  // console.log(findPosOfZebraInDanger("ZL  Z L  Z"));//0 
  // console.log(findPosOfZebraInDanger("ZL"));//0
  // console.log(findPosOfZebraInDanger("LZ"));//1
  // console.log(findPosOfZebraInDanger("LZL"));//1
  // console.log(findPosOfZebraInDanger("LZ L"));//1
  // console.log(findPosOfZebraInDanger("L ZL"));//2
  // console.log(findPosOfZebraInDanger("L Z L"));//2
  // console.log(findPosOfZebraInDanger("L  ZL    Z"));//3 
  // console.log(findPosOfZebraInDanger("L  ZL Z"));//3
  // console.log(findPosOfZebraInDanger("L  Z L"));//3
  // console.log(findPosOfZebraInDanger("L  Z   L"));//3
  // console.log(findPosOfZebraInDanger("Z LLZ"));//4 
  // console.log(findPosOfZebraInDanger("Z  LZ  L  Z L"));//4
  // console.log(findPosOfZebraInDanger("Z  LZ  L  Z L     LZ"));//4
  console.log(findPosOfZebraInDanger("LX Z  L "));//5
  // console.log(findPosOfZebraInDanger("Z  L Z  Z"));//5
  // console.log(findPosOfZebraInDanger("L   Z LZ"));//7
  // console.log(findPosOfZebraInDanger("Z  L Z  L  Z L     LZ"));//20
}

testAll();