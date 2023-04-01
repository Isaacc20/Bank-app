let text = document.getElementById("text");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");
    let gmail = document.getElementById("gmail");
    let passcode = document.getElementById("passcode");
    user_arr = JSON.parse(localStorage.getItem("isaac"));
    let index = 0;
    index++
    
    let inside = JSON.parse(localStorage.getItem("isaac"))
    sign.style.display = "none"
    function signin() {
        // let user_arr = JSON.parse(localStorage.getItem("isaac"))
    let storage = {
         name : text.value,
         mail : email.value,
         phone_no : phone.value,
         pass : password.value,
         confirm : confirm_password.value,
    }
        if (text.value == 0 || email.value == 0 || phone.value < 11 || confirm_password.value == 0 || password.value == 0) {
             alert( "Inputs cannot be left empty");
             return;
         }
         else if(password.value != confirm_password.value)  {
            alert("Fill the same password");
            return;
         }
         else if (text.value > 1 || email.value > 1 || phone.value > 1 || confirm_password.value > 1 || password.value > 1) {
            if (user_arr == null) {
                let user_arr = [];
                alert("Sign up successful")
                user_arr.push(storage);
                localStorage.setItem("isaac", JSON.stringify(user_arr));
                sign.style.display = "none";
                log.style.display = "block";
            } else {
            alert("Sign up successful")
            user_arr.push(storage);
            localStorage.setItem("isaac", JSON.stringify(user_arr));
            sign.style.display = "none";
            log.style.display = "block";
            }
            
         }
    }
    let array = document.getElementById("myindex");
    function log_in() {
        sign.style.display = "none";
        log.style.display = "block";
    }
    function sign_in() {
        sign.style.display = "block";
        log.style.display = "none";
    }
         function login() {
            let found = user_arr.find((check)=>gmail.value == check.mail && passcode.value == check.pass)
            if (found) {
                localStorage.setItem("found", JSON.stringify(found))
                window.location.href = ("Dashboard.html")
                console.log(found);
            }
            else{
                alert("Wrong password");
                return;
                console.log(myfind, myfound);
            }
         }
         console.log(user_arr);
