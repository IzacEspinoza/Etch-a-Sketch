//DEFAULT grid size
const DEFAULT_GRID = 16;
//container div
const container = document.getElementById("container");
//New sketch button
const button  = document.querySelector('#set-grid');

//create the default grid(16x16)
let currentGrid = makeRows(DEFAULT_GRID);

//this is what allows the user to 'draw'
const divs = document.querySelectorAll('.grid-item');
divs.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'blueviolet';//change this later to be a color chosen by user
    })//end mouseover
})//end forEach

//on click, clears grid and makes new one based on users input
button.addEventListener('click', function(){ 
   let newSize = prompt("What size grid would you like?(enter one number)");
   clearGrid();
   //call makeRows with users value
   makeRows(newSize);
   //after clear, allow drawing again
  const divs = document.querySelectorAll('.grid-item');
  divs.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'blueviolet';//change this later to be a color chosen by user
    })//end mouseover
})//end forEach
});//end buttonClick event

//clear the current grid
function clearGrid(){
//clears grid by deleting all the div cells made from makeRows()
document.querySelectorAll('.grid-item').forEach((e) => e.parentNode.removeChild(e));
};//end clearGrid()

//Make grid with users input for dimensions
function makeRows(squares) {

  //get the containers styling, make a new css rule and set it to value
  container.style.setProperty('--grid-rows', /*rows*/squares);
  container.style.setProperty('--grid-cols', /*cols*/squares);
  //making a div until the area we want for the grid is reached
  for (c = 0; c < (/*rows*/ squares*squares /*cols*/); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);//sets some text inside, optional
    container.appendChild(cell).className = "grid-item";//appends to container, and gives it a class name
  };//end for loop
};//end makeRows()



