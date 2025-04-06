const multiplicity = (a:number) => (numbers : number[]) => numbers.filter((num) => num % a == 0);
const multiplicityTwo = multiplicity(2);
console.log(multiplicityTwo([1,2,3,4,5,6,7]));

const separator = (sep : string) => (arr : string[]) => arr.join(sep);
const separatorСomma = separator(",");
console.log(separatorСomma(["Hello", "World", "!"]));

type Person = {
    name : string;
    age : number;
}
type ObjectKey<Obj> = keyof Obj;
type PersonKeys = ObjectKey<Person>;
const objSort = (prop: PersonKeys) => (arr : Person[]) => arr.sort((a : Person,b : Person)  => a[prop] < b[prop] ? -1 : 1 )
const objSortByName = objSort("name")
console.log(objSortByName([{name : "Tom", age : 20}, {name : "Zack", age : 16}, {name : "Anna", age : 21}]))

function numb(fn: (a : number, b : number) => void) {
    return function(){
        console.log("Функция выполнена")
        fn(1,2)
    }
}
function sum(a : number, b : number) {
    console.log(a + b);
}
numb(sum)();
