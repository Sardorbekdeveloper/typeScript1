//1-task

function identity<T>(value: T): T {
    return value;
}
console.log(identity(10));
console.log(identity("bir"));
console.log(identity(true));


//2-task
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log(getFirst(["salom", 5, 8]))

//3-task

function getLast<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

const lastNum = getLast([1, 2, 3]);
const lastStr = getLast(["a", "b", "c"]);

console.log(lastNum)
console.log(lastStr)

//4-task
interface KeyValue<K, V> {
    key: K;
    value: V;
}

const item1: KeyValue<string, number> = { key: "yosh", value: 29 };
const item2: KeyValue<number, string> = { key: 1, value: "birinchi" };
console.log(item1)
console.log(item2)

// 5-task
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): number {
    return item.length;
}

console.log(logLength("salom"));
console.log(logLength([1, 2, 3, 4]));

//6-task
function findMin<T extends number>(arr: T[]): T {



    let min = arr[0]!;
    for (const num of arr) {
        if (num < min) min = num;
    }
    return min;
}
//console.log(findMin([-1, 0, 8, 7, 563]))

// 7-task
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person = merge({ name: "Otabek" }, { age: 40 });

console.log(person.name, person.age);

// 11-task
function processValue<T extends number | string>(value: T): T {
    console.log("Qiymat: ", value);
    return value;
}

console.log(processValue(42));
console.log(processValue("salom"));

//12-task
function removeDuplicates<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 2, 2, 2, 2, 2, 3, 3, 3]));






