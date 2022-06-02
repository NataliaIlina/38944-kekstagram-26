const getRandomNumber = (min, max) => {
  //если значения равны
  if (min===max){
    return min;
  }
  //если min > max - меняем их местами.
  const minNumber = min < max ? min : max;
  const maxNumber = min < max ? max : min;
  // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

getRandomNumber(0, 1);


const isRightLength = (checkString, maxValue) => (typeof checkString === 'string') && (checkString.trim().length <= maxValue);

isRightLength('   qwertqwert  ', 10);
