'use strict';


/**
 * 숫자의 3자리수마다 ,를 찍는다.
 *
 * @memberOf module:utils
 *
 * @param  {number} value 양옆의 공백을 줄일 대상 String
 * @return {string} 3자리 수마다 ,를 넣은 string
 *
 */
function formatToAmount(value) {
  let transValue = String(Number(value));
  const reg = /(^[+-]?\d+)(\d{3})/;
  transValue += '';

  while (reg.test(transValue)) {
    transValue = transValue.replace(reg, '$1' + ',' + '$2');
  }
  return transValue;
};

/**
 * ,가 들어가 있는 String을 숫자로 바꾸어준다.
 *
 * @memberOf module:utils
 *
 * @param  {string} value ,가 들어가 있는 String
 * @return {number} 치환한 숫자
 *
 */
function formatToNumber(value) {
  const isMinus = (String(value).indexOf('-') === 0) ? true : false;
  let transValue = String(value).replace(/[^0-9]/g, '');
  if (isMinus) {
    transValue = '-' + transValue;
  }
  return Number(transValue);
};

/**
 * \r, \n, \r\n, \n\r 등을 br 태그로 치환
 *
 * @memberOf module:utils
 *
 * @param  {string} value 치환할 string
 * @return {string} <br>태그가 치환된 string
 */
function rn2br(value) {
  return value.replace(/(\r\n|\n\r|\n|\r)/gm, '<br/>');
};

/**
 * 10 미만은 앞에 0을 붙이고 10 이상은 그대로 리턴
 * @param  {number} value 숫자
 * @return {string} 변환된 숫자
 */
function digit(value) {
  return (value < 10) ? '0' + value : value;
};

module.exports = {
  digit,
  rn2br,
  formatToNumber,
  formatToAmount,
}