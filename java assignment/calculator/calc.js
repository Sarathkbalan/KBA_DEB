
function click1(val){
    document.getElementById("display").value+=val;
}


function clear1(){
    document.getElementById("display").value=""
}

function equalButton(){
    let text=document.getElementById("display").value
    let result=eval(text)
    document.getElementById("display").value=result


}
