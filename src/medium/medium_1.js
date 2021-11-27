import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0
    for(let i in array) {
        sum += array[i]
    }
    return sum
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < ( array.length - i -1 ); j++){
          if(array[j] > array[j+1]){
            let temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
          }
        }
      }
    let middle = array.length / 2
    if (array.length % 2 === 0) {
        return (array[middle] + array[middle + 1]) / 2
    } else {
        return array[middle + .5]
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let aMin = array[0]
    let aMax = array[aLength - 1]
    let aLength = array.length
    let aSum = getSum(array)
    let aMean = aSum / aLength
    let aVariance = variance(array, aMean)

    return {
        length: aLength, 
        sum: aSum,
        mean: aMean,
        median: getMedian(array),
        min: aMin,
        max: aMax,
        variance: aVariance,
        standard_deviation: Math.sqrt(aVariance)
    }
}

