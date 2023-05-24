console.log("Welcome to Tic Tac Toe")
let music=new Audio("music.mp3")
let turn=new Audio("ting.mp3")
let gameover=new Audio("GAME OVER.mp3")
let Turn ="X"
let won= new Audio("Winner.mp3");
let Gameover=false;
const changeturn= ()=>{
    if(Turn==="X"){
        Turn ="0"
    }
    else{
        Turn ="X"
    }
    //return turn ==="X"?"0":"X"
}

const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON";
            Gameover=true;
            document.querySelector('.imagebox').getElementsByTagName("img")[0].style.width = "200px";
            won.play();
        }


    })
}
//music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=Turn;
            changeturn();
            turn.play();
            checkWin();
            if(!Gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For "+ Turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText =""
        Turn ="X";
        Gameover=false;
        document.getElementsByClassName("info")[0].innerText = "Turn For "+ Turn;
        document.querySelector('.imagebox').getElementsByTagName("img")[0].style.width = "0px";
    });
})