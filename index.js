var boxes = document.querySelectorAll(".box");
var reset =  document.querySelector(".Reset");

var x = true;

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
        console.log("clicked");
        console.log(this);
        if(x){
            this.innerHTML = "X";
            x = false;
        }
        else{
            this.innerHTML = "O";
            x = true;
        }
        this.disabled = true;
        checkwinner();

    })
}

function checkwinner(){
    console.log(winPattern);
}
