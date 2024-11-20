/* 
TASK 4
*/

/* 
As a requerment want defining an interface to define to
define a shape for an object
May can we create Product class and define a calcTotalPrice function
with its implementation ?
*/

/* HOW js BE TS  ?????
Compile Using the TypeScript Compiler like (tcs)
After compilation, the JavaScript file can be run in any environment 
that supports JavaScript, such as a browser or Node.js.


*/
interface Product {
    name: string;
    price: number;
}
/*
When you create a list of Product and pass it to the this function
reduce fun use to loop on an array and each result will be consederd for the next loop to complete on

*/
function calcTotalPrice(products: Product[]): number {
    //  product.price price is an attribute
    return products.reduce((total, product) => total + product.price, 0);
}

/* 
TASK 5
*/

function isValidEmail(email: string): boolean {
    // email rools - how it should be-
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // test if the passed email value works againest our previous rools
    return emailRegex.test(email);
}
