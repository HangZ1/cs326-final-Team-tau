const storage = window.sessionStorage

window.addEventListener('load', async() => {
    if(storage.getItem('username')){
        document.getElementById('Signin').innerText='Sign out'
        document.getElementById('Signin').classList.add('btn-danger');
    }else{
        document.getElementById('Signin').innerText='Sign in'
        document.getElementById('Signin').classList.add('btn-primary');
    }
});

document.getElementById('helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
});

document.getElementById('Signin').addEventListener('click',() => {
    if(storage.getItem('username')){
        storage.clear();
        alert("you just signed out")
        window.location.href = 'Homepage.html';
    }
    else{
        window.location.href = 'Signin_page.html';
    }
});


document.getElementById("doit").addEventListener('click',() => {
    if(storage.getItem('username')){
        window.location.href = 'Select.html';
    } else{
        alert("You need to sign in first");
    }
});

document.getElementById("Yourplans").addEventListener('click',() => {
    if(storage.getItem('username')){
        window.location.href = 'ShoppingCart.html';
    }else{
        alert("You need to sign in first");
    }
});




