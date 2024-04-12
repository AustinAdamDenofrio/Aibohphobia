function getValues() {

    // Get the values from the left and right inputs
    let originalInputString = document.getElementById('originalInputString').value;

    let checkedResults = checkForPalindrome(originalInputString);

    displayResults(checkedResults);
}


function checkForPalindrome(originalInputString){

    let isValidPalindrome = '';
    let reversedString = '';

    // normalize string
    // for each character check if its either WS or SC

    // make a for loop that reverses the string
    for (let i = originalInputString.length-1;i >= 0;i--) {
        
        reversedString += originalInputString[i];

    }

    // Validate the results against the normalized string
    if (originalInputString == reversedString) {
        
        isValidPalindrome = true;         

    } else {
        isValidPalindrome = false;                
    }

    return isValidPalindrome;
}



function displayResults(checkedResults) {

    
    if (checkForPalindrome == true) {
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('msg').innerHTML = `your word is a Palindrome <b></b>`;
    } else {
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('msg').innerHTML = `your word is not a Palindrome <b></b>`;
    }
 
}
