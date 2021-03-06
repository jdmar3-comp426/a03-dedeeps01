import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    let sorted = new Array()
    for(let i in car_data) {
        if (car_data[i]['horsepower'] >= minHorsepower && car_data[i]['torque'] >= minTorque) {
            sorted.push(car_data[i])
        }
    }
    for(let i in sorted) {
        for(let j = 0; j < ( sorted.length - i -1 ); j++){
          if(sorted[j]['horsepower'] < sorted[j+1]['horsepower']){
            var temp = sorted[j]
            sorted[j] = sorted[j + 1]
            sorted[j+1] = temp
          }
        }
      }
      return sorted
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let sorted = new Array()
    for(let i in car_data) {
        if (car_data[i]['highway_mpg'] >= minHighway && car_data[i]['city_mpg'] >= minCity) {
            sorted.push(car_data[i])
        }
    }
    for(let i in sorted) {
        for(let j = 0; j < ( sorted.length - i -1 ); j++){
          if(sorted[j]['highway_mpg'] < sorted[j+1]['highway_mpg']){
            var temp = sorted[j]
            sorted[j] = sorted[j + 1]
            sorted[j+1] = temp
          }
        }
      }
      return sorted
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    let sorted = new Array()
    for(let i in car_data) {
        if (car_data[i]['id'].toLowerCase().includes(searchTerm.toLowerCase())) {
            sorted.push(car_data[i])
        }
    }
      return sorted
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    let sorted = new Array()
    for(let i in car_data) {
        if (years.includes(car_data[i]['year'])) {
            sorted.push(car_data[i])
        }
    }
    for(let i in sorted) {
        for(let j = 0; j < ( sorted.length - i -1 ); j++){
          if(sorted[j]['year'] < sorted[j+1]['year']){
            var temp = sorted[j]
            sorted[j] = sorted[j + 1]
            sorted[j+1] = temp
          }
        }
      }
      return sorted
}
