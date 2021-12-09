const storage = window.sessionStorage

document.getElementById('PC Building Helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
})


document.getElementById('Sign in').addEventListener('click',() => {
    storage.clear();
    alert("you just signed out")
    window.location.href = 'Homepage.html';
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
