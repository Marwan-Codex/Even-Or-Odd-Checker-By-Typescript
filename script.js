"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Making it with changeable limit
const nums_arr = [1, 2, 3, 4, 5];
const rand_ind = Math.floor(Math.random() * nums_arr.length);
let limit = 1;
if (nums_arr[rand_ind]) {
    for (let i = 1; i <= nums_arr[rand_ind]; i++) {
        limit *= 10;
    }
}
else {
    limit = 10;
}
const num = Math.floor(Math.random() * (limit + 1));
console.log(num);
console.log(num % 2 == 0 ? "This is an Even Number" : "This is and Odd");
// I try to use less variables, OK!
//# sourceMappingURL=script.js.map