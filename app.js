/* Metodos para seleccionar los elementos del DOM:
document.getElementById() // nodo del tipo que conincida con el id indicado
document.getElementsByTagName() // coleccion de elementos html
document.getElementsByClassName() // colección de lementos html
document.querySelector() // primer elemento que cumpla la condicion
document.querySelectorAll() // todos los elementos que cumplan la condicion
*/

var title = document.querySelector("#title")
console.log(title);
console.log(title.firstChild);

var navbar = document.querySelector("#navbar")
console.log(navbar);

var item = document.querySelector(".item");
console.log(item);

var listItem = document.querySelectorAll(".item");
console.log(listItem);

/*
var title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);

var linksList = document.getElementsByTagName("a");
console.log(linksList);
console.log(linksList[0]);
console.log(linksList[0].firstChild);

var itemslist = document.getElementsByClassName("item");
console.log(itemslist);
console.log(itemslist[4]);
console.log(itemslist[4].firstElementChild);
console.log(itemslist[4].firstElementChild.firstChild);

*/