// VARIABLES
let welcome = JSON.parse(localStorage.getItem("isaac"));
let hello = document.getElementById("hello");
let curr_user = JSON.parse(localStorage.getItem("found"));
let users = JSON.parse(localStorage.getItem("isaac"));
let user = users.find((el)=>el.mail == curr_user.mail);

if (curr_user == null) {
    window.location.href = "index.html"
}

// WELCOME
function comein() {
    let person = prompt("What is your preferred name", curr_user.name);
    if (person == null || person == "") {
        if(confirm("Write something")){
            let person = prompt("What is your preferred name", curr_user.name);
            alert("Welcome to your Dashboard " + person + "Wish you a good network");
            user.prefered_n = person
            localStorage.setItem("isaac", JSON.stringify(users));
        } else {
            alert("Welcome to your Dashboard " + curr_user.name + "Wish you a good network");
            user.prefered_n = person
            localStorage.setItem("isaac", JSON.stringify(users))
            }
    } else {
        user.prefered_n = person
        alert("Welcome to your Dashboard " + person)
        localStorage.setItem("prefered", JSON.stringify(person))
    }
};
if (user.prefered_n == null || user.prefered_n == "") {
    comein()
}
// LOG OUT BUTTON
function log_in() {
    if (confirm("Confirm logout!!!")) {
        localStorage.removeItem("found")
        window.location.href = "index.html"
    } else {
        return;
    }
}

let number = document.getElementById("number");
let myatm_no = document.getElementById("atm_no");
let atm_back = document.getElementById("three");
let username = document.getElementById("username");
let acc_no = Math.floor(Math.random() * 9999999999);
let joy = Math.floor(Math.random() * 999999999999);
let back = Math.floor(Math.random() * 999);
let dash = document.getElementById("top");
let u_name = document.getElementById("myname");
let transfer = document.getElementById("transfer");
let t_page = document.getElementById("trans_page")
let des = document.getElementById("destination")
let c_payment = document.getElementById("firm")
let t_amo = document.getElementById("amount")
let c_amo = document.getElementById("c_amo")

//WELCOME AND ACCOUNT SET UP PAGE
dash.style.display = "none"
console.log(user);
document.getElementById("name").innerHTML = user.prefered_n;
function no() {
    alert("Your ATM card has successfully been generated");
    user.atm_no = joy;
    user.back_no = back;
    user.balance = 5000
    localStorage.setItem("isaac", JSON.stringify(users));
    myatm_no.innerHTML = user.atm_no
    username.innerHTML = user.name
    atm_back.innerHTML = user.back_no
    setTimeout(() => {
        alert("Congratulations, you just won a total amount of ₦5000 for completing setting up your playGame account")
    }, 3000);
    setTimeout(() => {
        if (user.acc_no != null && user.atm_no != null && user.back_no != null) {
            document.getElementById("welcome_page").style.display = "none"
            dash.style.display = "block"
        }
    }, 4000);
}

function gen_no() {
    if (user.acc_no == null) {
        alert("You have successfuly generated an account number")
        user.acc_no = acc_no
        localStorage.setItem("isaac", JSON.stringify(users));
        number.innerHTML = user.acc_no
    } else if(user.acc_no.length < 10) {
        user.acc_no = acc_no
        localStorage.setItem("isaac", JSON.stringify(users));
        number.innerHTML = user.acc_no
    } else if (user.acc_no.length == 10) {
        alert("You already have an account no.")
    }
}

function atm() {
    if (user.atm_no == null && user.back_no == null) {
        let gender = prompt("Before we continue, what is your gender? \nMale or Female", "Male")
           if (gender == null || gender == ""){
               return
           } else if(gender == "male" || gender == "Male"){
            user.gender = "Male"       
            alert("You are welcome sir")
                   no()
               } else if(gender == "female" || gender == "Female"){
                user.gender = "Female"   
                alert("You are welcome ma")
                   no()
            }
    } else{
        alert("You already have a debit card")
    }
}
    if (user.acc_no != null){
        number.innerHTML = user.acc_no
    }
    if (user.atm_no != null && user.back_no != null) {
        myatm_no.innerHTML = user.atm_no
        username.innerHTML = user.name
        atm_back.innerHTML = user.back_no
    }
    if (user.acc_no != null && user.atm_no != null && user.back_no != null) {
        document.getElementById("welcome_page").style.display = "none"
        dash.style.display = "block"
    }
localStorage.setItem("isaac", JSON.stringify(users));

// DASHBOARD
u_name.innerHTML = user.prefered_n
balance.innerHTML = "₦" + +user.balance 

t_page.style.display = "none"
transfer.addEventListener("click", ()=>{
t_page.style.display = "block"
des.addEventListener("input", ()=>{
    let u_acc = users.find((see)=>des.value == see.acc_no)
    if (des.value.length == 10) {
        if (u_acc && des.value != user.acc_no) {
            setTimeout(()=>{document.getElementById("des_name").innerHTML = u_acc.name}, 2000)
        } else if (u_acc && des.value == user.acc_no) {
            setTimeout(()=>{
                alert("You cannot transfer money into your own account");
                des.value =""
            }, 2000)
        } else if (!u_acc) {
            setTimeout(()=>{alert("Destination account does not exist")
            des.value =""}, 2000)
            return;
        }
    } else if(des.value.length > 10){
        alert("Excess digits")
        return;
    }
})
})
c_payment.addEventListener("click", (el)=>{
    el.preventDefault()
    if (des.value.length < 10 || des.value.length > 10 || t_amo.value == "" || t_amo.value > user.balance) {
        return
    } else {
    let u_acc = users.find((see)=>des.value == see.acc_no)
            user.balance = user.balance - t_amo.value
            u_acc.balance = +u_acc.balance + +t_amo.value
            localStorage.setItem("isaac", JSON.stringify(users));
            balance.innerHTML = "₦" + +user.balance
        }
})