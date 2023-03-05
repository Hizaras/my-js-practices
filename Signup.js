
// const fn = document.getElementById("firstName");
// const ln = document.getElementById("lastName");
// const pw = document.getElementById("password");
// const em = document.getElementById("email");
// const button = document.getElementsByClassName("btn");

// button.addEventListener("onsubmit", button);


var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");

var errorMessage = document.getElementsByClassName("error");





function signUp () {
    firstName.focus();

    if(firstName.value === " " || firstName.value === null){
        firstName.classList.add("errorColor");
        errorMessage.textContent = "please enter your first name!";
    }
    

}

const btn = document.getElementsByClassName("btn");
btn.addEventListener("click",() => {
    signUp();
});
// const button = document.getElementsByClassName("btn"); 
// button.addEventListener('click',signUp);