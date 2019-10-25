// // events
var btn = document.querySelector('button');

function random(number) {
    console.log('random number: ' + Math.floor(Math.random()*number));
  return Math.floor(Math.random()*(number));
}

// btn.onclick = function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   console.log('new color: ' + rndCol);
//   btn.style.backgroundColor = rndCol;
// }

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    btn.style.backgroundColor = rndCol;
}
btn.addEventListener('click', bgChange);
btn.removeEventListener('click', bgChange);




// event bubbling
var evtBtn = document.getElementById('evtBubblingBtn');
var evtDiv = document.getElementById('evtBubblingDiv');
var evtSpan = document.getElementById('evtBubblingSpan');

evtBtn.onclick = function() {
    evtDiv.style.visibility = 'visible';
}

evtDiv.onclick = function() {
    evtDiv.style.visibility = 'hidden';
}

evtSpan.onclick = function() {
    console.log('event bubbling happens..!');
}




// Toggle functionality
function toggleDiv() {
    let showHideDivJS = document.getElementById('toggleDivJS');
    if(showHideDivJS.style.display==='none' || showHideDivJS.style.display==='') {
        showHideDivJS.style.display = 'block'
    } else {
        showHideDivJS.style.display = 'none'
    }
}

// event Listner
let showHideDivEvtListnr = document.getElementById('toggleDivEvtListnr'); 
let evtListnrButtonVar = document.getElementById('evtListnrButton');

evtListnrButtonVar.addEventListener('click', function() {
    if(showHideDivEvtListnr.style.display==='none' || showHideDivEvtListnr.style.display==='') {
        showHideDivEvtListnr.style.display = 'block'
    } else {
        showHideDivEvtListnr.style.display = 'none'
    } 
});


// IIFE Immediately Invoked Function Expression also called Self Executing Anonymous Function
// Anonymous function with Lexical scope enclosed within the ()
// Prevents accessing variables within the IIFe as well as polluting global scope.
(function() {
    var flashName = 'Barry Allen';
})();
// console.log('accessing IIFE variable from outside: ' + flashName);  // not defined

var iifeResult = (function() {
    var captainMarvel = 'Carole Danvers';
    return captainMarvel;
})();
console.log('IIFE function expression: ' + iifeResult);  // not defined



// closures
/*
A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.

The closure has access to variables in three scopes:

Variables declared in their own scope
Variables declared in a parent function scope
Variables declared in the global namespace
*/

/*
In JavaScript, a function defined inside another one has access to the outer function's variables. Therefore, a function is a first-class object that can be returned by other functions as well and be passed as an argument in another function.

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
A function can be stored as a variable
A function can be pass as a parameter to another function
A function can be returned from another function
*/





/*
    Task:  Sort array of objects
*/
let arrayObjSort = [
    { name: 'Rajesh', age: 29, salary: 6000 },
    { name: 'Vijay', age: 32, salary: 7000 },
    { name: 'Nikhil', age: 29, salary: 6100 },
    { name: 'Vikesh', age: 29, salary: 5700 },
    { name: 'Pulasani', age: 27, salary: 5600 },
    { name: 'Mohan', age: 30, salary: 6000 }
]
let sortedArrayObject = arrayObjSort.sort((a,b) => {
    return (a.age > b.age) ? 1 : (a.salary > b.salary) ? 1 : -1;
})
console.log('sort array of objects: ' + JSON.stringify(sortedArrayObject));



// method 2
let sortedArrayObject2 = arrayObjSort.sort((a,b) => {
    return a.salary - b.salary
})
console.log('sort array of objects simple way: ' + JSON.stringify(sortedArrayObject2))


// method 3
Array.prototype.sortBy = function(p) {
    return this.slice(0).sort(function(a,b) {
        return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
}
console.log('sort array of objects using Array prototype: ' + JSON.stringify(arrayObjSort.sortBy('age')));



// method 4 using underscorejs
// let sortedArrayObjUnderscorejs = _.sortBy(arrayObjSort, 'salary');
// console.log('sort array of objects using underscorejs: ' + sortedArrayObjUnderscorejs);






























































list = ['a', 'b', 'c', 'd', 'e'];
console.log(list[1])  // b
console.log(list.indexOf('b'))  // 1


// Adding / Remove items
list.push('x')
console.log('push: ' + list)  // push: a,b,c,d,e,x

list.unshift('y')
console.log('unshift: ' + list)  // unshift: y,a,b,c,d,e,x

list.pop()
console.log('pop(): ' + list)  // pop(): y,a,b,c,d,e

list.shift()
console.log('shift(): ' + list)  // shift(): a,b,c,d,e

list.splice(2,0,'Z')
console.log('splice(2,0,"Z"): ' + list)  // splice(2,0,"Z"): a,b,Z,c,d,e



// // splice
arr = ['I', 'write', 'lyrics'];
console.log(arr)  // ["I", "write", "lyrics"]


delete arr[1]
console.log(arr)  // ["I", empty, "lyrics"]
console.log(arr.length)  // 3

/*
    That’s natural, because delete obj.key removes a value by the key. It’s all it does. 
    Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed 
    place. We expect to have a shorter array now.

    So, special methods should be used.

    The arr.splice(str) method is a swiss army knife for arrays. It can do everything: insert, 
    remove and replace elements.

    Syntax: arr.splice(index[, deleteCount, elem1, ..., elemN]);
        It starts from the position index: removes deleteCount elements and then inserts 
        elem1, ..., elemN at their place. Returns the array of removed elements.

*/

arrSplice = ['I', 'play', 'football'];
console.log(arrSplice)  // ['I', 'play', 'football']


arrSplice.splice(1, 0);  // from index 1 remove 1 element
console.log('splice(1, 1): ' + arrSplice);  // splice(1, 1): [I,football]
// console.log('splice(1, 0): ' + arrSplice);  // splice(1, 1): [I,play,football]


// arrSplice.splice(1, 1, "high_school", "college");  // removes the 1 indexed element and add high_school, college to the array
// console.log('splice(1, 1, "high_school", "college"): ' + arrSplice)  // splice(1, 1, "college"): [I,high_school,college,football]



anotherArr = ["I", "study", "JavaScript", "right", "now"];

anotherArr.splice(0, 3, "Let's", "dance");  // remove 3 first elements and replace them with another
console.log('anotherArr splice(0, 3, "lets", "dance"): ' + anotherArr) // now ["Let's", "dance", "right", "now"]




// // Negative indexes allowed
/*
    Here and in other array methods, negative indexes are allowed. 
    They specify the position from the end of the array, like here:
*/
let arrNegIndex = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arrNegIndex.splice(-1, 0, 3, 4);
console.log( arrNegIndex ); // 1,2,3,4,5







// // Slice
/*
    arrSlice.slice(start, end)
    It returns a new array containing all items from index "start" to "end" (not including "end"). 
    Both start and end can be negative, in that case position from array end is assumed.

    It works like str.slice, but makes subarrays instead of substrings.
*/
// Array slice
arrSlice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

arrSlice.slice(2, 5)  // ["c", "d", "e"]
console.log('arrSlice.slice(2, 5): ' + arrSlice.slice(2, 5))

arrSlice.slice(-5, -1)  // ["e", "f", "g", "h"]
console.log('arrSlice.slice(-5, -1): ' + arrSlice.slice(-5, -1))


// String slice
someString = 'Javascript Arrays'
someString.slice(5, 9)  // someString.slice(5, 9): crip
console.log('someString.slice(5, 9): ' + someString.slice(5, 9))

someString.slice(-5, -1)  // someString.slice(-5, -1): rray
console.log('someString.slice(-5, -1): ' + someString.slice(-5, -1))







// // Concat
/*
    The method arr.concat joins the array with other arrays and/or items.
    Syntax:  arr.concat(arg1, arg2...)

    It accepts any number of arguments – either arrays or values.  
    The result is a new array containing items from arr, then arg1, arg2 etc.

    If an argument is an array or has Symbol.isConcatSpreadable property, then all its elements are 
    copied. Otherwise, the argument itself is copied.
*/
concArr = [1, 2, 3]

console.log('concArr.concat([4, 5]): ' + concArr.concat([4, 5]))
console.log('concArr.concat([6, 7], [8, 9]): ' + concArr.concat([6, 7], [8, 9]))
console.log('concArr.concat([0], 11, 12): ' + concArr.concat([0], 11, 12))

stringArr = ['a', 'b', 'c']

let concMergeArrays = concArr.concat(...stringArr)  // 1,2,3,a,b,c
console.log('concMergeArrays using spread operator: ' + concMergeArrays)


/*
    Normally, it only copies elements from arrays (“spreads” them). 
    Other objects, even if they look like arrays, added as a whole:
*/
objArr = {
    0: 'rajesh',
    1: ' working as ',
    length: 2
}
arrObj = concArr.concat(objArr)
console.log('concatinating array with object: ' + arrObj);  // 1,2,3,[object Object]


/*
    But if an array-like object has Symbol.isConcatSpreadable property, 
    then its elements are added instead:
*/
objArr2 = {
    0: 'rama',
    1: ' working as ',
    length: 2,      // copies two vales('rama', ' working as '),  if length: 1...copies only 'rama'
    [Symbol.isConcatSpreadable]: true
}
arrObject = concArr.concat(objArr2)
console.log('concatinating array with object using Symbol.isConcatSpreadable: ' + arrObject);  // 1,2,3,[object Object]





// // Iterate: forEach
/*
    The arr.forEach method allows to run a function for every element of the array.
    We can loop the item / name / element as well as index.
*/
let cars = ['Honda', 'Acura', 'Nissan', 'Audi', 'Toyota', ]
cars.forEach((item) => {
    console.log('forEach item: ' + item)  // forEach item: Honda, forEach item: Acura, etc...
})

cars.forEach((a, b) => {
    console.log('forEach(a, b): ' + `${a} is at ${b} index`)  // 'a' is the element(item) and 'b' is the index.
}) 

cars.forEach((item, index, array) => {
    console.log('forEach(item, index, array): ' + `${item} is at ${index} index in ${array}`)
}) 

/*
for(let i in cars) {
    console.log('for loop finding index: ' + i)  // o,1,2,3,4
    console.log(`for loop finding index and item: + ${cars[i]} has index ${i}`)  //Honda has index 0, etc...
}
*/







// // Searching in array
/*
    indexOf/lastIndexOf and includes are the methods to search for something in an array.

    arr.indexOf(item, from) looks for item starting from index from, and returns the index where 
    it was found, otherwise -1.
    
    arr.lastIndexOf(item, from) – same, but looks for from right to left.
    
    arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/
let searchArr = [5,7,2,9,1,'Raj',true,3,5,7]

// indexOf
console.log(searchArr.indexOf(7))  // 1
console.log(searchArr.indexOf(true))  // 6
console.log(searchArr.indexOf(null))  // -1
console.log(searchArr.includes(5))  // true
console.log(searchArr.includes(15))  // false

/*
    Note that the methods use === comparison. So, if we look for false, it finds exactly false and not the zero.

    If we want to check for inclusion, and don’t want to know the exact index, then arr.includes is preferred.

    Also, a very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf:
*/
const nanArr = [NaN];
console.log('NaN indexOf(NaN): ' + nanArr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
console.log('NaN includes(NaN): ' + nanArr.includes(NaN) );// true (correct)






// // find and findIndex
/*
    Imagine we have an array of objects. How do we find an object with the specific condition?
    arr.find method comes in handy.

    The function is called repetitively for each element of the array:

    arr.findIndex method is essentially the same, but it returns the index where the element was 
    found instead of the element itself and -1 is returned when nothing is found.

    Syntax:   let result = arr.find(function(item, index, array) { });
*/
let users = [
    {id: 1, name: 'Rama'},
    {id: 5, name: 'Rajesh'},
    {id: 2, name: 'Sashi'},
    {id: 5, name: 'Prasanna'},
    {id: 7, name: 'Sun'}
]

let user = users.find(item => item.id == 5)
console.log('find user name with id 5: ' + user.name)  // returns the first element only
console.log('findIndex of user with id 7: ' + users.findIndex(item => item.id==7))






// // filter
/*
    The find method looks for a single (first) element that makes the function return true.

    filter continues to iterate for all array elements even if true is already returned:

    Syntax:   let results = arr.filter(function(item, index, array) { });
*/

let ages = [
    { name: 'Rama', age: 36 },
    { name: 'Sashi', age: 37 },
    { name: 'Shobha', age: 37 },
    { name: 'Manu', age: 33 },
    { name: 'Rajesh', age: 29 },
    { name: 'Prasanna', age: 26 }
]

let ageFilter = ages.filter((item, index) => {
    return item.age < 30;
})
console.log('ageFilter: ' + JSON.stringify(ageFilter))
console.log('ageFilter: ' + JSON.stringify(ageFilter.find(item => item.age <27)))






// // Transform an array using map
/*
    methods transforming or reordering the array.

    Syntax:   let result = arr.map(function(item, index, array) { })
*/
mapArr = ['Rama', 'Sashi', 'Rajesh']
mapArr.map((item, index) => {
    console.log(`name ${item} has length ${item.length}`)
})



// // sort(fn)
/*
    The method arr.sort sorts the array in place.
    The items are sorted as strings by default.
    Literally, all elements are converted to strings and then compared. 
    So, the lexicographic ordering is applied and indeed "2" > "15"  // lexicographic=alphabetical order
    The arr.sort(fn) method has a built-in implementation of sorting algorithm. (quick sort algorithm).
    */
let sortArr = [1,4,15,2,35,10]
console.log('sortArr using sort(): ' + sortArr.sort())

function compareArrEl(a,b) {   //  a is the second element and b is the first element
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

sortArr.sort(compareArrEl);
console.log('sortArr using compareArrEl(a,b): ' + sortArr);



sortArrAnother = [1, -2, 15, 2, 0, 8];
sortArrAnother.sort((a,b) => console.log(a + ' < > ' + b))
console.log(sortArrAnother.sort((a,b) => a-b));





// // reverse
// // The method arr.reverse reverses the order of elements in arr. Syntsx:   arr.reverse();





// // split and join
/*
    The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.
    split('') would split the string into an array of letters:
    arr.join(separator) does the reverse to split. It creates a string of arr items glued by separator between them.
*/

let splitNames = 'Rama, Sashi, Rajesh';
let splitNamesArr = splitNames.split(', ')
console.log('split names array with , delimeter: ' + splitNamesArr);
console.log('split names upto 2 values: ' + splitNames.split(', ', 2));
console.log('split names string: ' + splitNames.split(''));

for(let name of splitNamesArr) {
    console.log('arr.split(', '): ' + `A message to ${name}...`);
}

let joinNames = ['Rama', 'Sashi', 'Rajesh'];
console.log('join names array with ";" :  ' + joinNames.join(';'));











// // Tasks
/*
    Task 1:  Translate border-left-width to borderLeftWidth.

    Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
    That is: removes all dashes, each word after dash becomes uppercased.
*/

let taskStr = 'border-left-width';

function camelize(str) {
    return taskStr.split('-')
                  .map((str, index) => index==0 ? str : str[0].toUpperCase() + str.slice(1) )
                  .join('');
}
console.log('Task camelize(str): ' + camelize(taskStr));  // borderLeftWidth





/*
    Task 2:   Filter unique array members
    Create a function unique(arr) that should return an array with unique items of arr.
*/
let nameStrings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
function unique(array) {
    let resultArray = [];

    for(let string of array) {
        if(!resultArray.includes(string)) {
            resultArray.push(string);
        }
    }
    return resultArray;
}
console.log(unique(nameStrings));  // ["Hare", "Krishna", ":-O"]

// Another way
let uniqueStrings = nameStrings.filter((string, index, array) => {
    return array.indexOf(string) === index;
})
console.log('uniqueStrings : ' + uniqueStrings);  // uniqueStrings : Hare,Krishna,:-O






let yearsArr = [2017, 1999, 2000, 2010, 1957, 1947, 1989, 1999, 2018, 1947, 2000]; // length 11
let uniqueYears = yearsArr.filter((item, index, array) => {
    return array.indexOf(item) === index;
    // console.log(`${item} has index of ${index} contains array elements of ${array}`);
});
console.log('unique years: ' + uniqueYears);  // length 8

//  Another way in ES6
// This solution only works for primitive values.
let distinctYears = [...new Set(yearsArr)]
console.log('distinctYears using ES6 ...new Set(yearsArr): ' + distinctYears);


let distinctStrings = [...new Set(nameStrings)]
console.log('distinctStrings using ES6 ...new Set(yearsArr): ' + distinctStrings);



// Unique characters from a string
let nonUniqueChars = 'abcabcefghfgdt';

function uniqueChars(string) {
    return String.prototype.concat(...new Set(string))
}
console.log('uniqueChars from a string: ' + uniqueChars(nonUniqueChars))


let uniqueCharsString = nonUniqueChars.split('').filter((char, index, array) => {
    return array.indexOf(char) === index;
}).join('');
console.log('uniqueCharsString from a string: ' + uniqueCharsString)



/*
    Task 3:  Get average age
    Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
    The formula for the average is (age1 + age2 + ... + ageN) / N.
*/
let avgArray = [
    {name: 'a', age:10},
    {name: 'b', age:20},
    {name: 'c', age:30}
]

function getAverageAges(avgArray) {
    return avgArray.reduce((prev, cur) => prev+cur.age,0)/avgArray.length
}
console.log('get average age from array: ' + getAverageAges(avgArray));  // 20






/*
    Task: 4   Filter range
    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements 
    between a and b in it and returns an array of them.

    The function should not modify the array. It should return the new array.
*/

function filterRange(frArr, a, b) {
    // added brackets around the expression for better readability
    return frArr.filter(item => a <= item && b >= item);
}

let frArr = [5, 3, 8, 1];

let filtered = filterRange(frArr, 1, 4);
console.log('filtered array: ' + filtered);
console.log('original array: ' + frArr);





/*
    Task: 5   Filter range  "in place"
    Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes 
    from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

    The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(fripArr, a, b) {
    for (let i = 0; i < fripArr.length; i++) {
      let val = fripArr[i];
      console.log(val);
  
      // remove if outside of the interval
      if (val < a || val > b) {
        fripArr.splice(i, 1);
        i--;
      }
    }
}

let fripArr = [5, 3, 8, 1];
filterRangeInPlace(fripArr, 1, 4); // removed the numbers except from 1 to 4
console.log('filterRangeInPlace(): ' +  fripArr ); // [3, 1]






/*
    Task 6:   Sort in the reverse order
*/
let arrTask6 = [5, 2, 1, -10, 8];

let sortedArr6 = arrTask6.sort((a,b) => b-a);
console.log('original array6: ' + arrTask6 + '  sortedArr6: ' + sortedArr6);





/*
    Task 7:   Copy and sort array

    We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
    Create a function copySorted(arr) that returns such a copy.
*/
let arrTask7 = ["HTML", "JavaScript", "CSS"];

let sortedArr7 = arrTask7.slice().sort();
console.log('original array7: ' + arrTask7 + '  sortedArr6: ' + sortedArr7);






/*
    Task 8:   Map to names
    You have an array of user objects, each one has user.name. 
    Write the code that converts it into an array of names.
*/
let usersTask8 = [
    {name: 'john', age: 45},
    {name: 'Brad', age: 39},
    {name: 'Odel', age: 25}
]
let namesTask8 = usersTask8.map((item) => item.name)
console.log('retrieving object properties:' + namesTask8);





/*
    Task 9:   Map to objects
    You have an array of user objects, each one has name, surname and id.

    Write the code to create another array from it, of objects with id and fullName, 
    where fullName is generated from name and surname.
*/
let usersTask9 = [
    {name: 'John', id: 45, surname:'muligan'},
    {name: 'Brad', id: 39, surname:'young'},
    {name: 'Odel', id: 25, surname:'beckham'}
]

let usersMappedTask8 = usersTask9.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
console.log('original array: ' + JSON.stringify(usersMappedTask8));
console.log('retrieving and combining object properties:' + JSON.stringify(usersMappedTask8));

let usersMappedTask8_1 = usersTask9.map(item => ({
    fullName: item.name + item.surname,
    id: item.id,
    Team: 'NY Giants'
}));
console.log('original array usersMappedTask8_1: ' + JSON.stringify(usersMappedTask8_1));




/*
    Task 10:   Sort users by age in object
    Write the function sortByAge(users) that gets an array of objects 
    with the age property and sorts them by age.
*/
let usersTask10 = [
    {name: 'john', age: 45},
    {name: 'Brad', age: 39},
    {name: 'Odel', age: 25}
]

let namesSortedAges10 = usersTask10.map((user) => user.name).sort((a,b) => a.age > b.age ? -1 : 1);
console.log('names sorted by age: ' + namesSortedAges10);

// another way
function sortByAge(usersTask10) {
    usersTask10.sort((a, b) => a.age > b.age ? 1 : -1);
  }

sortByAge(usersTask10);




/*
    Task 11:   Shuffle an array
    Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
    Multiple runs of shuffle may lead to different orders of elements. For instance:
*/
function shuffle(task11Arr) {
    return task11Arr.sort(() => Math.random() - 0.5);
}
  
let task11Arr = [1, 2, 3];
console.log('Shuffle array: ' + shuffle(task11Arr));





/*
    Task 12:   Get average age
    Write the function getAverageAge(users) that gets an array of objects with 
    property age and returns the average age.

    The formula for the average is (age1 + age2 + ... + ageN) / N.
*/
let usersTask12 = [
    {name: 'john', age: 45},
    {name: 'Brad', age: 39},
    {name: 'Odel', age: 25}
]

function getAverageAge(usersTask12) {
    return usersTask12.reduce((acc, val) => acc+val.age, 0) / usersTask12.length;
}
console.log('Get average age: ' + getAverageAge(usersTask12))





/*
    Task 12:   Filter unique array members
    Create a function unique(arr) that should return an array with unique items of arr.
*/
let task12Strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// Way 1
let es6DistStringsTask12 = [...new Set(task12Strings)];

// Way 2
function uniqueTask12(task12Strings) {
    let task12Result = []
    for(let str of task12Strings) {
        if(!task12Result.includes(str)) {
            task12Result.push(str)
        }
    }
    return task12Result;
}

// Way 3
let arrFilterTask12 = task12Strings.filter((v,i,array) => {
    return array.indexOf(v) === i
})


console.log('es6DistStringsTask12: ' + es6DistStringsTask12);
console.log('uniqueTask12(): ' + uniqueTask12(task12Strings));
console.log('arrFilterTask12: ' + arrFilterTask12);


// Way 4
Array.prototype.contains = function(task12Strings) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === task12Strings) return true;
    }
    return false;
  };
  
  Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (!arr.contains(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  }
  
  var task12StringsDuplicates = [1, 3, 4, 2, 1, 2, 3, 8];
  var task12StringsUniques = task12StringsDuplicates.unique(); // result = [1,3,4,2,8]
  
  console.log('task12StringsUniques: ' + task12StringsUniques);







// // Unique characters from a string
// let nonUniqueChars = 'abcabcefghfgdt';

// function uniqueChars(string) {
//     return String.prototype.concat(...new Set(string))
// }
// console.log('uniqueChars from a string: ' + uniqueChars(nonUniqueChars))



let commonCharsTask12 = 'aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz';
let uniqueCharsTask12 = commonCharsTask12.split('').filter((char,index,array) => {
    return array.indexOf(char) === index
}).join('');


console.log('uniqueCharsTask12: ' + uniqueCharsTask12);
console.log('es6distinctCharsTask12: ' + [...new Set(commonCharsTask12)].join(''));






/*
    Task 13:   sum of n arguments
*/
function sumArgsTask13() {
    let sum = 0;
    for (let i=0; i<arguments.length; i++) {
        sum = sum+arguments[i]
    }
    return sum;
}
console.log('sum of n arguments: ' + sumArgsTask13(1,2,3,4,5,6))


/*
    Task 14:   pass n arguments to a function
*/
function sumArgsTask13_1(...names) {
    for (let name of names) {
        // console.log(`number of arguments: ${names.length}, ${name}`);
    }
}
sumArgsTask13_1('a', 'b', 'c');






/*

// // Arrays with name and index
let fruits = ['orange', 'apple', 'mango', 'banana', 'strawberry'];

// fruits.forEach(element => {
//     console.log('fruits name: ' + element); // fruits name: orange, fruits name: apple, etc
// });

for( let index in fruits ) {
    // console.log('fruits index: ' + index);  // fruits index: 0, fruits index: 1, fruits index: 2, etc
    console.log('fruits with index: ' + fruits[index] + ' has index: ' + index); // fruits with index: orange has index: 0, etc...
};



const alpha = ['a', 'b', 'c'];

for (let index in alpha ) {
  console.log(alpha[index] + ': has index: ' + index);
}

alpha.forEach((item,index) => {
  console.log("name: " + item + " has index: " + index);
})

for (let [index, value] of alpha.entries() ) {
  console.log(value + ': has index: ' + index);
}
*/






/*
    Task 15:  Write a JavaScript function to check whether an `input` is an array or not. 
    Input: console.log(is_array('w3resource'));   Output: false
    Input: console.log(is_array([1, 2, 4, 0]));   Output: true
*/
function is_array( input12 ) {
    // if (input12.constructor === Array ) {
    //     return true
    // }
    // return false

    // if (Array.isArray(input12) ) {
    //     return true
    // }
    // return false

    // if (input12 instanceof Array ) {
    //     return true
    // }
    // return false

    if (toString.call(input12) === '[object Array]') {
        return true
    }
    return false 
}
console.log('is_array: ' + is_array('w3resource'));  // false
console.log('is_array: ' + is_array([1, 2, 4, 0]));  // true






/*
    Task 16:  Write a JavaScript function to clone an array. 
    Input: console.log(array_Clone([1, 2, 4, 0]));   Output: [1, 2, 4, 0] 
    Input: console.log(array_Clone([1, 2, [4, 0]]));   Output: [1, 2, [4, 0]]
*/
function array_Clone(arrayClone13) {
    return arrayClone13.slice(0)
}
console.log('array_Clone: ' + array_Clone([1, 2, 4, 0]));
console.log('array_Clone: ' + array_Clone([1, 2, [[4, 0]]]));






/*
    Task 17:  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' 
    will return the first 'n' elements of the array. 
    Input: console.log(first([7, 9, 0, -2]));   Output: 7 
    Input: console.log(first(first([7, 9, 0, -2],-3));   Output: []
*/
function firstElements17(array17, n) {
    if(n < 0) {
        return []
    }
    if (n === null || n === undefined) {
        return array17[0]
    }
    if(array17 === null) {
        return void 0
    }
    return array17.slice(0, n)
}
console.log('firstElements17: ' + firstElements17([7, 9, 0, -2]));
console.log('firstElements17: ' + firstElements17([],3));
console.log('firstElements17: ' + firstElements17([7, 9, 0, -2],3));
console.log('firstElements17: ' + firstElements17([7, 9, 0, -2],6));
console.log('firstElements17: ' + firstElements17([7, 9, 0, -2],-3));





/*
    Task 18:  Write a JavaScript function to get the last element of an array. Passing a parameter 'n' 
    will return the last 'n' elements of the array. 
    Input: console.log(last([7, 9, 0, -2],3));   Output: [9, 0, -2]  
    Input: console.log(last([7, 9, 0, -2],6));   Output: [7, 9, 0, -2]
*/
function lastElements18(array18, n) {
    if(n === null || n === undefined) {
        return array18[array18.length-1]
    }
    // return array18.slice(array18.length-n, array18.length);  // works for n = array18.length
    return array18.slice(Math.max(array18.length-n, 0))
}
console.log('lastElements18: ' + lastElements18([7, 9, 0, -2]));  // -2
console.log('lastElements18: ' + lastElements18([7, 9, 0, -2],3));  // [9,0,-2]
console.log('lastElements18: ' + lastElements18([7, 9, 0, -2],4));  // [7,9,0,-2]
console.log('lastElements18: ' + lastElements18([7, 9, 0, -2],6));  // [7,9,0,-2]




/*
    Task 19:Write a simple JavaScript program to join all elements of the following array into a string. 
    Input: myColor = ["Red", "Green", "White", "Black"];   Output: "Red+Green+White+Black"
    Input: myColor = ["Red", "Green", "White", "Black"];   Output: "Red,Green,White,Black"
*/
var array19 = ["Red", "Green", "White", "Black"];
console.log('join array elements: ' + array19.join('+'));
console.log('join array elements: ' + array19.join());
console.log('join array elements: ' + array19.join(','));
console.log('join array elements: ' + array19.toString());





/*
    Task 20:  Write a JavaScript program which accept a number as input and insert dashes (-) between 
    each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
    Input: 025468;   Output: 0-254-6-8
*/
// var numTask20 = window.prompt();
var numTask20 = 025468;
var strTask20 = numTask20.toString();
var resultArray20 = [strTask20[0]];

for (var x = 1; x < strTask20.length; x++) {
  if (strTask20[x - 1] % 2 === 0 && strTask20[x] % 2 === 0) {
    resultArray20.push('-', strTask20[x]);
  } else {
    resultArray20.push(strTask20[x]);
  }
}
console.log('insert dashes in between even numbers: ' + resultArray20.join(''));  // 254-6-8





/*
    Task 21:  Write a JavaScript program to sort the items of an array.
    Input: var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];   Output:  -4,-3,1,2,3,5,6,7,8
*/
var array21 = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
var sortedArray21 = array21.sort((a,b) => a-b);
console.log('sorted array in asending order: ' + sortedArray21); // -4,-3,1,2,3,5,6,7,8





/*
    Task 22:  Write a JavaScript program to find the most frequent item of an array.
    Get the element with the highest occurrence or repeated in an array
    Input: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];   Output:  a ( 5 times )
*/
var array22 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var frequentArray22 = [];

function mostFrequentArrayItem(array22) {
    return array22.filter((item) => {
        return 
    })
}




/*
    Task 23: Find element k is present or not in an unsorted array of n elemnets.
    The first parameter is arr23 and the second parameter is element to be searched.
*/
function findElement23(arr23, k) {
    // if(arr23.indexOf(k) > -1) { return 'YES' } else return 'NO'  // one method.
    // if(arr23.includes(k)) { return 'YES' } else return 'NO'  // one method.
    
    for (var i=0; i< arr23.length; i++) {
        if(arr23[i] === k) {
            return 'Found Element'
        }
    }
    return 'Not Found'


}

var arr23 = [2,43,5,6,3,2,4,76,1,0,8,9,3,4,67]
console.log('findElement23: ' + findElement23(arr23, 443));





/*
    Task 24: Find odd numbers in between two numbers.
    Parameters s (start numbers), e (end number).
*/
function findOddEvenNumbers24(s, e) {
    var arrOdd24 = [];
    var arrEven24 = [];

    for (var i=s; i<=e; i++) {
        if(i%2 !== 0) {
            arrOdd24.push(i);
        }
        if(i%2 === 0) {
            arrEven24.push(i)
        }
    }
    console.log('Odd numbers array: ' + arrOdd24);
    console.log('Even numbers array: ' + arrEven24);
    //return arrEven24.push()
}
findOddEvenNumbers24(1, 15);





/*
    Task 25:  find and return the second largest element in an array javascript
 */
function getSecondLargest(nums25) {
    // return nums25.sort(function (a, b) {
    //     return b-a
    // })[2];

    var first = 0;
    var second = 0;

    for(var i=0; i<nums25.length; i++) {
        if(nums25[i] > first) {
            second = first;
            first = nums25[i];
        }

        if(nums25[i] > second && nums25[i] < first) {
            second = nums25[i]
        }
    }
    return second
}
var nums25 = [2,3,6,6,10,9,9,10,7,10,5];
console.log('getSecondLargest: ' + getSecondLargest(nums25))





/*
    Task 26:  find factorial of a number
*/
function factorial26(num26) {
    
    /*
    // first method
    var result26_1 = 1;
    if (num26 == 0) {
        return 1
    }
    if (num26 != 0) {
        return result26_1 = num26 * factorial26(num26 - 1)
    }
    return result26_1
    */


    /*
    // second method
    var result26_2 = 1;
    for ( var i=1; i<=num26; i++) {
        result26_2 = result26_2 * i;
    }
    return result26_2;
    */

    // third method
    var result26_3 = num26;
    if (num26 === 0 || num26 === 1) 
        return 1; 
    while (num26 > 1) { 
        num26--;
        result26_3 *= num26;
    }
    return result26_3;


}
console.log('factorial26: ' + factorial26(10))



/*
    Task 27:  Complete the getLetter(s) function in the editor. It has one parameter: a string,
    consisting of lowercase English alphabetic letters (i.e., a through z).
    It must return A, B, C, or D depending on the following criteria:
*/

function getLetter27(s) {
    let letter;
    // Write your code here

    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A'
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B'
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C'
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D'
            break;
    }
    return letter;
}
console.log('getLetter27: ' + getLetter27('herhewfewr'));




/*
    Task 28: How to empty an array in JavaScript?
*/
let emptyArray28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let emptyArray28_1 = emptyArray28;
// methods to empty an array
// emptyArray28_1 = [];  // empty array reference only, keeps the original array
emptyArray28_1.length=0;  // empty both array reference and original array
// emptyArray28_1.splice(0, emptyArray28_1.length);  // empty both array reference and original array

/*
// // empty both array reference and original array
while(emptyArray28_1.length > 0) {
    emptyArray28_1.pop()
    // emptyArray28_1.shift()
}
*/

// console.log('empty an array original array: ' + emptyArray28 )
// console.log('empty an array array copy: ' + emptyArray28_1 )





/*
    Task 29: How to check if an object is an array or not?
*/
let checkArray29 = [1,2];
// checkArray29.constructor==Array;  // returns true if variable is Array.
// checkArray29 instanceof Array  // returns true if variable is Array.
// Object.prototype.toString.call(checkArray29)  // returns '[object Array]'
console.log('check given variable is array or not?  The given variable is ' + Array.isArray(checkArray29));





/*
    Task 30: IIFE What will be the output of the following code?
*/
let output30 = (function(x){
    delete x;
    return x;
})(0);
console.log('output of IIFE: ' + output30);  // 0
// The delete operator is used to delete properties from an object. Here x is not an object but a local variable. 
// delete operators don't affect local variables.

let task30_1 = 1;
let output30_1 = (function(){
    delete task30_1;
    return task30_1;
})();
console.log('output of IIFE: ' + output30_1);  // 1


let task30_2 = { foo : 1};
let output30_2 = (function(){
    delete task30_2.foo;
    return task30_2.foo;
})();
console.log('output of IIFE: ' + output30_2);  // undefined






/*
    Task 31: Object.create# What will be the output of the following code?
*/
let Employee31 = {
    company: 'xyz'
}
let emp31 = Object.create(Employee31);
emp31.age = 29;

console.log('Object.create# : ' + emp31.company, emp31.age);  // xyz 29

delete emp31.company
delete emp31.age
console.log('Object.create# : ' + emp31.company);  // xyz
console.log('Object.create# : ' + emp31.age);  // undefined
// Here, emp31 object has company as its prototype property. 
// The delete operator doesn't delete prototype property.



let trees31 = ["redwood","bay","cedar","oak","maple"];
delete trees31[3];
console.log('Task31 undefined * 1: ' + trees31);  // redwood,bay,cedar,,maple


var bar31 = true;
console.log('Task31 boolead with addition: ' + bar31 + 0);  // true0 sometimes 1
console.log('Task31 boolead with addition: ' + bar31 + "xyz");  // truexyz sometimes truexyz
console.log('Task31 boolead with addition: ' + bar31 + true);  // truetrue sometimes 2
console.log('Task31 boolead with addition: ' + bar31 + false);  // truefalse sometimes 1



var z31_1 = 1, y31_1 = z31_1 = typeof y31_1;
console.log('Task31 associativity: ' + y31_1);  // undefined #because the associativity of the assignment operator is Right to Left, so typeof y will evaluate first





/*
    Task 32: Hoisting What will be the output of the following code?
*/
var foo32 = function bar32(){ 
    // fooFunc31 is visible here 
    // bar32 is visible here
 	//console.log('foo32: ' + typeof bar32()); // Work here :)
 };
console.log('foo32: ' + typeof foo32());  // fooFunc31 is visible here
// console.log('foo32: ' + typeof bar32());  // bar32 is undefined here

function bar31_1(){ return 12; };
typeof bar31_1();  // number


// foo32_1(); // Calling foo function here will give an Error. Function expressions won't hoisted.
// var foo32_1 = function(){ 
//     console.log("Hi I am inside Foo");
// };


bar32_1(); // Calling foo function will not give an Error. Function statement will hoist 
function bar32_1(){ 
    console.log("Hi I am inside Foo");
}; 


// var salary_32 = "1000$";
//  (function () {
//      console.log("Original salary was " + salary_32);  // undefined
     
//      var salary_32 = "5000$";
//      console.log("My New Salary " + salary_32);  // 5000$
// })();


var salary_32 = "1000$";
(function() {
     console.log("Original salary was " + salary_32);  // undefined
     
     var salary_32 = "5000$";
     console.log("My New Salary " + salary_32);  // 5000$
})();






/*
    Task 33: instanceof operator checks the current object and returns true if the object is of the specified type.
*/
function foo_33(){ 
    return foo_33; 
}
console.log('instanceof: ' + new foo_33() instanceof foo_33);  // false


// let dog_33 = new Animal_33();
// console.log('instanceof: ' + dog_33 instanceof Animal_33); // Output : true





/*
    Task 34: calculate length of Object
*/
var obj_34 = { a:1, b:2, c:3 };
function objLength34(obj_34) {
    var len = 0;
    for (key in obj_34) {
        if(Object.hasOwnProperty(key)) {
            len++
        }
    }
    return len
}
console.log('find length of object: ' + objLength34(obj_34));



(function() {
    var test34a = test34b = 5;
})()
console.log(test34b);  // 5
