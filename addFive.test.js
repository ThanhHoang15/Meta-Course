//create file.test.js (in this case addFive.test.js)

const addFive = require(`./addFive`);  //go to addFive.js import whatever function in there export 
                                        // and  want to test (in this case addFive)

//test syntax:

test(`returns the number plus 5 `, () => {
    expect(addFive(1)).toBe(6);
})      