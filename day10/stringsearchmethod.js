document.getElementById("demo").innerHTML= "Azhar" ;
let str = "Apple,Banana,Kiwi,Banana";
const bananaIndex = str.lastIndexOf("Banana", 15);
console.log("Position", bananaIndex);
const newstring=str.substring(bananaIndex);
console.log("New String after slice", newstring);
const searchIndex=str.search("Banana");
console.log("Search Method Index", searchIndex)
let text2 = "the rain in Spain stays mainly in the plain";
const matchReturnValue=text2.match(/ain/g);
console.log("returned value", matchReturnValue);
let text = "Hello World , Welcome to the universe.";
const includeReturnValue=text.includes("world",12);
console.log("includeReturnValue", includeReturnValue);

var a ="Azhar";
var result=a.slice(-2,5);
console.log(result);