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
//# sourceMappingURL=main.js.map