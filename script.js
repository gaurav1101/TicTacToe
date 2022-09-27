let turn="x";
let isgameover=false;
let isReset=false;

changeTurn=()=>{
return turn ==="x"?"0":"x"}

function checkWin(){
   
    let boxtexts=document.getElementsByClassName("box");
    let cmbinations=[[0,1,2], [3,4,5],[6,7,8],
                    [0,3,6], [1,4,8],[2,5,8],
                    [0,4,8], [2,4,6]];
                    //if(!isReset){
                    cmbinations.forEach(e=>{
                       if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) 
                        && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) 
                        && (boxtexts[e[0]].innerText!==""))
                        {
                            document.getElementsByClassName("info")[0].innerHTML="Mr "+boxtexts[e[0]].innerHTML +" Won";
                            //boxtexts[e[0]].innerText="";
                            isgameover=true;
                        }
                    });
               // }
                // else{
                //     for(let i=0;i<=8;i++){
                //         boxtexts[i].innerText="";
                //     }
                    
                //     document.getElementsByClassName("info")[0].innerHTML="Now its turn of  x";
                //     isgameover=false;
                // }
                    
    
             
    
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    let boxElement=e.querySelector('.boxtext');
    e.addEventListener("click", ()=>{
        if(boxElement.innerHTML===''){
        boxElement.innerHTML=turn;
       turn= changeTurn();
        checkWin();
        if(!isgameover){
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
    document.getElementsByClassName("info")[0].innerHTML="Now its turn of  x";
    })
    


