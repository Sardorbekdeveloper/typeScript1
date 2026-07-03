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

