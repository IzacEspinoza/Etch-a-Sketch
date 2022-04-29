/***Important variables(DOM references) */
const container = document.getElementById("container");
const button  = document.querySelector('#set-grid');
/****************************************/

/************--Main--**************/



//This is what lets the user actually 'draw'(currently by HOVER)
const divs = document.querySelectorAll('.grid-item');
divs.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'blueviolet';//change this later to be a color chosen by user
    })//end event listener
})//end foreach

//new grid button
button.addEventListener('click', function(){ 
  //prompt user for new grid size
  let newGrid = prompt('How many squares?');
  //clear current grid?
  //clear();
  //call makeRows with this value
  makeRows(newGrid);
});

//Default grid(16x16)
makeRows(16);
/********************************/

/*Functions*************/
//function makes the grid pretty much, with specified dimensions
function makeRows(/*rows, cols*/squares) {
    /* essentially, 
     * grabs the container, 
     *makes a new css rule for specified prop, 
     *sets it to the parameter values
    */
  container.style.setProperty('--grid-rows', /*rows*/squares);
  container.style.setProperty('--grid-cols', /*cols*/squares);

  //loop, pretty much creates the grid,
  //making a div until the area we want for the grid is reached
  for (c = 0; c < (/*rows*/ squares*squares /*cols*/); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);//sets some text inside, optional
    container.appendChild(cell).className = "grid-item";//appends to container, and gives it a class name
  };
};//end function

//clear the grid
function clear(){
  /* simply clears the current grid*/
  //remove the grid-items styling, so there is no color in the boxes
  //divs.style.backgroundColor = 'white';
  
}//end function

/******************************/

/* NOTE ON CLEARING GRID WHEN NEW ONE IS MADE */
/*
function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}
*/
/********************************** */

