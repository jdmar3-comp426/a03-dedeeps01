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
    car_data.filter(car => car['horsepower'] >= minHorsepower && car['torque'] >= minTorque)
    for(let i = 0; i < car_data.length; i++) {
        for(let j = 0; j < ( car_data.length - i -1 ); j++){
          if(car_data[j]['horsepower'] < car_data[j+1]['horsepower']){
            var temp = car_data[j]
            car_data[j] = car_data[j + 1]
            car_data[j+1] = temp
          }
        }
      }
      return car_data
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
    car_data.filter(car => car['highway_mpg'] >= minHighway && car['city_mpg'] >= minCity)
    for(let i = 0; i < car_data.length; i++) {
        for(let j = 0; j < ( car_data.length - i -1 ); j++){
          if(car_data[j]['highway_mpg'] < car_data[j+1]['highway_mpg']){
            var temp = car_data[j]
            car_data[j] = car_data[j + 1]
            car_data[j+1] = temp
          }
        }
      }
    return car_data
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
    let ordered = new Array()
    car_data.filter(car => car['id'].toLowerCase().includes(searchTerm.toLowerCase()))
    for(let i in car_data.length) {
        for(let j in car_data) {
            if(car_data[j]['id'].indexof(searchTerm) === i) {
                ordered.push(car_data[j])
            } 
        }
    }
    return ordered
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
    car_data.filter(car => years.includes(car['year']))
    for(let i = 0; i < car_data.length; i++) {
        for(let j = 0; j < ( car_data.length - i -1 ); j++){
          if(car_data[j]['year'] < car_data[j+1]['year']){
            var temp = car_data[j]
            car_data[j] = car_data[j + 1]
            car_data[j+1] = temp
          }
        }
      }
    return car_data
}
