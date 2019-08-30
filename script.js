console.log(document.getElementById("paragraph"));

let myLinks = document.getElementsByClassName('links');
console.log(myLinks[0]);
console.log(myLinks[1]);

let myParagraphs = document.getElementsByTagName('p');
console.log(myParagraphs);

console.log(myLinks[0].getAttribute('href'));

myLinks[0].setAttribute('href','www.google.com');

console.log(myLinks[0].getAttribute('href'));

myLinks[0].removeAttribute('href');

console.log(myLinks[0].getAttribute('href'));

/* DOM object creation */
let newHeader = document.createElement('h2');
//newHeader.innerHTML = "Hello, I'm a header!"
let text = document.createTextNode("Hello, I'm a new header!!!");
newHeader.appendChild(text);
console.log(newHeader);

let container = document.getElementById('container');
container.appendChild(newHeader);

let body = document.getElementsByTagName('body');

let newparagraph = document.createElement('p');
newparagraph.innerHTML = "I'm a new paragraph!";
body[0].insertBefore(newparagraph, myLinks[1]);

container.removeChild(newHeader);

newparagraph.innerHTML = "";

container.innerHTML = "";

let button = document.getElementById('myButton');
button.onclick = function() {
    console.log('Thank you for clicking!')
}

console.log("----------------------------------")
console.log(document.querySelector('myButton'));

let list = document.getElementsByClassName('stefan-list');
body[0].removeChild(list[0]);

let counter = 0;
button.onclick = function() {
    counter += 1;
    let newLiTag = document.createElement('li');
    let newLiTagText = document.createTextNode(`item ${counter}`);
    newLiTag.appendChild(newLiTagText);
    document.getElementById('heiko-list').appendChild(newLiTag);
}

let userInput = document.getElementsByTagName('input');
let submitButton = document.getElementById('submit');
submitButton.onclick = function() {
    console.log(userInput[0].value);
}
