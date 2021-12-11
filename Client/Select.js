const storage = window.sessionStorage

window.addEventListener('load', ()=>{
    if(!storage.getItem('username')){
        window.location.href = 'Signin_page.html';
    }
});

document.getElementById('helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
});


document.getElementById('Signin').addEventListener('click',() => {
    storage.clear();
    alert("you just signed out")
    window.location.href = 'Homepage.html';
});


document.getElementById("plans").addEventListener('click',() => {
    window.location.href = 'ShoppingCart.html';
});

document.getElementById("Build").addEventListener('click',() => {
    var e = document.getElementById("Budget");
    var value =e.options[e.selectedIndex].value;
    if(document.getElementById("Purpose").value === "Office" ){
        if((value !== "less than $1000" && value !== "1000 to 1500")){
            alert("Office purpose is not available in this budget");
        }
        else{
            window.location.href = 'Output_page.html';
        }
    }
    else{
        window.location.href = 'Output_page.html';
    }
    // window.location.href = 'Output_page.html';
});

