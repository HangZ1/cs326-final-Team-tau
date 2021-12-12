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
    var a= document.getElementById("chip");
    var avalue =a.options[a.selectedIndex].value;
    if(document.getElementById("Purpose").value === "Office" ){
        if((value !== "less than $1000")){
            alert("Office purpose is not available in this budget");
        }
        else{
            window.location.href = 'Output_page.html';
        }
    }
    else if(avalue === "AMD" && document.getElementById("Purpose").value === "Gaming" ){
        if(value === "less than $1000"){
            alert("Due to the high price of AMD cpu, Gaming under $1000 with AMD platform is not valid");
        }
        else{
            window.location.href = 'Output_page.html';
        }
    }
    else{
        window.location.href = 'Output_page.html';
    }
    if(document.getElementById("Purpose").value === "Office" && value === "less than $1000" && document.getElementById("chip").value === "Intel"){

    }

    // window.location.href = 'Output_page.html';
});




