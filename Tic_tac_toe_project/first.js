let boxes=document.querySelectorAll(".box");
let player1=prompt("enter player 1 name=");
let player2=prompt("enter player 2 name=");
let display=document.querySelector(".playerName");
display.innerText=player1;
let turn0=true;
const winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let win=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let container=document.querySelector(".container")

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
          
            box.innerText="o";
            turn0=false;
            box.disabled=true;
            display.innerText="Now "+player2+" turn";
        }else{
          
            box.innerText="x";
            turn0=true;
            display.innerText="Now  "+player1+" turn";
        }
        box.disabled= true;
        checkWinner();
    })
})
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledBoxes=()=>{
    for(let box of boxes){
        
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
 win.classList.remove("hide");
 disabledBoxes();
 let d="o";
 if(winner==="o"){
    msg.innerText=`Congratulation Winner is ${player1}`;
 }else{
    msg.innerText=`Congratulation Winner is ${player2}`;
 }
}

const  checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
       if(pos1Val!=""&&pos1Val!="" && pos1Val!="" ){
        if(pos1Val==pos2val&&pos2val==pos3val){
            console.log("winner is ",pos1Val);
            showWinner(pos1Val);
        }


    }
}
const showLost=()=>{
    msg.innerText=`Match is draw`;
    win.classList.remove("hide");
    
}
}
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
turn0=true;
enableBoxes();
win.classList.add("hide");

})

let reset=document.querySelector(".reset");
reset.innerText="Reset";
reset.addEventListener("click",()=>{
    alert("do you want to reset game")
    resi();
})

const resi=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        display.innerText="";
    }
}