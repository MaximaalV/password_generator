const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.querySelector('button');
    const passwordOne = document.getElementById('first');
    const passwordTwo = document.getElementById('second');

    generateButton.addEventListener('click', function() {
        const generatedPasswordOne = generateRandomPassword();
        const generatedPasswordTwo = generateRandomPassword();

        passwordOne.textContent = generatedPasswordOne;
        passwordTwo.textContent = generatedPasswordTwo;
    });
});

function copyToClipboard(text) {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
}

// Add event listeners to the password elements for copying
passwordOne.addEventListener('click', function() {
    copyToClipboard(passwordOne.textContent);
    alert('Password 1 copied to clipboard!');
});

passwordTwo.addEventListener('click', function() {
    copyToClipboard(passwordTwo.textContent);
    alert('Password 2 copied to clipboard!');
});