const source1 = [1,2,3,4,5];
let cloneSource1 = [];
//Using Object.assign 
cloneSource1 = Object.assign([],source1);
console.log(cloneSource1);

//Using spread 
const source2 = {a:5, b:6, c:7};
let cloneSource2 = {};
cloneSource2 = {...source2};
console.log(cloneSource2);

//Using hasOwnProperty
const source3 = {a:100, b:101, c:102};
let cloneSource3 = {};
for (let prop in source3) {
    if (source3.hasOwnProperty(prop)) {
        cloneSource3[prop] = source3[prop];
    }
}
console.log(cloneSource3);

//Using JSON.stringify
const source4 = { a: 1000, b: 1001, c: 1002 };
let cloneSource4 = {};
cloneSource4 = JSON.parse(JSON.stringify(source4));
console.log(cloneSource4);