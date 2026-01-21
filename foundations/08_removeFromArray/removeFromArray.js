const removeFromArray = function(el, ...args) {
    let newArray = []
    el.forEach((item) => {
        if (!args.includes(item))
            newArray.push(item)
    })
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
