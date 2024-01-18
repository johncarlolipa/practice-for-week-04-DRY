function operateOnBiggerValue(value1, value2, operation, template) {
  const biggerValue = operation(value1, value2) ? value1 : value2;
  return template(biggerValue);
}

function multiplyByTwo(value) {
  return value * 2;
}

function divideByThree(value) {
  return value / 3;
}

function createMessage(value, action) {
  return `I ${action} ${value} tacos.`;
}

function multiplyBiggerNumByTwo(num1, num2) {
  return operateOnBiggerValue(num1, num2, (a, b) => a > b, multiplyByTwo);
}

function divideBiggerNumByThree(num1, num2) {
  return operateOnBiggerValue(num1, num2, (a, b) => a > b, divideByThree);
}

function eatMostTacos(sum1, sum2) {
  return operateOnBiggerValue(sum1, sum2, (a, b) => a > b, value => createMessage(value, 'ate'));
}

function adoptSmallerDog(weight1, weight2) {
  return operateOnBiggerValue(
    weight1,
    weight2,
    (a, b) => a < b,
    (value) => `I adopted a dog that weighs ${value} pounds.`
  );
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
