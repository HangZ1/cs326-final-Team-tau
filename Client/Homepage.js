document.getElementById('PC Building Helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
})
document.getElementById('Sign in').addEventListener('click',() => {
    window.location.href = 'Signin_page.html';
})
document.getElementById("About").addEventListener('click',() => {
    //window.location.href = 'About.html';
})
let login_status = window.login_status;
if(login_status){
    document.getElementById("Let's do it").addEventListener('click',() => {
        window.location.href = 'Select.html';
    })
    document.getElementById("Your plans").addEventListener('click',() => {
        window.location.href = 'ShoppingCart.html';
    })
} else{
    document.getElementById("Let's do it").addEventListener('click',() => {
        alert("You need to sign in first");
    })
    document.getElementById("Your plans").addEventListener('click',() => {
        alert("You need to sign in first");
    })
}



