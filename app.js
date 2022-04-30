//DEFAULT grid size
const DEFAULT_GRID = 16;



//reference our container in our html
const container = document.getElementById("container");

//create the default grid(16x16)
makeRows(DEFAULT_GRID);

//make button, 
//when we click, prompt(set dimensions of grid)
//call makeRows(*with values entered)
//reference our button
const button  = document.querySelector('#set-grid');
//add an event listener to this button, so 
button.addEventListener('click', function(){ 

   //prompt user for new grid size
   let newSize = prompt("What size grid would you like?(enter one number)");
   //clear current grid
   clearGrid();
   //call makeRows with this value
   //makeRows(newSize);
   

});

//clear grid
// function that clears the grid
function clearGrid(){
 //remove the painting
 let allCells = document.querySelectorAll('.grid-item').forEach(cell => {
  cell.style.backgroundColor = "white";
  
 })
};

  

//add event listener to the grid-items,
//so when we hover over the grid-item, the background color changes(drawing)
const divs = document.querySelectorAll('.grid-item');
divs.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'blueviolet';//change this later to be a color chosen by user
    })//end event listener
})//end foreach

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



