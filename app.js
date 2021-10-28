//Get and Print History
function getHistory(){
    return document.getElementById('history-value').innerText;
}
function printHistory(num){
    document.getElementById('history-value').innerText = num;
}


// Get and Print Output
function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById('output-value').innerText = num;
    }
    else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}

 //this function reads a number and returns a coma separated value.
function getFormattedNumber(num){
    if(num == "-"){
        return ""; 
    }
    var n = Number(num); // NUmber() converts object argument's value to a number. If the value can't be converted to a legal number, NaN is returned.
    var value = n.toLocaleString("en") // for coma separated value
    return value;
}

//to remove coma from numbers using regex
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//Functions on Operators
var operator = document.getElementsByClassName('operator');
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "clearspace"){
            var output = reverseNumberFormat(getOutput()).toString(); 
            // first convert output into rnf so that it does't have to deal with comas
            if(output){
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();

            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
        
            if(output != "" || history != ""){
                //condition?true:false
                output = output==""?
                output:reverseNumberFormat(output);
                history = history+output;
                if(this.id == "="){
                    var result = eval(history) // evaluate the operation
                    printOutput(result);
                    printHistory("")
                }
                else{
                    history = history+this.id;
                }
            }
        }
    })
}


//Function on Numbers
var number = document.getElementsByClassName('number');
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){ //if output is a number
            output = output+this.id;
            printOutput(output);
        }
    })
}


var microphone = document.getElementById('microphone');
microphone.onclick = function(){
    var recognition = new (window.SpeechRecognition || )
}