const chooseBtn=document.getElementById('choose-btn');
const chooseBtn2=document.getElementById('choose-btn2');
const chooseBtn3=document.getElementById('choose-btn3');
const sucessBtn=document.getElementById('payment-success');
const closeBtn=document.getElementById('close-btn');




chooseBtn.addEventListener('click',() => {
    sucessBtn.style.display='grid'


})
chooseBtn2.addEventListener('click',() => {
    sucessBtn.style.display='grid'


})
chooseBtn3.addEventListener('click',() => {
    sucessBtn.style.display='grid'


})
closeBtn.addEventListener('click',() => {
    sucessBtn.style.display='none'


})
































// document.addEventListener("DOMContentLoaded", function() {
//     const paymentBtns = document.querySelectorAll(".payment-btn");
//     const successMessage = document.getElementById("payment-success-success");

//     function showSuccessMessage() {
//         successMessage.classList.remove("hidden");
//         setTimeout(function() {
//             successMessage.classList.add("hidden");
//         }, 3000);
//     }

//     paymentBtns.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             // Place your payment code here
//             // For demonstration purposes, we'll just show the success message
//             showSuccessMessage();
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", function() {
//     const paymentBtns = document.querySelectorAll(".payment-btn");
//     const successMessage = document.getElementById("payment-success");

//     function showSuccessMessage() {
//         successMessage.classList.remove("hidden");
//         setTimeout(function() {
//             successMessage.classList.add("hidden");
//         }, 3000);
//     }

//     paymentBtns.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             // Simulate UPI payment initiation by redirecting to a deep link
//             window.location.href = "upi://pay"; // Replace with actual UPI deep link
//             showSuccessMessage();
//         });
//     });
// });






