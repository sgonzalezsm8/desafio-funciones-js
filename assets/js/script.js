/*2.2 */
let element_div = document.querySelector("#ele1");

if (element_div) {
  element_div.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "yellow";
  });
}

/*2.3 */
function pintar(id, color = "green") {
  id.style.backgroundColor = color;
}

let text1 = document.querySelector("#text1");

if (text1) {
  text1.addEventListener("click", () => pintar(text1, "yellow"));
}

let div_blue = document.querySelector("#div1");
let div_red = document.querySelector("#div2");
let div_green = document.querySelector("#div3");
let div_yellow = document.querySelector("#div4");

if (div_blue || div_red || div_green || div_yellow) {
  div_blue.addEventListener("click", () => pintar(div1, "black"));
  div_red.addEventListener("click", () => pintar(div2, "black"));
  div_green.addEventListener("click", () => pintar(div3, "black"));
  div_yellow.addEventListener("click", () => pintar(div4, "black"));
}

let globalColor = '';
document.addEventListener('keydown', (event) =>{
    const key = event.key.toLowerCase();

    switch(key){
        case 'a':
            globalColor = 'pink';
            document.getElementById('key').style.backgroundColor = globalColor;
            break;
        case 's':
            globalColor = 'orange';
            document.getElementById('key').style.backgroundColor = globalColor;    
            break;
        case 'd':
            globalColor = 'lightblue';
            document.getElementById('key').style.backgroundColor = globalColor;    
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':    
            createNewDiv('gray');
            break;
        case 'e':    
            createNewDiv('brown');
            break;    
    }
});

function createNewDiv(color){
    const newDiv = document.createElement('div');
    newDiv.className = 'dynamic-div';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}
