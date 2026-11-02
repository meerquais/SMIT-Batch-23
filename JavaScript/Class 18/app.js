console.log("JavaScript Connected!");



// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// console.log(document.children[0].children[1].children[0]);

// var paras = document.getElementsByTagName("p");

// console.log(paras);


// for (var i = 0; i < paras.length; i++) {
//     console.log(paras[i]);

// }



// var ny = document.getElementById("ny").getElementsByTagName("p");

// var paras = ny.children

// console.log(ny);
// console.log(paras[0]);
// console.log(paras[1]);


var para = document.getElementById("para1");

var para2 = para.nextElementSibling
// var para2 = para.nextSibling


para2.innerHTML = "This is Paragraph two which was edited by DOM maniplution"

console.log(para2);


// console.log(para.parentNode.parentNode);
