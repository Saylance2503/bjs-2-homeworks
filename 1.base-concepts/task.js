'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  }
  if (d === 0) {
    let x1 = -b / (2 * a);
    arr = [x1];
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let body;
  let payment;
  let paymentAll;

  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number') {
    return false;
  }
  percent = percent / 100 / 12;
  body = amount - contribution;

  payment = body * (percent + percent / ((1 + percent) ** countMonths - 1));
  paymentAll = payment * countMonths;
  return +paymentAll.toFixed(2);
}
