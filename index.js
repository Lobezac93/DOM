// import "./styles.css";

// const codeEl = document.querySelector("code");
// console.log(codeEl);

// const app = document.querySelector("#app");
// console.log(app);

// const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

// // creating a two div elements nested with two ol and li
// const ol = document.body
//   .appendChild(document.createElement("div"))
//   .appendChild(document.createElement("ol"));
// const ul = document.body
//   .appendChild(document.createElement("div"))
//   .appendChild(document.createElement("ul"));

// for (let i = 0; i < 3; i++) {
//   ol.appendChild(document.createElement("li"));
//   ul.appendChild(document.createElement("li"));
// }


// div1 = document.createElement('div');
// ol = div1.appendChild(li)

// function createDiv1 (){
// div2= document.createElement(div)
// li = div2.appendChild('ul')

// for(l of li){
//     ol.appendChild(document.createElement('li'))
// }
// }



// const text = document.getElementById('text');
// text.style.textAlign = 'center';

// const ol = document.body
//   .appendChild(document.createElement("div"))
//   .appendChild(document.createElement("ol"));
// const ul = document.body
//   .appendChild(document.createElement("div"))
//   .appendChild(document.createElement("ul"));

// for (let i = 0; i < 3; i++) {
//   ol.appendChild(document.createElement("li"));
//   ul.appendChild(document.createElement("li"));
// }




const insert = document.body;

// Create the anchor element
const anchor = document.createElement('a');

// Set the attributes for the anchor
anchor.href = 'https://example.com'; // Set the URL for the link
anchor.textContent = 'Click here to visit Example.com'; // Set the text for the link

// Append the anchor to the body
insert.appendChild(anchor);

anchor.update('href')
