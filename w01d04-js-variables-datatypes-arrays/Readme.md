# Javascript Variables, Datatypes and Arrays

## Learning Competencies
By the end of this lesson, you should be able to
- Learn about javascript & it's significance
- Understand what is variable & datatype
- Initialize and assign variables
- Use `prompt` function to store variable
- Understand boolean logic - variables and operations
- List all of the falsey values in javaScript
- Explain the difference between == and === in JavaScript
- Understand Array, index, array length, add, remove elements
- Use different methods of Arrays
- Learn iteration, use different loops in arrays


## Overview


### Variable


#### What Wikipedia says
In computer programming, a variable or scalar is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value. The variable name is the usual way to reference the stored value; this separation of name and content allows the name to be used independently of the exact information it represents. The identifier in computer source code can be bound to a value during run time, and the value of the variable may thus change during the course of program execution.

A variable storage location may be referred by several different identifiers, a situation known as aliasing. Assigning a value to the variable using one of the identifiers will change the value that can be accessed through the other identifiers.

#### Why do we use it?
A variable's purpose is to store information so that it can be used later. A variable is a name, or identifier, that represents some data that you set. The name wraps up the data so you can move it around a lot easier, but the name is not the data! A variable's value can change during the script. You can refer to a variable by name to see its value or to change its value.

JavaScript is an untyped language. This means that JavaScript variables can hold data of any valid type. It takes its type from the data type of what it is holding. You cannot declare a type for variables in JavaScript. There is no facility for saying this variable must be a string, or this one must be a number.

JavaScript also converts types as needed, automatically and behind the scenes.

#### Story of Variable

The first thing when we start learning a programming language is initializing and using variables. Using variables lets us write code that's easier to read and also easier to change. It's unlikely you'll ever write a significant amount of JavaScript code without using variables, so it's good to get used to them early.

The basic example of initializing variable is:

```javascript
var firstName = "Matt";
console.log("Hi, " + firstName + "!");
```

The above code will give the following output:
```
Hi, Matt !
```
**Using `prompt` Function**
When you use the prompt function, a pop-up window will appear on the page and ask the user to fill in a text box. You can then store what the user types into a variable. and it will give the name that you input

```js
var firstName = prompt("What is your first name?");
// Now firstName should correspond to whatever the user typed!
console.log("Hi, " + firstName + "!");
```

#### Data type in JavaScript

JavaScript has 6 primitive data types, but we'll only talk about 5 of them. Here's what they look like:

- string - `var greeting` = "hello";
- number - `var favoriteNum` = 33;
- boolean - `var isAwesome` = true;
- undefined - `var foo`; or `var setToUndefined` = undefined;
- null - `var empty` = null;


In JavaScript, we have a keyword called `typeof` that returns the type of the variable. While this seems pretty fool-proof, there are some quirks that we should be aware of. 

- `typeof "";` - "string"
- `typeof 5;` - "number"
- `typeof false;` - "boolean"
- `typeof Symbol();` - "symbol"
- `typeof undefined;` - "undefined"
- `typeof null`; // intentional absence of data.



### Boolean

#### What Wikipedia says
The Boolean data type is a data type, having two values (usually denoted true and false), intended to represent the truth values of logic and Boolean algebra. The Boolean data type is primarily associated with conditional statements, which allow different actions and change control flow depending on whether a programmer-specified Boolean condition evaluates to true or false. It is a special case of a more general logical data type; logic need not always be Boolean.

#### Why to use Boolean logic
Boolean logic is just a formal way of writing what is plain common sense. Consider for e.g. your wife asks you to get a Red dress AND it needs to have short sleeves. Consider another case, where you get to take your wife shopping if you can either walk OR drive.

In the first case, you are allowed to buy the dress if and only if, both conditions are met. So, your decision to buy a dress is contingent upon both the facts being true. If either of the conditions is not met, you don’t buy the dress.

Let us represent a condition met as ‘1’ and not met as ‘0’. Similarly your decision to buy is’1’ and to not buy is ‘0’. 

In the second case, you have to go shopping if you can either walk or drive. If you can do both, obviously you can still go. The only case where you cannot shop is when you can neither drive, nor walk.

#### Story of Boolean logic
Boole's algebra predated the modern developments in abstract algebra and mathematical logic; it is however seen as connected to the origins of both fields. In an abstract setting, Boolean algebra was perfected in the late 19th century by Jevons, Schröder, Huntington, and others until it reached the modern conception of an (abstract) mathematical structure. For example, the empirical observation that one can manipulate expressions in the algebra of sets by translating them into expressions in Boole's algebra is explained in modern terms by saying that the algebra of sets is a Boolean algebra (note the indefinite article). In fact, M.H. Stone proved in 1936 that every Boolean algebra is isomorphic to a field of sets.

Read more about [Boolean Logic History Here](https://en.wikipedia.org/wiki/Boolean_algebra#History)

#### Example
The Boolean object represents two values, either "true" or "false". If value parameter is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false.

The way to write Boolean logic in JavaScript is given below:

```js
var val = new Boolean(value);
```
The basic example which explains boolean logic is given below:

The condition in the following if statement evaluates to true:
```js
var x = new Boolean(false);
if (x) {
  // this code is executed
}
```
This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:
```js
var x = false;
if (x) {
  // this code is not executed
}
```
The above two condition can be shown in an example as given below:
```js
var instructor = "Elie";

// we begin with an "if" statement followed by a condition in () and a block of code inside of {}
if(instructor === "Elie") {
    console.log("Yes!");
} else {
    console.log("No");
}
```

#### Difference between == and ===
In JavaScript we have two different operators for comparison: the double and triple equals. Both operators check whether the two things being compared have the same value, but there's one important difference. == allows for type coercion of the values, while === does not.

#### Falsey Values
In JavaScript there are 6 falsey values:

- `0`
- `""`
- `null`
- `undefined`
- `false`
- `NaN` (short for not a number)

Read more about it here(https://developer.mozilla.org/en-US/docs/Glossary/Falsy)


### Arrays


#### What Wikipedia says
An Array is a JavaScript object prototyped from the `Array` constructor specifically designed to store data values indexed by integer keys. Arrays, unlike the basic Object type, are prototyped with methods and properties to aid the programmer in routine tasks (for example, join, slice, and push).

As in the C family, arrays use a zero-based indexing scheme: A value that is inserted into an empty array by means of the push method occupies the 0th index of the array

#### Why to use Arrays
In programming languages, an array is a way of storing several items (such as integers). These items must have the same type (only integers, only strings, ...) because an array can't store different items. Every item in an array has a number so the programmer can get the item by using that number. This number is called the index. In some programming languages, the first item has index 0, the second item has index 1 and so on. But in some languages, the first item has index 1 (and then 2, 3, ...). 

When the programmer creates an array, he/she must give the size of the array. This is the number of items that can be stored in the array. If the programmer wants to store more items then he/she must create a new array. This is because the size of an array can't be changed.

#### Stories

An array is a data structure used in computer programming -- an array has the property that items stored in it are stored contiguously and can be accessed randomly (by position or index)

To write an array in JavaScript, you use square brackets [] and comma separate each value in the array. Here are some examples:
```js
var primes = [2, 3, 5, 7, 11];
var names = ["Alice", "Bob", "Charlie"];
var booleans = [true, false, false, true];
var mixedTypes = [1, "sweet", true, null, NaN, "bye!"];
var woahhh = ["What's up with this? -->", ["Woah", "crazy!"]];
var emptyArray = [];
```

To access an element in an array, we specify the name of the array followed by sqare brackets brackets and the position (also called the index) of the element we're trying to access. Arrays are zero-indexed, which means that the first element is accessed at index 0.
```js
var arr = [5,3,10];
arr[0]; // should equal 5
arr[1]; // should equal 3
arr[2]; // should equal 10
arr[3]; // should be undefined -- remember, arrays are zero-indexed!
arr[1+1]; // the same as arr[2], which is 10
arr[arr.length-1]; // shorthand for the last element of an array, in this case 10
```
**arr.length** will calculate the length of your array. In the above example arr.length will give the length of the array which is 3 i.e. no. of elements in the array.

To update a value in an array, we can simply assign an element at a given index to a new value:
```js
var arr = [5, 3, 10];
arr[0] = 50;
arr[2] = "SOAL";
arr; // should be [50, 3, "SOAL"]
```

You can add elements in the array also:
```js
var arr = [5,3,10];
arr[3] = 4; 
arr;
```
The new array will be `[5,3,10,4]`

You can also use `arr.push()` & `arr.unshift()` to add element at the end and front of the array respectively
```js
var arr = [5,3,10];
arr.push(7); // [5,3,10,7]
arr.unshift(0); // [0,5,3,10,7]
arr;
```

For deleting the element from an array;
One way to remove elements is to manually set the length of the array to a number smaller than its current length
```js
var arr = [5,3,10];
arr.length = 2;
arr; 
```
The new array will be `[5,3]`

You can also use `arr.pop()` & `arr.shift()` to remove element from the end and front of the array repectively. They both will return the value of the element removed.
```js
var arr = [5,3,10];
arr.pop(); // return 10
arr.shift(); // return 5 
arr; // [3]
```

You can also remove element by `delete` like in example given below:
```
var arr = [5, 4, 3, 2];
delete arr[1];
arr; // [5, undefined, 3, 2]
```
It removed the element `4` from the array

#### Splice
`splice` allows you to either add to an array or remove elements or even do both!
```js
var arr = [1,2,3,4];
arr.splice(0,1); // returns [1]
arr; // [2,3,4]
```
```js
var arr = [1,2,3,4];
arr.splice(0,1,5); // returns [1]
arr; // [5,2,3,4]
```
```js
var arr = ["a","b","c","d"];
arr.splice(1,2,"x","y","z"); // ["b", "c"]
arr; // ["a", "x", "y", "z", "d"]
```


### Array Methods & Iteration



#### Wiki Says
> A method is a function associated with an object, or, simply put, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. In most respects it is identical to a function except for two key differences.

> 1. It is implicitly passed the object for which it was called.
> 2. It is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data)"

> In computer programming, an iterator is an object that enables a programmer to traverse a container, particularly lists.
Various types of iterators are often provided via a container's interface. Though the interface and semantics of a given iterator are fixed, iterators are often implemented in terms of the structures underlying a container implementation and are often tightly coupled to the container to enable the operational semantics of the iterator.

#### Why to use them both
Methods are used to implement different changes made in the array and to get the output of them. Just like measuring length of array, adding the elements in the array and even adding two arrays to form single one.

In the similar way imagine you have an array of length say 10000 and a person asked you to add an element at some particular index or to remove an element based on some condition. It will be diffiult if we do it manually. Therefore, here iterators come to the rescue. You will know their uses ahead in this topic.

#### Methods
Different array methods are explained below with their respective javascript codes:

`length` returns how many elements are in the array. This is a property, NOT a function (you can tell because we type `length`, not `length()`. As we've seen, it can (but is almost never) be used to remove elements/clear an array.
```js
var arr = [1,2,3,4];
arr.length; // 4
arr[arr.length]; // undefined
arr[arr.length-1]; // 4 - this is a nice way to access the last element of an array when you don't know how many elements are inside it.
```

`slice` makes a copy of an array. We can use it to copy the entire array, or create a copy of a subarray. If we just invoke `slice()` with no arguments, we'll create a copy:
```js
var arr = [1,2,3,4];
var copy = arr.slice();
copy; // [1,2,3,4];
```
Alternatively, you can pass in two arguments to `slice`. Like `splice`, the first argument indicates the starting index of the subarray you want. The second argument indicates the ending index. The subarray you get will consist of all the values starting from the starting index and going up to (but not including) the ending index:
```js
var arr = [7, 6, 5, 4, 3, 2];
arr.slice(1, 2); // [6]
arr.slice(2, 5); // [5, 4, 3]
arr.slice(2, 1); // []
```

`concat` joins two arrays together.
```js
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var combined = arr1.concat(arr2);
combined; // [1,2,3,4,5,6]
```

In fact, you can pass multiple arrays into concat and it will still return a single array to you:
```js
var arr1 = ["a","b","c"];
var arr2 = ["d","e","f"];
var arr3 = ["g","h","i"];
var combined = arr1.concat(arr2,arr3);
combined; // ["a","b","c","d","e","f","g","h","i"];
```
Any comma-separated list of values can be concatenated with the original array:
```js
var openingWords = ["It","was","a"];
var moreOpeningWords = openingWords.concat("dark","and","stormy","night");
moreOpeningWords; // ["It", "was", "a", "dark", "and", "stormy", "night"]
```

`join` joins elements of an array into a string separated by whatever you pass in as an argument to `join`. This argument is frequently referred to as a delimiter. Here are a couple of examples:
```js
var arr = ["Hello", "World"];
arr.join(" "); // "Hello World"

var arr2 = ["I", "have", "a", "big", "announcement"];
arr2.join("! ") + "!"; // "I! have! a! big! announcement!"
```

`indexOf` finds the first index of the element passed in (starting from the left). If the element is not found, it returns `-1`. Here are some examples:
```js
var arr = [1,2,3,4,5,4,4];
arr.indexOf(2); // 1
arr.indexOf(3); // 2
arr.indexOf(1); // 0 - remember, arrays are zero indexed
arr.indexOf(4); // 3 - indexOf stops once it finds the first 4.
arr.indexOf(10); // -1
```
You'll see this function very commonly used to check if an element is in an array or not. Here's an example:
```js
var moviesIKnow = [
    "Wayne's World",
    "The Matrix",
    "Anchorman",
    "Bridesmaids"
];

var yourFavoriteMovie = prompt("What's your favorite movie?");
if (moviesIKnow.indexOf(yourFavoriteMovie) > -1) {
    alert("Oh, cool, I've heard of " + yourFavoriteMovie + "!");
} else {
    alert("I haven't heard of " + yourFavoriteMovie + ". I'll check it out.");
}
```

`lastIndexOf` works just like indexOf, but starts searching from the end of the array rather than the beginning.
```js
var arr = [1,2,3,4,5,4,4];
arr.indexOf(4); // 3
arr.lastIndexOf(4); // 6 - this one is different now as it starts from the end!
arr.lastIndexOf(10); // -1 - still returns -1 if the value is not found in the array
```

#### Iterators
The iterator is difend by:
```js
Iterator(object, [keyOnly])
```
A simple iterator example is described below:
```js
var a = {
  x: 10,
  y: 20,
};

for (var [name, value] in Iterator(a)) {
  console.log(name, value);   // x 10
                              // y 20
}
```


## Exploration

- Javascript Variable [here](https://www.javatpoint.com/javascript-variable) [here](https://docs.microsoft.com/en-us/scripting/javascript/variables-javascript)
- Boolean [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) [here](https://www.tutorialspoint.com/javascript/javascript_boolean_object.htm) [here](https://www.quirksmode.org/js/boolean.html)
- Array in JS [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [here](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm)
- Loops and Iteration[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) [here](http://speakingjs.com/es5/ch18.html) [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- [Symbol datatype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) Explore where it is used?
- Multi dimentional arrays
- Arrays in matlab & how it is different?

