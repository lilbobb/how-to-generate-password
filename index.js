const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateEl = document.getElementById("generate-el")
let passwordEl1 = document.getElementById("password-el")
let passwordEl2 = document.getElementById("password2-el")


generateEl.addEventListener("click", function(){
  var password = '';
  var password2 = '';
  
    for(let i = 0; i < 12; i++){
        const passwordGen = Math.floor(Math.random()* characters.length) 
        const passwordGen2 = Math.floor(Math.random()* characters.length) 
        
        password = password + characters[passwordGen];
        password2 = password2 + characters[passwordGen2];
    
    }
    console.log(password)
    console.log(password2)
    passwordEl1.textContent = password
    passwordEl2.textContent = password2
    
})
