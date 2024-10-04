function buttonclick(val){
    console.log(val)
    console.log('lh',document.getElementById("screen").value)
    console.log('rh',document.getElementById("screen").value+val)

    document.getElementById("screen").value = document.getElementById("screen").value+val;
}
function clearDisplay(){
    document.getElementById("screen").value=" "
}
function equalclick(){
    if(document.getElementById("screen").value){
        var text=document.getElementById("screen").value
        var result=eval(text)
        document.getElementById("screen").value=result
    
        console.log('ans',result)
    } else {
        alert('please enter a valid input')
    }

}