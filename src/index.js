module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero'
  }
  const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90];
  let answer = '';
  let arr = [];
  while (number) {
    arr.unshift(number % 10)
    number = Math.floor(number / 10)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 3 && i === 0) {
      answer = str[num.indexOf(arr[i])] + ' hundred'
    } else if (i > 0 && arr[i] === 0) {

    } else if ((i === 1 && arr.length === 3) || (i === 0 && arr.length === 2)) {
      let ten = arr[i] * 10;
      if (arr[i] === 1) {
        ten += arr[i + 1];
        i++
      }
      if (arr.length > 2) answer += ' '
      answer += str[num.indexOf(ten)];
    } else {
      if (arr.length > 1) answer += ' '
      answer += str[num.indexOf(arr[i])];
    }
  }
  return answer
}
