const display = document.getElementById("display");

function appendInput(input){
    display.value += input;
}

function clearInput(){
    display.value = "";
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}