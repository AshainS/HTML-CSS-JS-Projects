const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let generateEl = document.getElementById("generate-btn");
let passElOne = document.getElementById("pass-display-one");
let passElTwo = document.getElementById("pass-display-two");

generateEl.addEventListener("click", function () {
    let passwordOne = "";
    let passwordTwo = "";

    for(let i = 0; i < 15; i++) {
        let randomCharOne = Math.floor(Math.random() * characters.length);
        let randomCharTwo = Math.floor(Math.random() * characters.length);
        passwordOne += characters[randomCharOne];
        passwordTwo += characters[randomCharTwo];
    }

    passElOne.textContent = passwordOne;
    passElTwo.textContent = passwordTwo;
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

passElOne.addEventListener("click", function() {
    copyToClipboard(passElOne.textContent);
});

passElTwo.addEventListener("click", function() {
    copyToClipboard(passElTwo.textContent);
});