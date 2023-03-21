function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = sum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce((acc, curr) => acc + curr, initialValue);

  if (arr.length == 0) {
    return 0;
  }

  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else sumOddElement = sumOddElement + arr[i];
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const a = func(...arrOfArr[i]);

    console.log('a: ', a);
    console.log('maxWorkerResult: ', maxWorkerResult);
    if (a > maxWorkerResult) {
      maxWorkerResult = a;
    }
  }
  return maxWorkerResult;
}
