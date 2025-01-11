function click1(val){
    document.getElementById("display").value+=val;
}


function clear1(){
    document.getElementById("display").value=""
}

function equalButton(){
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result


}
