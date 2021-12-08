document.getElementById('cancel').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
})

document.getElementById('signIn').addEventListener('click',() => {
    window.location.href = 'Signin_page.html';
})

document.getElementById('signUp').addEventListener('click',async ()=>{
    let un = document.getElementById('userName').value;
    let pw = document.getElementById('passWord').value;
    let cf = document.getElementById('confirm').value;
    if((un.length > 0) && ( pw.length > 0 )&& (cf.length > 0)){
        if(pw !== cf){
            alert('The password entered does not match');
        }
        else{
            if (await register(un, pw)) {
                alert("sign up successfully");
                window.location.href = 'Signin_page.html';
            }
        }
    }
    else{
        alert('please enter username or password');
    }
})

async function register(un, pw){
    const response = await fetch('/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: un ,
            password: pw
        })
    });
    if(response.ok){
        const responseTEXT = await response.text();
        if(responseTEXT === "Regist") {
            return true;
        }else{
            alert(responseTEXT);
        }
    }
}
