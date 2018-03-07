// The math file should export an Object with a method called randomInt that accepts two arguments, a lower bound and an upper bound. This function should return a random integer inclusive of the lower bound and the upper bound.

module.exports = (min, max) => {
    if(typeof min === 'string' || typeof max === 'string'){
        return console.log("Please pass in a number!")
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
