const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function removeFromDisplay(){
    if(display.value == "Infinity"){
        display.value="";
    }
    else if(display.value == "Error"){
        display.value="";
    }
    else{
        display.value=display.value.replace(display.value[0],"");
    }
}