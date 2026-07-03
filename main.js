"use strict";
//1-task
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("bir"));
console.log(identity(true));
//2-task
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst(["salom", 5, 8]));
//3-task
function getLast(arr) {
    return arr[arr.length - 1];
}
const lastNum = getLast([1, 2, 3]);
const lastStr = getLast(["a", "b", "c"]);
console.log(lastNum);
console.log(lastStr);
const item1 = { key: "yosh", value: 29 };
const item2 = { key: 1, value: "birinchi" };
console.log(item1);
console.log(item2);
function logLength(item) {
    return item.length;
}
console.log(logLength("salom"));
console.log(logLength([1, 2, 3, 4]));
//6-task
function findMin(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (num < min)
            min = num;
    }
    return min;
}
//console.log(findMin([-1, 0, 8, 7, 563]))
// 7-task
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const person = merge({ name: "Otabek" }, { age: 40 });
console.log(person.name, person.age);
// 11-task
function processValue(value) {
    console.log("Qiymat: ", value);
    return value;
}
console.log(processValue(42));
console.log(processValue("salom"));
//12-task
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 2, 2, 2, 2, 2, 2, 3, 3, 3]));
//# sourceMappingURL=main.js.map