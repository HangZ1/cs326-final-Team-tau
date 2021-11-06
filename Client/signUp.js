document.getElementById('cancel').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
})

document.getElementById('signIn').addEventListener('click',() => {
    window.location.href = 'Signin_page.html';
})


document.getElementById('signUp').addEventListener('click',()=>{
    let un = document.getElementById('userName').value;
    let pw = document.getElementById('passWord').value;
    let cf = document.getElementById('confirm').value;
    if((un.length > 0) && ( pw.length > 0 )&& (cf.length > 0)){
        if(pw !== cf){
            alert('The password entered does not match');
        }
        else{
            register(un,pw);
        }
    }
    else{
        alert('please enter username or password');
    }
})

async function register(un, pw){
    const response = await fetch('http://localhost:8080//Register?name=' + un +'&password=' + pw);
    if(response.ok){
        return await response.text();
    }
}