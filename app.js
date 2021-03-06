//DEFAULT grid size
const DEFAULT_GRID = 16;
//container div
const container = document.getElementById("container");
//reset grid button
const reset  = document.querySelector('#set-grid');
//clear grid button
const clear = document.querySelector('#erase');


//create the default grid(16x16)
makeRows(DEFAULT_GRID);

//on click, clears grid and makes new one based on users input
reset.addEventListener('click', function(){ 
   let newSize = prompt("What size grid would you like?(enter one number)");
   clearGrid();
   //call makeRows with this value
   makeRows(newSize);
   //after clear, allow drawing again
  const divs = document.querySelectorAll('.grid-item');
  divs.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'blueviolet';//change this later to be a color chosen by user
    })//end mouseover
})//end forEach
});

//on click, clears current grid 
clear.addEventListener('click', function(){
  //just get rid of the colors, keep the current grid
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(box => {
    box.style.backgroundColor = 'white';
  })//end for each
});//end event

//clear the current grid
function clearGrid(){
 //clears grid by deleting all the div cells made from makeRows()
document.querySelectorAll('.grid-item').forEach((e) => e.parentNode.removeChild(e));
};

//this is what allows the user to 'draw'
const divs = document.querySelectorAll('.grid-item');
divs.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'blueviolet';//change this later to be a color chosen by user
    })//end mouseover
})//end forEach

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
};//end function



