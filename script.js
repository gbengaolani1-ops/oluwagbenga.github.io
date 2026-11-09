document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.queryselector(".menu-toggle");
const navLinks = document.queryselector(".nav-links");
if
(menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
const form = documment.queryselector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()


    const nameInput = form.queryselector('input[placeholder=Name]');
    const emailInput = form.queryselector('input[placeholder=Email]');
    const messageInput = form.queryselector('input[placeholder=Message]');
    if(nameInput.value.trim() === ""){
        alert("Please enter your name.");
        return;
    }
    if(emailInput.value.trim() === ""){
        alert("Please enter your email.");
        return;
    }
    alert("Form submitted successfully!");
    form.submit();
});
    


