
// User will use an imput to call this function and the input value will be check to see if the input 
// is a palindrome, then inform the user of the findings.
function getValues() {

    // Get the values from HTML and stage it for use by other functions
    let originalInputString = document.getElementById('originalInputString').value;
    
    // create a var and lowercase and replace all chars that are ^... with nothing. removing all char except the ones i expect
    normalizedString = originalInputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // pass the normalized string to be reversed and validated if its a palindrome
    let checkedResults = checkForPalindrome(normalizedString);

    // Pass bool results for is a palindrome checker and the un-normalized input from html
    displayResults(checkedResults, originalInputString);
}

// is the value passed in a palindrome?
// Step 1: Reverse the string
// Step 2: Compare reversed string against original to validate they match
// Step 3: Check for error cases
// Step 4: Return if the value was a palindrome or not.

function checkForPalindrome(normalizedString){
    // var for storing the input string value in reverse
    let reversedString = '';

    // var for storing true/false for if the input is a palindrome 
    let isValidPalindrome = '';


    // make a for loop that reverses the string
    for (let i = normalizedString.length-1;i >= 0;i--) {
        reversedString += normalizedString[i];
    }

    // Validate the results against the normalized string and check against empty strings
    if (normalizedString == reversedString && normalizedString != "") {
        isValidPalindrome = true;         
    } else {
        isValidPalindrome = false;                
    }


    return isValidPalindrome;
}



function displayResults(checkedResults, originalInputString) {
    
    if (checkedResults == true) {

        swal.fire({
            background: "#dde6f4",
            title: 'Good Job!',
            backdrop: false,
            text: `"${originalInputString}" is a Palindrome`
          });

    } else {
        swal.fire({
            icon:'error',
            background: "#f8d8db",
            title: 'Oops!',
            backdrop: false,
            text: `"${originalInputString}" is NOT a Palindrome`
          });
    } 
}

