var boxes = document.querySelectorAll(".box");
var reset =  document.querySelector(".Reset");
var x = true;
let winner = document.querySelector("p");
let count = 0;

const winPattern =  [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

for(var i = 0; i < 9 ; i++){
    boxes[i].addEventListener("click", function(){
        // console.log("clicked");
        // console.log(this);
        if(x){
            this.innerHTML = "X";
            x = false;
        }
        else{
            this.innerHTML = "O";
            x = true;
        }
        this.disabled = true;
        count++;

        checkWinner();

    })
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                for(var i = 0; i < 9 ; i++){
                    boxes[i].disabled = true;
                }
                winner.style.display = "inline";
                winner.innerHTML = 'Winner is ' + pos1val;
            }
            else if (count === 9){
                winner.innerHTML = "Draw";
            }
        }
    }
};

reset.addEventListener("click", function (){
    x = true;
    for(var i = 0; i < 9 ; i++){
        boxes[i].disabled = false;
        boxes[i].innerHTML = "";
    }
    winner.innerHTML = "";
})
