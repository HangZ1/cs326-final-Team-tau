document.getElementById('PC Building Helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
})
document.getElementById('Sign in').addEventListener('click',() => {
    window.location.href = 'Signin_page.html';
})
document.getElementById("About").addEventListener('click',() => {
    //window.location.href = 'About.html';
})

let login_status = true;
if(login_status){
    document.getElementById("Your plans").addEventListener('click',() => {
        window.location.href = 'ShoppingCart.html';
    })
    document.getElementById("Build").addEventListener('click',() => {
        window.location.href = 'Output_page.html';
    })
} else{
    document.getElementById("Your plans").addEventListener('click',() => {
        alert("You need to sign in first");
    })
    document.getElementById("Build").addEventListener('click',() => {
        alert("You need to sign in first");
    })
}