const storage = window.sessionStorage

window.addEventListener('load', async() => {
    if(storage.getItem('username')){
        document.getElementById('Sign in').innerText='Sign out'
    }else{
        document.getElementById('Sign in').innerText='Sign in'
    }
});

document.getElementById('PC Building Helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
});

document.getElementById('Sign in').addEventListener('click',() => {
    if(storage.getItem('username')){
        storage.clear();
        alert("you just signed out")
        window.location.href = 'Homepage.html';
    }
    else{
        window.location.href = 'Signin_page.html';
    }
});

document.getElementById("About").addEventListener('click',() => {
    //window.location.href = 'About.html';
});


document.getElementById("Let's do it").addEventListener('click',() => {
    if(storage.getItem('username')){
        window.location.href = 'Select.html';
    } else{
        alert("You need to sign in first");
    }
});

document.getElementById("Your plans").addEventListener('click',() => {
    if(storage.getItem('username')){
        window.location.href = 'ShoppingCart.html';
    }else{
        alert("You need to sign in first");
    }
});




