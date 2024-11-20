
/* 
TASK 2
*/
function calcSumAndAvg(numbers) {
    if (numbers.length == 0) {
      return { sum: 0, average: 0 };
    }
    const init = 0;
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      init,
    );
  
    const average = sum / numbers.length;
    return { sum, average };
  }
  /*
  in Algorithms time complexity of Set is Big O of n
  soo i will use it here
  the same time and space complexity for converting set to an array
  */
  
/* 
TASK 3
*/

  function removeDuplication(strings) {
    // NO DUBLICATION WITH SET DATA STRUCTURE
    const uniSet = new Set(strings);
    // Convert set to array
    return Array.from(uniSet);
  }
  
  
  