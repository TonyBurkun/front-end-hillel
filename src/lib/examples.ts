// export const sum = (a: number, b: number) => a + b;
//
// export const conditionalSum = (a: string | number, b: number) => {
//   if (typeof a === 'string') {
//     return Number(a) + b;
//   }
//   return a + b;
// };
//
// export const conditionalReturn = (obj: any, key: string) =>
//   obj && obj[key] ? obj[key] : undefined;
//
// export const toPromise = <T>(value: T): Promise<T> => Promise.resolve(value);

/**
 * TODO: Write a function to reverse a number
 * Input: 123
 * Output 321
 */

export const reversNumber = (number: number) => {
  return Number(number.toString().split('').reverse().join(''))
};

/**
 * TODO: Write a JavaScript function that returns a passed string with letters in alphabetical order
 * Input : 'webmaster'
 *  Output : 'abeemrstw'
 */

export const sortStringForAlphabet = (str: string) => {
  return str.toLowerCase().split('').sort().join('');
};

/**
 * TODO: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
 * Input: 'the quick brown fox'
 * Output: 'The Quick Brown Fox'
 */

export const increaseFirstLetter = (str: string) => {
  let arrFromStr =  str.split(' ');
  let modifyArr = arrFromStr.map(item => {
   return item[0].toUpperCase() + item.slice(1);
  });

  return modifyArr.join(' ');
};
