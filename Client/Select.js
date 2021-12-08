const storage = window.sessionStorage

document.getElementById('PC Building Helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
})

window.addEventListener('load', async() => {
    if(storage.getItem('username')){
        document.getElementById('Sign in').innerText='Sign out'
        document.getElementById('Sign in').classList.add('btn-danger');
    }else{
        document.getElementById('Sign in').innerText='Sign in'
        document.getElementById('Sign in').classList.add('btn-prime');
    }
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
})


document.getElementById("Your plans").addEventListener('click',() => {
    window.location.href = 'ShoppingCart.html';
})
document.getElementById("Build").addEventListener('click',() => {
    window.location.href = 'Output_page.html';
})
