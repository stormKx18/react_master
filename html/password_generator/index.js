
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1="";
let pass2="";

function generatePasswords(len){
    let tmp1=[];
    let tmp2=[];
    for(let i=0;i<len;i++){
        rand1 = Math.floor(Math.random()*characters.length);
        rand2 = Math.floor(Math.random()*characters.length);
        tmp1.push(characters[rand1]);
        tmp2.push(characters[rand2]);
    }
    pass1= tmp1.join("");
    pass2= tmp2.join("");

    showPasswords();
    clearCopyMessage();
}

function showPasswords(){
    const pass1El = document.querySelector("#pass1");
    const pass2El = document.querySelector("#pass2");

    pass1El.textContent=pass1;
    pass2El.textContent=pass2;
}

function copyText(option) {
    if(pass1==="") return

    if(option===1){
        navigator.clipboard.writeText(pass1);
    }else{
        navigator.clipboard.writeText(pass2);
    }

    showCopyMessage();
}

function showCopyMessage(){
    const commentEl = document.querySelector("#comment");
    commentEl.textContent="Password copied to clipboard!"
}

function clearCopyMessage(){
    const commentEl = document.querySelector("#comment");
    commentEl.textContent=""  
}