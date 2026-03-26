// Making it with changeable limit
const nums_arr: number[] = [1, 2, 3, 4, 5];
let limit: number = 1;
for(let i: number = 1; i <= nums_arr[Math.floor(Math.random() * nums_arr.length)]; i++){
    limit *= 10;
}

const num: number = Math.floor(Math.random() * (limit + 1));
console.log(num);
console.log(num % 2 == 0 ? "This is an Even Number" : "This is and Odd");
// I try to use less variables, OK!