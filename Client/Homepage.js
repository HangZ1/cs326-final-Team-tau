document.getElementById('PC Building Helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
});

document.getElementById('Sign in').addEventListener('click',() => {
    window.location.href = 'Signin_page.html';
});

document.getElementById("About").addEventListener('click',() => {
    //window.location.href = 'About.html';
});


let login_status = true;
document.getElementById("Let's do it").addEventListener('click',() => {
    if(login_status){
        window.location.href = 'Select.html';
    } else{
        alert("You need to sign in first");
    }
});

document.getElementById("Your plans").addEventListener('click',() => {
    if(login_status){
        window.location.href = 'ShoppingCart.html';
    }else{
        alert("You need to sign in first");
    }
});




