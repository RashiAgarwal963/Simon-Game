var start=true;
var color=["green","red","yellow","blue"];
var store=[];
document.addEventListener("keypress",function(event){
    if(event.key=='Enter' && start==true){
       document.getElementsByTagName("h1")[0].innerHTML="LET'S PLAY THE GAME ";
       start=false;
       to_store();
    }
})

function to_store(){
    var choose=Math.floor(Math.random()*4);
    document.getElementById(color[choose]).classList.add("add");
    var audio=new Audio("btn1.mp3");
    audio.play();
    store.push(color[choose]);
    setTimeout(() => {
    document.getElementById(color[choose]).classList.remove("add");
    }, 200);
}
var i=0;
function game(){
    if(document.activeElement.id==store[i]){
        if(i==store.length-1){
            alert("CORRECT !!");
            to_store();
            i=0;
        }
        else{
            i++;
        }
    }
    else{
        alert("WRONG !!");
        Window.location.reload();
    }
    return;
}