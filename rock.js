/*


function getrandnum(max){
        return Math.floor(Math.random() * max)
}

function gethuman(){
    console.log("Rock-0     Paper-1     Scissors-2  ")
    let result=Number(prompt("Enter choice "))
    return result
}

//while(true)
{
    result=gethuman()
    let key=getrandnum(3)
    console.log(key)
    if (key===0 && result===1){
        alert("Paper vs Rock You Win");
    }
    else if(key===1 && result===0){
        alert("Rock vs Paper You lose.");
    }
    else if(key===0 && result===2){
        alert("Scissor vs Rock You lose.");
    }
    else if(key===2 && result===0){
        alert("Rock vs Scissor You win.");
    }
    else if(key===1 && result===2){
        alert("Scissor vs Paper You win.");
    }
    else if(key===2 && result===1){
        alert("Paper vs Scissor You lose.");
    }
    else{
        alert("Draw");
    }
}