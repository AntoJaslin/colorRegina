/********************************************_________THE COLOR GAME___________*********************************************/

var nos=6; // Number of square boxes
var parent=document.getElementById("boxes"); //Get the parent div to append the dynamically created child divs
var box; //Variable to store the dynamic children
var boxes=[]; //Array to store the children 
var tclr=document.getElementById("tclr");  // target color    
var clrs=randomColor(6); // colors array - to generate colors it calls the function
var pclr=pickClr(6); //The color picked as target-  it calls the function to pick random number between 0 to 6
var newGam= document.getElementById("new"); // new game span
tclr.innerHTML=pclr; // Assigns the picked color to the target
//var invisible=document.getElementsByClassName("box hard"); //get three boxes to make it invisible while click easy
var msg=document.getElementById("msg"); // Message span
var cclr; // clicked color
var bg=document.getElementsByClassName("nav")[0];// variable to get navigator bar
var mBtns=document.getElementsByClassName("mode"); // the mode buttons

/*******************************************GAME STARTS NOW!!!*************************************************/

start();

/*******************************************FUNCTION TO HANDLE ALL THE OPERATIONS*************************************************/

function start(){
    game();
    modes();
    NewGame();
}

/**********************************************Function to Get the children boxes*********************************************************** */

function reset(){
    
    
    for(i=0;i<nos;i++){
        for(i=0;i<nos;i++){
            box=document.createElement("div");
            parent.appendChild(box);
            box.classList.add("box");
            box.style.backgroundColor=clrs[i];
            
        }
    }
    
}

/**********************************************Function to say whether you win or not******************************************* */

function setEventListener(){
    for(i=0;i<nos;i++){
        boxes=document.querySelectorAll("#boxes div:nth-of-type(n)")
        boxes[i].addEventListener("click",function(){
            cclr=this.style.backgroundColor;
            
            if(cclr===pclr){
                msg.style.color="black";
                msg.innerHTML="you won!!";
                bg=document.getElementsByClassName("nav")[0];
                bg.style.backgroundColor=cclr;
                newGam.innerHTML="Play Again?";
                for(i=0;i<nos;i++){
                    boxes[i].style.backgroundColor=cclr;
                }
                
            }
                else{
                    this.style.transition="background-color 1s";
                    this.style.backgroundColor="#232323";
                    msg.style.color="black";
                    msg.innerHTML="Try again";
                }
            })
    }
}

/***************************************Function that starts the game ***********************************************************************/

function game(){

    mBtns[1].classList.add("selected")
    msg.style.color="white";
    
    reset();
    setEventListener();
    
}

/***********************************Function to handle the modes*********************************************************/

function modes(){
    for(i=0;i<mBtns.length;i++){
        mBtns[i].addEventListener("click",function(){
            removeDivs();
            mBtns[0].classList.remove("selected");
            mBtns[1].classList.remove("selected");
            this.classList.add("selected");
            msg.style.color="white";
            newGam.innerHTML="New Colors";
            if(this.innerHTML==="Easy"){
                nos=3;    
                newEasy(nos);
            }
            else{
                nos=6;
                newHard(nos);
            }
            
        });
    }
}

/*******************************************Funtion to remove the divs*********************************** */

function removeDivs(){
    for(i=0;i<nos;i++){
        boxes[i].remove();
    }
}

/******************************************* Function to handle new game*************************************************/

function NewGame(){    
    
    newGam.addEventListener("click",function(){
        removeDivs();
        bg.style.backgroundColor="#4278ab"
        newGam.innerHTML="New Colors";
        msg.style.color="white";
        if(nos===3){
                
            newEasy(nos);
    }
        else{
            newHard(nos);
           
        }
        
    });
}

/******************************************* Function to handle Easy mode*************************************************/

function newEasy(nos){
    clrs=randomColor(nos);
    pclr=pickClr(nos);
    tclr.innerHTML=pclr;
    bg.style.backgroundColor="#4278ab";
    reset();
    setEventListener();
}    


/******************************************* Function to handle Hard mode*************************************************/

function newHard(){
    clrs=randomColor(nos);
    pclr=pickClr(nos);
    tclr.innerHTML=pclr;
    bg.style.backgroundColor="#4278ab";
    reset();
    setEventListener()
}

/******************************************* Function to get Random colors*************************************************/

function randomColor(num){
    //Declare an array to  store num random colors
    var arr=[];
    //get the colors repeatedly
    for(i=0;i<num;i++){
        // call the fuction which generating random colors
        arr[i]=clrRdm();
    }
    //return the array of random colors
    return arr;
}

/******************************************* Function to generate Random colors*************************************************/

function clrRdm(){
   var r=Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);
   var clr= "rgb(" + r + ", " + g + ", " + b + ")";
   return clr;
}

/******************************************* Function to get Randomely picked color as target*************************************************/

function pickClr(num){
    var ran =Math.floor(Math.random()*num);
    return clrs[ran];
}

/*******************************************COMPLETED*************************************************/