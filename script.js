let turn="x";
let isgameover=false;
let isReset=false;
let isGameDraw=false;

changeTurn=()=>{
return turn ==="x"?"0":"x"}

function checkWin(){
   
    let boxtexts=document.getElementsByClassName("box");
    let cmbinations=[[0,1,2,0,5,0], [3,4,5,0,15,0],[6,7,8,0,25,0],
                    [0,3,6,-10,15,90], [1,4,7,0,10,45],[2,5,8,10,15,90],
                    [0,4,8,0,15,45], [2,4,6,0,15,135]];
                    //if(!isReset){
                    cmbinations.forEach(e=>{
                       if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) 
                        && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) 
                        && (boxtexts[e[0]].innerText!==""))
                        {
                            document.getElementsByClassName("info")[0].innerHTML="Mr "+boxtexts[e[0]].innerHTML +" Won Click Reset to Restart";
                            //boxtexts[e[0]].innerText="";
                            document.querySelector('.line').style.width='30vw';
                            document.querySelector('.line').style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)` 
                           
                            isgameover=true;
                            isGameDraw=false;
                            document.addEventListener("click",handler,true);
                        }

                        else if((boxtexts[0].innerText!=='' && boxtexts[1].innerText!=='' && boxtexts[2].innerText!==''
                        && boxtexts[3].innerText!=='' && boxtexts[4].innerText!=='' && boxtexts[5].innerText!==''
                        && boxtexts[6].innerText!=='' && boxtexts[7].innerText!=='' && boxtexts[8].innerText!=='')
                        &&(boxtexts[e[0]].innerText!==boxtexts[e[1]].innerText) 
                        && (boxtexts[e[2]].innerText!==boxtexts[e[1]].innerText) 
                       )
                        {
                            document.getElementsByClassName("info")[0].innerHTML="draw, Click Reset to Restart"; 
                            isGameDraw=true;
                            isgameover=true;
                        }
                    });
                    
                    function handler(e){
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    
    
             
    
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    let boxElement=e.querySelector('.boxtext');
    e.addEventListener("click", ()=>{
        if(boxElement.innerHTML===''){
        boxElement.innerHTML=turn;
       turn= changeTurn();
        checkWin();
        if(!isgameover && !isGameDraw){
        document.getElementsByClassName("info")[0].innerHTML="Now its turn of Mr  " +turn;
        }
        
    }
    })
})

//reset button
let Allboxes=document.getElementsByClassName("box");
reset.addEventListener('click',()=>{
    Array.from(Allboxes).forEach(e=>{
        let valuesToReset=e.querySelector('.boxtext');
valuesToReset.innerText='';
    })
    isgameover=false;
    isGameDraw=false;
    document.getElementsByClassName("info")[0].innerText="Game is Reset ";
    document.querySelector('.line').style.width='0vw';
    })
    


