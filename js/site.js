function getValues() {

    // input = 'OLYMPUS'
    let inputString = document.getElementById('inputString').value;
    let stringResult = reverseString(inputString);
    displayString(stringResult);
}

function reverseString(inputString){
    
    let result= '';

    for (let i = inputString.length-1;i >= 0;i--) {
        
        result += inputString[i];
        
    }

    return result;
}

function displayString(stringResult) {
    
    document.getElementById('alert').classList.remove('invisible');
    document.getElementById('msg').innerHTML =`your string as been reversed to <b>${stringResult}</b>`;
 
}
