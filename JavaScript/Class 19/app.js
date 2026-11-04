console.log("JavaScript Connected!");



// var div = document

// console.log(div.childNodes[1].childNodes[2].childNodes[3]);

// console.log(div.children[0].children[1].children[1]);


// var div = document.getElementById("container");

// console.log(document.nodeType);
// console.log(div.nodeType);
// console.log(div.nodeName);

// console.log(document.childNodes[1].childNodes[1].nodeName);



// var list = document.getElementById("list");

// console.log(list.getElementsByTagName("li").length);




// for (var i = 0; i < list.children.length; i++) {


//     if (list.children[i].innerHTML === "") {
//         list.children[i].innerHTML = "Out of Stocks!"
//     }
// }



var div = document.getElementById("container");

// div.setAttribute("class", "box");
// div.setAttribute("class", "box");

// console.log(div.hasAttribute("id"));
// console.log(div.getAttribute("id"));

// div.getElementsByTagName("p")[1].setAttribute("id", "para2")
// console.log(div.getElementsByTagName("p")[1]);

// var para2 = document.getElementById("para2");
// console.log(para2);
// console.log(div.attributes[2]);



// CRUD ======> Create Read Update Delete



var container = document.getElementById("container");

var h1 = document.createElement("h1");
var h1Content = h1.innerText = "Hello Class!"
h1.setAttribute("id", "classHeading")
console.log(h1);
console.log(h1Content);

container.appendChild(h1);


var box = document.getElementById("box");
var child = box.children[0]

box.removeChild(child)
console.log(box);


