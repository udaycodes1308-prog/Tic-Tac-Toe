let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#newGame");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;


const resetGame = () => {
     let turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
};


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else if(turnO === false) {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  
        checkWinner();

    });
});
const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;  
    };}
const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;  
        box.innerText = "";
    };
};
const showWinner = (winner) =>{
    msg.innerText = `Conratulations, winner = ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
               if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val == pos2Val && pos2Val ==pos3Val){
                    showWinner(pos1Val);
                }
               }
               
            
    };
};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);