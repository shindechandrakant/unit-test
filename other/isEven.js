

const isEven = (num) => {

    if(num < 0) throw new Error("Number can't be negative");
    if(typeof num !== "number") throw new Error("Input number must be type of number");
    return num % 2 === 0;
};


module.exports = isEven;


