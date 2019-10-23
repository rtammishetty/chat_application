# chat_application

Javascript

1.	use strict:
If you put "use strict"; at the top of your code (or function), then the JS is evaluated in strict mode and throws more errors and disables some features in an effort to make your code more robust, readable, and accurate.

Advantages:

It catches some common coding bloopers, throwing exceptions.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
It disables features that are confusing or poorly thought out.

Not Allowed in Strict Mode
Using a variable, without declaring it, is not allowed:
Using an object, without declaring it, is not allowed:
Deleting a function, variable (or object) is not allowed.
Duplicating a parameter name is not allowed:  // function x(p1, p1) {};
Octal numeric literals are not allowed:
The string "eval" cannot be used as a variable:
The string "arguments" cannot be used as a variable:

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.


2. Name spacing - 
Name spacing is used for grouping the desired functions, variables etc. under a unique name. It is a name that has been attached to the desired functions, objects and properties. This improves modularity in the coding and enables code reuse. 

    3. Closure — while execution
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

You create a closure by adding a function inside another function.

A Basic Example of Closures in JavaScript:

function showName (firstName, lastName) {

var  nameIntro = "Your name is ";
// this inner function has access to the outer function's variables, including the parameter

function makeFullName () {

return  nameIntro + firstName + " " + lastName;  
}

return makeFullName ();
}
showName ("Michael", "Jackson"); // Your name is Michael Jackson




3.Undefined / Null / Not defined:

4. Datatypes — Number, Boolean, String, Object, Null, Undefined and Function.

5. isNaN — isNaN returns true if the argument is not a number, otherwise it is false.

6.Negative infinity — Negative infinity is a number in Javascript which can be derived by dividing negative number by zero.

7.How to break JavaScript code into several lines — Breaking within a string statement can be done by the use of a backslash, ‘\’, at the end of the first line. And if you change to a new line when not within a string statement, then javaScript ignores break in line.

8.Undeclared variables — undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. 

9.Undefined variables — undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.




10. Global variables — Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.
Example: // Declare a global globalVariable = "Test"; The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.


11. Prompt box — a prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.


12. this keyword — 
In Simple Function Call:  'this' is the global object in non-strict mode, and undefined in strict mode.
Note: Variables stored with 'let', 'const' at the global level are not stored in the global object, instead it stores in an inaccessible declarative environment record.
Implicit Binding: 'this' points to the object on which the function is called.
Explicit Binding: We can explicitly tell the JavaScript engine to set 'this' to point to a certain value using call, apply or bind. Both 'call' and 'apply' can be used to invoke a function with a specific value for 'this'.
new Binding:  Using the ‘new’ keyword constructs a new ‘object’ and ‘this’ points it

// Simple function call
function ghost() {  console.log(this.boo);  }
ghost(); // undefined
var boo = '👻';;
ghost(); // 👻 // In strict mode we will get Uncaught TypeError: Cannot read property 'boo' of undefined

function ghost() {  console.log(this.boo);  }
ghost(); // undefined
let boo = '👻';
ghost(); // undefined
window.boo = '👻';
ghost(); // 👻

// Implicit binding
let myGhost = {
  name: 'Casper',
  boo: '👻 Boo!!',
  ghost: function () {
    console.log(this.boo); // 👻 Boo!!
    // console.log(boo); // Uncaught ReferenceError: boo is not defined
  }
} myGhost.ghost(); // 👻 Boo!!



// Explicit binding
function ghostCall() {  console.log(this.boo);  }
let myGhost = {
  name: 'Casper',
  boo: '👻 Boo!!',
}
ghostCall.call(myGhost); // 👻 Boo!!

function ghostBind() {  console.log(this.boo);  }
let myFavGhost = {
  name: 'Casper',
  boo: '👻 Boo!!',
}
ghostBind.bind(myFavGhost)();  // use this line or below two lines
ghostSign = ghostBind.bind(myFavGhost)
ghostSign(); // 👻 Boo!!



// ‘new’ Binding
function ghostNew(name) {  this.name = name  }
let thisGhostNew = new ghostNew ('Casper is a friendly good ghost..!');
console.log(thisGhostNew.name);






13. Timers — Timers are used to execute a piece of code at a set time or also to repeat the code in a given interval of time. This is done by using the functions setTimeout, setInterval and clearInterval. 
The setTimeout(function, delay) function is used to start a timer that calls a particular function after the mentioned delay.
The setInterval(function, delay) function is used to repeatedly execute the given function in the mentioned delay and only halts when cancelled.
The clearInterval(id) function instructs the timer to stop. 
Timers are operated within a single thread, and thus events might queue up, waiting to be executed. 


15. View state  vs  Session state — ‘ViewState’ is specific to a page in a session. 
 ‘SessionState’ is specific to user specific data that can be accessed across all pages in the web application. 


16. == vs === operator — “==” checks only for equality in value whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.

17. form submit — To submit a form using JavaScript use document.form[0].submit(); 

18. Automatic type conversion — Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers.

19. Read and Write a file — There are two ways to read and write a file using JavaScript 
1. Using JavaScript extensions
2. Using a web page and Active X objects 


20. Loops — for, while and do-while.

21. Variable typing — Variable typing is used to assign a number to a variable and the same variable can be assigned to a string.

22. How to convert string to integer — The parseInt() function is used to convert numbers between different bases. parseInt() takes the string to be converted as its first parameter, and the second parameter is the base of the given string.

23. Detect OS on client machine — navigator.appVersion string 

24. Null — The NULL value is used to represent no value or no object. It implies no object or null string, no valid Boolean value, no number and no array object. 

25. Delete operator — the functionality of delete operator is used to delete all variables and objects in a program but it cannot delete variables declared with VAR keyword. 

26. Alert boxes — Alert, Confirm and Prompt.

27. Void(0) — Void(0) is used to prevent the page from refreshing and parameter "zero" is passed while calling. 
Void(0) is used to call another method without refreshing the page.

28. Datatype of a variable — Object

29. Alert box vs Confirmation box — an alert box displays only one button which is the OK button. But a Confirmation box displays two buttons namely OK and cancel. 

30. Escape characters — Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands. Place backslash before the characters to make it display. 

31. Cookies — Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need. Example could be User Name details and shopping cart information from the previous visits.

32. Pop() — The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.
Example:  var cloths = ["Shirt", "Pant", "TShirt"]; cloths.pop();//Now cloth becomes Shirt,Pant
 
33. Concept level scope — no. JavaScript does not have concept level scope. The variable declared inside the function has scope inside the function.

34. Disadvantage of innerHTML — Content is replaced everywhere. We cannot use like “appending to innerHTML” Even if you use +=like “innerHTML = innerHTML + ‘html’” still the old content is replaced by html.
 
The entire innerHTML content is re-parsed and build into elements, therefore its much slower
The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it.

34. Break vs Continue — Break statement exits from the current loop.
        Continue statement continues with next statement of the loop.

35. Datatypes — Primitive: Number and Boolean.
  Reference: Strings, Dates etc.

36. typeOf operator — To return a string description of the type of a variable, we normally use typeOf operator.

37. Exception handling — Try... Catch---finally is used to handle exceptions in the JavaScript.

38. Print text in screen — document.write(“Welcome”) is used to print the text – Welcome in the screen.

39. Blur — Blur function is used to remove the focus from the specified object.

40. Errors — Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.
          Run time errors: Errors that come due to misuse of the command inside the HTML language. 
                       Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation.

41. Push() — The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments.

42. Unshift() — Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.

43. Strict mode — Strict Mode adds certain compulsions to JavaScript. Under the strict mode, JavaScript shows errors for a piece of codes, which did not show an error before, but might be problematic and potentially unsafe. Strict mode also solves some mistakes that         hamper the JavaScript engines to work efficiently. 
Strict mode can be enabled by adding the string literal “use strict” above the file.

44. Checkbox — The status can be acquired as follows - 
alert(document.getElementById('checkbox1').checked); 
If the CheckBox will be checked, this alert will return TRUE.

45. window.onload vs onDocumentReady — The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed. 
onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code.

46. Append value to an array — arr[arr.length] = value;
Array.push(“someValue”);

47. Loops


48. Anonymous function — A function that is declared without any named identifier is known as an anonymous function. In general, an anonymous function is inaccessible after its declaration.

49. .call()  vs  .apply()  — The function .call() and .apply() are very similar in their usage except a little difference. 
.call( ) is used when the number of the function’s arguments are known to the programmer, as they have to be mentioned as arguments in the call statement. 
On the other hand, .apply( ) is used when the number is not known. The function .apply() expects the argument to be an array. 
The basic difference between .call() and .apply() is in the way arguments are passed to the function.
The only difference is:
call() takes any function arguments separately.
apply() takes any function arguments as an array.

50. Event bubbling and Event capturing — JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.  // When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

The event propagation can be stopped in any listener by invoking the stopPropagation method of the event object.
A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.
But any handler may decide that the event has been fully processed and stop the bubbling.
The method for it is event.stopPropagation().
For instance, here body.onclick doesn’t work if you click on <button>:

<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>



event.stopImmediatePropagation()
If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.
In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.
event.target
A handler on a parent element can always get the details about where it actually happened. The most deeply nested element that caused the event is called a target element, accessible as event.target.

Capturing
There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.
The standard DOM Events describes 3 phases of event propagation:
•	Capturing phase – the event goes down to the element.
•	Target phase – the event reached the target element.
•	Bubbling phase – the event bubbles up from the element.
That is: for a click on <td> the event first goes through the ancestors chain down to the element (capturing), then it reaches the target, and then it goes up (bubbles), calling handlers on its way.
Before we only talked about bubbling, because the capturing phase is rarely used. Normally it is invisible to us.
Handlers added using on<event>-property or using HTML attributes or using addEventListener(event, handler) don’t know anything about capturing, they only run on the 2nd and 3rd phases.
To catch an event on the capturing phase, we need to set the handler capture option to true:
elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)

There are two possible values of the capture option:
•	If it’s false (default), then the handler is set on the bubbling phase.
•	If it’s true, then the handler is set on the capturing phase.

Example: 
<form>FORM<div>DIV<p>P</p></div></form>

for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }

51. Case sensitive — Yes

52. Boolean operators — The ‘And’ Operator (&&), ‘Or’ Operator (||) and the ‘Not’ Operator (!) can be used in JavaScript.

53. DOM utilization — DOM stands for Document Object Model and is responsible for how various objects in a document interact with each other. DOM is required for developing web pages, which includes objects like paragraph, links, etc. These objects can be operated to include actions like add or delete. DOM is also required to add extra capabilities to a web page. On top of that, the use of API gives an advantage over other existing models.

54. Event handlers — Events are the actions that result from activities, such as clicking a link or filling a form, by the user. An event handler is required to manage proper execution of all these events. Event handlers are an extra attribute of the object. This attribute 
  includes event’s name and the action taken if the event takes place.

55. Deferred scripts — By default, the parsing of the HTML code, during page loading, is paused until the script has not stopped executing. It means, if the server is slow or the script is particularly heavy, then the webpage is displayed with a delay. While using Deferred, 
    scripts delays execution of the script till the time HTML parser is running. This reduces the loading time of web pages and they get displayed faster.
56. Functional components — First-class functions: Functions in JavaScript are utilized as first class objects. This usually means that these functions can be passed as arguments to other functions, returned as values from other functions, assigned to variables or can       also be stored in data structures. 
      Nested functions: The functions, which are defined inside other functions, are called Nested functions. They are called ‘everytime’ the main function is invoked.

57. Screen objects — Screen objects are used to read the information from the client’s screen. The properties of screen objects are - 
  AvalHeight: Gives the height of client’s screen
  AvailWidth: Gives the width of client’s screen.
  ColorDepth: Gives the bit depth of images on the client’s screen
  Height: Gives the total height of the client’s screen, including the taskbar Width: Gives the total width of the client’s screen, including the taskbar.
58. Unshift() — This method is functional at the starting of the array, unlike the push(). It adds the desired number of elements to the top of an array.

59. escape()  vs  unescape  — escape () function is responsible for coding a string so as to make the transfer of the information from one computer to the other, across a network.
unescape() function is very important as it decodes the coded string.

60. decodeURL()  vs  encodeURL  — EncodeURl() is used to convert URL into their hex coding. And DecodeURI() is used to convert the encoded URL back to normal.


61. Javascript  vs  ECMAScript  — ECMAScript is nothing but another name for JavaScript. Precisely, ECMAScript is the formal name of JavaScript, when XML elements have to be accessed.

62. Namespacing — Namespacing is used for grouping the desired functions, variables etc. under a unique name. It is a name that has been attached to the desired functions, objects and properties. This improves modularity in the coding and enables code reuse. 

63. Arrays — An array is a special variable, which can hold more than one value at a time. Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
We use indexOf to find the index of an value. If the value is not available in array then indexOf returns -1.

Unshift adds an element at begging of an array.
Pop removes last element from array.
Ex: var cars = ["Saab", "Volvo", "BMW"];

64. Arrays vs Objects — In JavaScript, arrays use numbered indexes (Order matters).  
    In JavaScript, objects use named indexes.
Object has key value pairs and order is not a matter.
Both can hold different type of data.
Object can hold array type, function also.

65. If an array with name as "names" contain three elements, then how will you print the third element of this array?
Print third array element document.write(names[2]);
Note:- Array index starts with 0.

66. How do you submit a form using JavaScript — Use document.forms[0].submit();

67. How do you change the style/class on any element using JavaScript? 
      document.getElementById(“myText”).style.fontSize = “10";
      document.getElementById(“myText”).className = “anyclass”;

68. Hoisting — Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
  In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
                 When you declare a variable inside of a function, the variable declaration is “hoisted” to the top of the function. That is, the runtime will move your variable declaration to the beginning of the function, in spite of where you put the var statement.
  Because of this hoisting, it is recommended that you put variable declarations at the top of the function. It will happen for you anyways, so you may as well do this explicitly in order to prevent confusion about the code’s execution.

69. Variable scoping — the current, ES5 version of JavaScript only has two scopes for variables: function scope and global scope.
By using a var statement inside of a function, you are using a function-scoped variable, as is show in the example above. 
In a browser, if you omit the var statement, or if you use var outside of any function, you will attach to the current global scope.
A variable’s scope is the context in which the variable exists. The scope specifies from where you can access a variable and whether you have access to the variable in that context. Variables have either a local scope or a global scope.
 
JavaScript has two scopes: global and local. A variable that is declared outside a function definition is a global variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is local. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function. JavaScript does not support block scope (in which a set of braces {. . .} defines a new scope), except in the special case of block-scoped variables.
https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx



70. ES6 Features — ES6 introduces language support for classes (class keyword), constructors (constructor keyword), and the extend keyword for inheritance.

Functions: Arrow functions provide two features: lexical scoping of this keyword and less ceremony when defining an anonymous function. Without arrow functions, every function defines a this value.
Modules: 
Block Scoping: Scoping in JavaScript is confusing for developers with a C/C#/Java background.  Hoisting can add to that confusion.  In ES5, variables are either globally or locally function scoped.  The lack of block scoping has caused confusion in     ES5, and resulted in some interesting patterns to achieve block scope.  In ES6, you can use the new let keyword to achieve block scoping.
Promises: Promises handles the results and errors from asynchronous operations.  You can accomplish the same thing with callbacks, but promises provide improved readability via method chaining and succinct error handling.  Promises are currently used in many JavaScript libraries.  RSVP.js, Q.js, and the $q service in Angular are just a few of many examples.
FYI:  http://www.wintellect.com/devcenter/nstieglitz/5-great-features-in-es6-harmony






71. Modularity — Modules have the potential to radically change how many JavaScript applications are structured and standardize a best practice in some already modular applications.  Modules in ES6 provide a way to load and manage dependencies via the new import and export keywords.  There are a few good solutions in ES5, namely 3rd party libraries like CommonJS or node modules.  Modularity is such an important concept for large applications, that it makes sense to include it as a core language feature.  
The goals are
⁃
Obviate need for globals
⁃
Orthogonality from existing features
⁃
Smooth refactoring from global code to modular code
⁃
Smooth interoperability with existing JS module systems like AMD, CommonJS, and Node.js
⁃
Fast compilation
⁃
Simplicity and usability
⁃
Standardized protocol for sharing libraries
⁃
Compatibility with browser and non-browser environments
⁃
Easy asynchronous external loading


72. Debugging — Chrome Dev Tool, Firefox Firebug, Safari Firebug, In IE8, you can use the built-in Developer Tools.
Ways to do: console.log(); , Setting break points, debugger keyword in JS code.
Searching for errors in programming code is called code debugging. Debugging is not easy. But fortunately, all modern browsers have a built-in debugger.
With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.


73. HTTP Methods — 

Method	Description
GET	
POST	
HEAD	Same as GET but returns only HTTP headers and no document body
PUT	Uploads a representation of the specified URI
DELETE	Deletes the specified resource
OPTIONS	Returns the HTTP methods that the server supports
CONNECT	Converts the request connection to a transparent TCP/IP tunnel





GET METHOD	POST METHOD
Requests data from a specified resource	Submits data to be processed to a specified resource
GET requests can be cached	POST requests are never cached
GET requests remain in the browser history.

Parameters remain in browser history because they are part of the URL.	POST requests do not remain in the browser history
Parameters are not saved in browser history.
GET requests can be bookmarked	POST requests cannot be bookmarked
GET requests should never be used when dealing with sensitive data	
GET requests have length restrictions.
Yes, since form data is in the URL and URL length is restricted. A safe URL length limit is often 2048 characters but varies by browser and web server.	POST requests have no restrictions on data length
GET requests should be used only to retrieve data	
Only ASCII characters allowed	No restrictions. Binary data is also allowed
	
GET is less secure compared to POST because data sent is part of the URL

Never use GET when sending passwords or other sensitive information!	POST is a little safer than GET because the parameters are not stored in browser history or in web server logs
Data is visible to everyone in the URL	Data is not displayed in the URL
	
BACK button/Reload
Harmless can send but the parameter data is limited to what we can stuff into the request line (URL). Safest to use less than 2K of parameters, some servers handle up to 64K	BACK button/Reload
Data will be re-submitted (the browser should alert the user that the data are about to be re-submitted)

Can send parameters, including uploading files, to the server.
Security:
GET is less secure compared to POST because data sent is part of the URL. So it's saved in browser history and server logs in plaintext.	Security:
POST is a little safer than GET because the parameters are not stored in browser history or in web server logs.
Visibility:
GET method is visible to everyone (it will be displayed in the browser's address bar) and has limits on the amount of information to send.	Visibility:
POST method variables are not displayed in the URL.
GET method should not be used when sending passwords or other sensitive information.	POST method used when sending passwords or other sensitive information.

Get vs POST
GET is simpler and faster than POST, and can be used in most cases.
However, always use POST requests when:
•
A cached file is not an option (update a file or database on the server).
•
Sending a large amount of data to the server (POST has no size limitations).
•
Sending user input (which can contain unknown characters), POST is more robust and secure than GET.


To make an AJAX request follow the below steps:
To avoid this, add a unique ID to the URL and If you want to send information with the GET method, add the information to the URL.
Ex:
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
xhttp.send();

xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");


Method	Description
open(method, url, async)	Specifies the type of request

method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)
send()	Sends the request to the server (used for GET)
send(string)	Sends the request to the server (used for POST)
setRequestHeader(header, value)	Adds HTTP headers to the request

header: specifies the header name
value: specifies the header value






74. Asynchronous vs Synchronous — 
Asynchronous - True or False?
AJAX stands for Asynchronous JavaScript and XML, and for the XMLHttpRequest object to behave as AJAX, the async parameter of the open() method has to be set to true:
xhttp.open("GET", "ajax_test.asp", true);
Sending asynchronous requests is a huge improvement for web developers. Many of the tasks performed on the server are very time consuming. Before AJAX, this operation could cause the application to hang or stop.
With AJAX, the JavaScript does not have to wait for the server response, but can instead:
⁃
execute other scripts while waiting for server response
⁃
deal with the response when the response ready

Async=true
When using async=true, specify a function to execute when the response is ready in the onreadystatechange event:
Example
  var xhttp = new XMLHttpRequest( )
  xhttp.onreadystatechange = function() {
 
    if (xhttp.readyState == 4 && xhttp.status == 200) {
 
      document.getElementById("demo").innerHTML = xhttp.responseText;
 
   }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();

Async=false
To use async=false, change the third parameter in the open() method to false:
xhttp.open("GET", "ajax_info.txt", false);
Using async=false is not recommended, but for a few small requests this can be ok.
Remember that the JavaScript will NOT continue to execute, until the server response is ready. If the server is busy or slow, the application will hang or stop.
Note: When you use async=false, do NOT write an onreadystatechange function - just put the code after the send() statement:
Example
xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;







75. Status codes — 

CONSTANT	CODE	MESSAGE
CREATED	201	Created
ACCEPTED	202	Accepted
NO_CONTENT	204	No content
BAD_GATEWAY	502	Bad gateway
BAD_REQUEST	400	Bad request
CONTINUE	100	Continue
FORBIDDEN	403	Forbidden
GATEWAY_TIMEOUT	504	Gateway timeout
HTTP_VERSION_NOT_SUPPORTED	505	HTTP Version not supported
INTERNAL_SERVER_ERROR	500	Internal server error
NOT_FOUND	404	Not found



76. Inheritance — Javascript follows Prototype-Based inheritance. That means that there are no classes. Instead, an object inherits from another object
http://javascript.info/tutorial/inheritance

77. Functions — 

78. AJAX: AJAX is about updating parts of a web page, without reloading the whole page.
The XMLHttpRequest object is used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

79. Asynchronous — It does not have to wait for the Server response. Instead of that, It executes other scripts while waiting for server response and it deals with the response when it is ready.

To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

send()  — Sends the request to the server (used for GET)
send(string)  — Sends the request to the server (used for POST)

xhttp.open("GET", "ajax_test.asp", true);
Here:    Method : GET
UrL : ajax_test.asp
Async : true




80. Namespace
Namespacing is used for grouping the desired functions, variables etc. under a unique name. It is a name that has been attached to the desired functions, objects and properties. This improves modularity in the coding and enables code reuse. 

81. Constructor - constructor([arguments]) { ... }
Constructor is a special method for creating and initializing an object created within a class.
•	There can be only one constructor method in a class. If we create more than one constructor methods in a class will throw a SyntaxError error.
•	It usually has the same name as the class containing it.
•	Constructor can use super keyword to call the constructor of a parent class.
•	If we don’t specify a Constructor method, default constructor is used -  constructor() {}


82. Call back functions — A function that is passed to another function as a parameter and the callback function is called/executed inside another function.
In other words -  In Javascript, Functions are Objects. Because of this, functions can take functions as arguments, and can be returned by another functions. Any function that is passed as an argument is called a callback function.

Scenario: When you make requests to an API, you have to wait for the response before you can act on that response. This is a wonderful example of a real-world callback.




var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachName, index){
    
  console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick 
});
Again, note the way we pass an anonymous function (a function without a name) to the forEach method as a parameter. Here we have passed anonymous functions as a parameter to other functions or methods.



Example:
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);


Ex2:
Function startPlaying(game, callback) {
    Console.log(` Started playing ${game} today. `);
    Callback();
}
Function finishPlaying() {
    Console.log(` Finished playing ${game} today. `);
}

startPlaying(‘Football’, finishPlaying);




83. Design patterns — A design pattern is a reusable solution to a commonly occurring problem in software design.

Design patterns are usually categorized into three major groups.
Creational Design Patterns: These patterns are for handling object creational mechanisms. A creational design pattern basically solves a problem by controlling the creation process of an object.
Ex: Constructor Pattern, Factory Pattern, Prototype Pattern, and Singleton Pattern.

Structural Design Patterns: These patterns are concerned with class and object composition. They help structure or restructure one or more parts without affecting the entire system. In other words, they help obtain new functionalities without tampering with the existing ones.
Ex: Adapter Pattern, Composite Pattern, Decorator Pattern, Façade Pattern, Flyweight Pattern, and Proxy Pattern.

Behavioral Design Patterns: These patterns are concerned with improving communication between dissimilar objects.
Ex: Chain of Responsibility Pattern, Command Pattern, Iterator Pattern, Mediator Pattern, Observer Pattern, State Pattern, Strategy Pattern, and Template Pattern.

Key Points:
Context: Where/under what circumstances is the pattern used?
Problem: What are we trying to solve?
Solution: How does using this pattern solve our proposed problem?
Implementation: What does the implementation look like?
Refer:  https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15 



Types of Design Patterns are:  Module, Prototype, Observer, Singleton.
Module Design Pattern — JavaScript modules are the most common used design patterns for keeping pieces of code independent of other components. This provides loose coupling to support well-structured code.

Refer: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know 







84. Parameters
Parameters are variables listed as a part of the function definition. 


85. Arguments
Arguments are the values passed to the function when it is invoked.
var parameter1, parameter2, parameter3;

function argCheck( parameter1, parameter2, parameter3 ){
  console.log(parameter1 + parameter2 + parameter3);
}
argCheck(1,2,3,4);  // ignores the last argument.

argCheck(1,5)  // missing arguments will give NaN because by default if a corresponding argument is missing, it is set to undefined





86. Function statement & Function expression
Expression produces a value(out come), where as a statement performs an action.

 

87. AJAX - Server Response

The readyState property holds the status of the XMLHttpRequest.
The onreadystatechange property defines a function to be executed when the readyState changes.
The status property and the statusText property holds the status of the XMLHttpRequest object.

readyState
Holds the status of the XMLHttpRequest. 
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready

status
200: "OK"
403: "Forbidden"
404: "Page not found"
etc...


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}





88. Event looping in Javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40
https://flaviocopes.com/javascript-event-loop/




89.  .call()  vs  .bind()  vs  .apply()
.call()
Let’s say that we have an object called obj. It only has one property called things, which has a value of 3. Totally unrelated to this object, let’s also make a function called addThings.
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};
Notice this.things. Why does the addThings function mention that, when it doesn’t even have things? We need to pass it a context. We can do that with call. If we were to run this code:
console.log( addThings.call(obj, 1,4,6) );  // 14
That’s because the first parameter that call takes, is the context we want “this” to refer to. We passed it obj, which does have the things property. After we pass the context, we can pass the arguments like we usually would. In this case we passed 1, 4, 6. So this line:
return this.things + a + b + c;     would be populated this way:     return 3 + 1 + 4 + 6;



apply() 
Apply is so similar to call that I don’t personally see its value. Pun intended.
The main difference is the way we can pass arguments. We can pass them as an array. Clear the previous code from your mind and let’s start over.
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};
let arr = [1,4,6];
console.log( addThings.apply(obj, arr) );



bind()
This is the easiest and quick method to bind events. But the issue with bind() is that it doesn't work for elements added dynamically that matches the same selector. bind() only attach events to the current elements not future element. Above that it also has performance issues when dealing with a large selection.

let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};
console.log( addThings.bind(obj, 1,4,6) );
We expected the number 14, but that didn’t work. Instead, it returned a function. Bind works by returning a copy of the function, but with a different context. We passed obj as the context, but we didn’t execute it. Let’s try that:
console.log( addThings.bind(obj, 1,4,6)() );
That worked! We can also pass the arguments like this:
console.log( addThings.bind(obj)(1,4,6) );


Example 2:
let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };
function greeting(text) {
   console.log(`${text} ${this.name}`);
}
let helloLeo = greeting.bind(customer1);
let helloNat = greeting.bind(customer2);
helloLeo('Hello'); // Hello Leo
helloNat('Hello'); // Hello Nat
The Bind implementation would be like this:
Function.prototype.bind = function(context) {
    var fn = this;
    return function() {
        fn.apply(context, arguments);
    };
};



Higher-order Functions:  A callback function, also known as a higher-order functions. Functions can take function as argument and returned by another function.


First-class objects: In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be “stored in variables, passed as arguments to functions, created within functions, and returned from functions”



Miscellaneous:
1.	/*
function add(a){
    return function(b){   console.log(a + b);  }
}
add(2)(3);
*/


2.	How to pass unknown number of arguments

function argsSumES5() {
  let s = 0;
  for(let i=0; i<arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}
console.log('sum of 3 arguments: ' + argsSumES5(1,2,3));  // 6

or 

function argsSumES6(...args) {
  let ss = 0;
  for(let i=0; i<args.length; i++) {
    ss += args[i];
  }
  return ss;
}
console.log('sum of 3 arguments: ' + argsSumES6(1,2,3));  // 6







ES6

New Features

Variable declarations with let and const  are not function scoped. It is block scoped.
Variable declarations with var  are function scoped.

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
varTest()

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
letTest()





Blocks and IIFEs (Immediate Invoked Function Expression)
Everything inside a curly braces is a block.
{ 
let a = 10;
const b = 20;
var c = 30;
}
console.log( a + b)  // Reference Error
console.log( c )  // 30


Strings

let fName = "Rajesh";
let lName = "Tammishetty";
const dob = 1989;

function calcAge(year) {
  return 2018 - year;
}

// ES5
console.log(fName + " " + lName + " born in " + dob + " has " + calcAge(dob) + " years old.");

// ES6
console.log(`${fName} ${lName}. He was born in ${dob}. He is ${calcAge(dob)} years old. `)

console.log(lName.startsWith("T"));  // true
console.log(lName.endsWith("Y"));  // false. case sensitive.
console.log(lName.includes("mmishe"));  // true
console.log(lName.repeat(3));  // TammishettyTammishettyTammishetty


Arrow Functions: Shorter functions and behavior of ‘this’ 
Only in a method call  ‘this’ keyword actually points to that object.
In a regular function call  ‘this’ keyword  will always points global object (browser is the window object).

Arrow functions do not have  ‘ this ‘ keyword. It has Lexical this keyword.
Arrow functions share the lexical  ‘ this ‘ keyword of it’s surroundings.  
// We don’t need  ‘self = this’  or  .bind(this)

// //  Arrow Functions
let nflTeamES5 = {
  players: ['Manning', 'Barkley', 'Daniel'],
  teamName: 'NY Giants',
  getDescription: function() {
    // var self = this;  // resolves the issue. 
    return this.players.map(function(player) {
      return `Hello ${player} Welcome to the ${this.teamName} ..!`
    }) // will get 'teamName' undefined error
    //}.bind(this)) // resolves the issue
  }
}
console.log(nflTeamES5.getDescription());

let nflTeamES6 = {
  players: ['Manning', 'Barkley', 'Daniel'],
  teamName: 'NY Giants',
  getDescription: function() {
    return this.players.map((player) => {
      return `Hello ${player} Welcome to the ${this.teamName} ..!`
    })
  }
}
console.log(nflTeamES6.getDescription());




const years = [1990, 1989, 1988, 1982, 1983, 1981, 1984];

// ES5
var ages5 = years.map(function(el5) {
  return 2018 - el5;
})
console.log(ages5);

// ES6
let ages6 = years.map(el6 => 2018 - el6)
let ages6 = years.map((el6) => { return 2018 - el6 })
console.log(ages6);




Enhanced Object Literals
To create an object, we simply make a list of key: value pairs delimited by comma.
Object literals make it easy to quickly create objects with properties.
1.It provides a shorthand syntax for initializing properties from variables.
2.Shorthand for writing Methods
3.Computed Properties and Object Literals

function getLaptopES5(make,year,price) {
  return {
    make: make,
    year: year,
    carPrice: function() {
      return price;
    }
  }
}
console.log(getLaptopES5('Honda', 2008, 32000).carPrice());
  
function getLaptopES6(make,year,price) {
  return {
    make,
    year,
    carPrice() {
      return price;
    }
  }
}
console.log(getLaptopES6('Acura', 2017, 41000).carPrice());



Default Function Parameters
It allows us to set default values for our function parameters if no value is passed or if undefined is passed. 
// ES5
function add(a,b) {  return a + b  }
add() //NaN

function add(a,b) {
  var b = (typeof(b) !== "undefined") ? b : 5;
  return a + b; 
}
add(4,2) //6
add(4) //9

// ES6
function add(a=3, b=5) {  return a + b  }
add(4,2) // 6
add(4) // 9
add() // 8







Spread Operator
The syntax is three dots (…) followed by array or iterable. It expands the array(iterable) into individual elements. So, it can be used to expand the array in places where zero or more elements are expected.

1. Copying an Array:  
Let fruits = [‘apple’, ‘orange’, ‘banana’];
Let newFruits = […fruits];  // Just copied the Array, not the reference.
newFruits.push(‘peach’);
Console.log(fruits);  //  [‘apple’, ‘orange’, ‘banana’];
Console.log(newFruits);  //  [‘apple’, ‘orange’, ‘banana’, ‘peach’];


2. Concatenating an Array:  
Let fruits = [‘apple’, ‘orange’, ‘banana’];
Let drinks = [‘coke’,’pepsi’,’lemon soda’];
Let snacks = […fruits, …drinks];
Console.log(snacks);  // [‘apple’, ‘orange’, ‘banana’, ‘coke’, ’pepsi’,’lemon soda’]



3. Spreading elements together with an individual element:  
Let fruits = [‘apple’, ‘orange’, ‘banana’];
Let newFruits = [‘pineapple’, …fruits];  
Console.log(newFruits);  //  [‘pineapple’, ‘apple’, ‘orange’, ‘banana’];


4. Spreading elements on function calls:  
Let fruits = [‘apple’, ‘orange’, ‘banana’];
Let getFruits = (f1, f2, f3) => {
	Console.log(“Fruits are: ${f1} ${f2} ${f3});
);
getFruits(…fruits);  // Fruits: apple orange banana



5. Spread syntax for object literals:  
Let obj1 = { id: 1002, name: ‘Rajesh’ };
Let obj2 = { age: 30, designation: ‘Principle Developer’ };
Let emp = {…obj1, …obj2};
Console.log(emp)  //  { id: 1002, name: ‘Rajesh’, age: 30, designation: ‘Principle Developer’ }

There is a special array-like object named ‘arguments’  that contains all arguments by their index.
Arrow functions do not have arguments.

// // sum of unknown number of arguments
function sumUnknownArgs() {
  let sumOfArgs = 0;
  for(let i=0; i<arguments.length; i++) {
    sumOfArgs += arguments[i]
  }
  return sumOfArgs;
}
console.log(sumUnknownArgs(...ages));


function addAges(a, b, c, d) {
  return a + b + c + d;
}

var sumAges = addAges(29, 25, 26, 27);
console.log(sumAges);

// ES5
var ages = [20, 30, 25, 35, 45];
var sum5 = addAges.apply(null, ages);
console.log(sum5 + " sum5");

// ES6
const sum6 = addAges(...ages);
console.log(sum6 + " sum6”);




Rest Parameters 
A function can be called with any number of arguments, no matter how it is defined.

Function sumAll(…args) {
	Let sum = 0;
	For(let arg of args) {
		Sum += arg;
	}
	Return sum;
}
sumAll(1,2,3) // 6
sumAll(10,4,20,6,20,9,30,2) // 101





Destructuring 
Destructuring simply implies breaking down a complex structure(arrays, objects) into simpler parts. 

 
// ES5
var Rajesh = ["Tammishetty", 29];

var rName = Rajesh[0];
var rAge = Rajesh[1];
console.log (rName, rAge);


// ES6
const [name, age] = ["Tammishetty", 29];
console.log (name, age);

const obj = {
  firstName: "Rajesh kumar",
  lastName: "Tammishetty"
}

const {firstName, lastName} = obj;
console.log (firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log (a, b);  // Rajesh kumar Tammishetty





JavaScript Class   
In JavaScript class is a special function and just as you define function declarations and function expressions.
Note: Function declarations are hoisted but not Class declarations. 

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown




Arrays   
New array methods are:  from,  of,  find,  findIndex,  fill

const boxes = document.querySelectorAll('.box');

// ES5
Array.prototype.slice.call(boxes).forEach(function(cur) {
  cur.style.color = "white";
})

// ES6
Array.from(boxes).forEach(cur => {
  cur.style.color = "purple";
})




























How to identify the user Device
Using navigator.userAgent

 Default Parameters
Maps,  Classes,  Sub classes.
etc…







Important points:
•	typeof  null === object;
typeof  object === object;










Others topics

1. What is the difference b/w dependencies and devDependencies in package.json?
devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.
devDependencies:  @angular/cli,  tslint,  ts-loader,  webpack,  sass-loader,  Jasmine,  Protractor
dependencies:  @angular/compiler-cli,  @angular/common,  @angular/router,  zone.js,  core-js




2. There are three main differences between rest parameters and the arguments object:

•	rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function;
•	the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
•	the arguments object has additional functionality specific to itself (like the callee property).




3. Type Coercion
Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Whenever possibile in your code use always the strict comparison operator = = = instead of = =
Note: In JavaScript automagically converts any of the two operands to a string if at least one of them is… a string!

Examples:
True + false = 1;   false + false = 0;
12 / “6” = 2;
"number" + 15 + 3 = number153
15 + 3 + "number" = 18number;
[1] > null = true;
"foo" + + "bar" = fooNaN
'true' == true  // false
false === 'false'  // false
null == ' '  // false
!!"false" == !!"true"  // true
[‘x’] == ‘x’  // true
[] + null + 1 = null1
[1,2,3] == [1,2,3]  // false
{}+[]+{}+[1] = 0[object Object]1;
!+[]+[]+![] = truefalse;
new Date(0) - 0 = 0;
new Date(0) + 0 = Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)0;
'hello' + [89, 150.156, 'mike'] = hello89,150.156,mike;







IIFE (Immediately Invoked Function Expression):
1. An IIFE is a JavaScript function that runs as soon as it is defined.
2. It is also known as "Self-Executing Anonymous Function" and contains two major parts.
3. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ( ). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
4. The second part creates the immediately executing function expression ( ) through which the JavaScript engine will directly interpret the function.
5. An Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it.
6. IIFE functions are anonymous functions encapsulated in parentheses
7. IIFE functions are called with the parameters immediately after the last parentheses enclosing the anonymous function
8. IIFE functions are immediately invoked so cannot be called later
9. IIFE functions can take in zero or any number of arguments
(function addTogetheIIFEr() {
  var x1 = 20;
  var y1 = 20;
  var answer1 = x1 + y1;
  console.log('IIFE function: ' + answer1);
})();

(function (x) { return x * 2; } ) (2);




JavaScript Anonymous Functions: function without a name.
1.There are three main anonymous function declarations you will run into: Immediately Invoked Function Expression (IIFE), Assignment to Variable, and Anonymous Functions used as a parameter passed to another function




Callback functions
‘this’ keyword
Closure
Functions
Prototype based programming
Prototypal inheritance
OOJavascript
RegEx
Design patterns
modern templating language best practices
Browserify
DOM API
Junkins, enum, eval, 
Virtual DOM
Multiple API’s:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Web Sockets: Continues streaming data
Which form we get data from API
How to parse data:   var myObject = JSON.parse(myjsonstring);
Palindrome javascript: using for loop, using split method.
tree structure in javascript classes / javascript tree data structure:  https://stackoverflow.com/questions/12036966/generic-tree-implementation-in-javascript 
JSON.stringify, parse
Event looping methods, bind( )
Package.json  vs  package-lock.json
Pseudo elements, pseudo selectors
addEvenyListner,
anonymous functions
IIFE


