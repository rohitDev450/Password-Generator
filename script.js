let Passwordbox = document.getElementById("Password")
let length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol ="!@#$%^&*_";

const allchar = uppercase + lowercase + number + symbol;

function generatePassword(){
    let password= "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){

        password += allchar[Math.floor(Math.random() * allchar.length)]
    }

      Passwordbox.value = password;

      
}
function copyPassword(){
          Passwordbox.select();
          document.execCommand("copy");
          alert("Text is copied!!!!");
      }