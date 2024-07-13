let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true; // player 0 turn

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked")
        if (turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[0]].innerText;
        let post3 = boxes[pattern[0]].innerText;
        if (post1 != "" && post2 != "" && post3 != ""){
            if ((post1 == post2) && (post2 == post3) ){
                showWinner(post1);
            }
        }
    }
}
