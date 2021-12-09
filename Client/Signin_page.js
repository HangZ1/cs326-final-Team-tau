const storage = window.sessionStorage

async function Login_status(n, p){
    const user_name =n;
    const pass_word =p;
    const url = '/Login?name=' + user_name +'&password=' + pass_word;
    const response = await fetch(url);
     if(response.ok){
        const responseTEXT = await response.text();
        if(responseTEXT === "login") {
            storage.setItem('username', user_name);
            alert("you just signed in");
            return true;
        }else{
            alert(responseTEXT);
            return false;
        }
     }
}


document.getElementById("cancel_sign_in_button").addEventListener('click', () => {
    window.location.href = 'Homepage.html';
});

document.getElementById("sign_up_sign_in_button").addEventListener('click', () => {
    window.location.href = 'SignUp_page.html';
});

document.getElementById("sign_in_button").addEventListener('click', async () => {
    let Uname = document.getElementById('userName').value;
    let Pword = document.getElementById('passWord').value;
    if(Uname.length===0){
        alert("Username can not be empty");
    }else if(Pword.length===0){
        alert("Password can not be empty");
    }else{
        if(await Login_status(Uname, Pword)){
            window.location.href = 'Homepage.html';
        }
    }
});

