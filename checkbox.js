const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymeantResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent = "You are NOT subscribed!";
    }

    if(visaBtn.checked){
         paymeantResult.textContent = "You are paying with Visa";
    }
    else if(masterCardBtn.checked){
        paymeantResult.textContent = "You are paying with masterCard";
    }
    else if(payPalBtn.checked){
        paymeantResult.textContent = "You are paying with payPal";
    }
    else{
        paymeantResult.textContent = "You must select a payment type";
    }
    
}





