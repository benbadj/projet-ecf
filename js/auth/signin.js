const mailInput = document.getElementById("EmailInput");
const passwordInput= document.getElementById("PasswordInput");
const signinbtn = document.getElementById("signinbtnInput");

signinbtn.addEventListener("click", checkCredentials);

function checkCredentials(){
    if(mailInput.value == "melanie@gmail.com" && passwordInput.value == "1234"){
        const token ="emmanuel"
        setToken(token);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add = "is-invalid";
        passwordInput.classList.add = "is-invalid";
    }
}