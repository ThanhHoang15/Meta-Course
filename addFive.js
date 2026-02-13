//create file want to test(in this case it named addFive)

function addFive1(val){
    return val + 5;
}

// export function (not file) --> so can import it in to file.test.js(in this case: addFive.test.js)
module.exports =addFive1;
