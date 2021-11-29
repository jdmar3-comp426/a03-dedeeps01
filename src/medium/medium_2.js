import mpg_data from "./data/mpg_data.js";
import {getStatistics, getSum} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export function keyArray(key) {
    let array = new Array()
    for(let i in mpg_data) {
        array[i] = mpg_data[i][key]
    }
    return array
}
export const allCarStats = {
    avgMpg: {city: getSum(keyArray('city_mpg')) / mpg_data.length, highway: getSum(keyArray('highway_mpg')) / mpg_data.length},
    allYearStats: getStatistics(keyArray('year')),
    ratioHybrids: keyArray('hybrid').filter(car => car === 'true').length / mpg_data.length
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

{
    var hybrids = new Array()
    let j = 0
    for(let i in mpg_data) {
        if (mpg_data[i]['hybrid']) {
            if(!hybrids.includes(mpg_data[i]['make'])) {
                hybrids[j] = {make: mpg_data[i]['make']}
                j++
            }
        }
    }
    let cars = new Array()
    for (let i in hybrids) {
        for (let j in mpg_data) {
            if (mpg_data[j]['make'] === hybrids[i]) {
                cars.push(mpg_data[j]['model_year'])
            }
        }
        hybrids[i]['hybrids'] = [...cars]
        cars = []
    }
    var years = keyArray('year').sort(function(a,b) { return a-b })
    var avgMpg = new Array()
    var city_h = new Array()
    var highway_h = new Array()
    var city_nh = new Array()
    var highway_nh = new Array()
    for (let i in years) {
        for(j in mpg_data) {
            if (mpg_data[j]['year'] === years[i]) {
                if (mpg_data[j]['hybrid']) {
                    city_h.push(mpg_data[j]['city_mpg'])
                    highway_h.push(mpg_data[j]['highway_mpg'])
                } else {
                    city_nh.push(mpg_data[j]['city_mpg'])
                    highway_nh.push(mpg_data[j]['highway_mpg'])
                }
            }
        }
        avgMpg[i] = {hybrid: {city: getSum(city_h) / city_h.length, highway: getSum(highway_h) / highway_h.length}, notHybrid: {city: getSum(city_nh) / city_nh.length, highway: getSum(highway_nh) / highway_nh.length}}
        city_h = []
        city_nh = []
        highway_h = []
        highway_nh = []
    }
    var avgMpgByYear = {}
    for (let i in avgMpg) {
        avgMpgByYear[years[i]] = avgMpg[i]
    }
}
export const moreStats = {
    makerHybrids: hybrids,
    avgMpgByYearAndHybrid: avgMpgByYear
};
