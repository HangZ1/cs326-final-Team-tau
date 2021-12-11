const storage = window.sessionStorage

window.addEventListener('load', async() =>{
    if(storage.getItem('username')) {
        const url = '/getShoppingCart?name=' + storage.getItem('username');
        const response = await fetch(url);
        if (response.ok) {
            const responseJSON = await response.json();
            document.getElementById("CPU").value = responseJSON.CPU;
            document.getElementById("cooler").value = responseJSON.cooler;
            document.getElementById("GPU").value = responseJSON.GPU;
            document.getElementById("memory").value = responseJSON.Memory;
            document.getElementById("motherBoard").value = responseJSON.MotherBoard;
            document.getElementById("pcCase").value = responseJSON.Case;
            document.getElementById("powerSupply").value = responseJSON.Power;
            document.getElementById("storage").value = responseJSON.Storage;
        }
    }else{
        window.location.href="Signin_page.html";
    }
});

document.getElementById('helper').addEventListener('click', ()=> {
    window.location.href = 'Homepage.html';
});

document.getElementById('Signin').addEventListener('click',() => {
    storage.clear();
    alert("you just signed out")
    window.location.href = 'Homepage.html';

});

document.getElementById('back').addEventListener('click', ()=> {
   window.location.href='Output_page.html';
});

document.getElementById('D_cpu').addEventListener('click', async()=>{
    if (document.getElementById('CPU').value.length === 0){
        alert("There is no CPU in your cart");
    }else{
        const url = '/removeCPU?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_cooler').addEventListener('click', async()=>{
    if(document.getElementById('cooler').value.length ===0) {
        alert("There is no cooler in your cart")
    }else{
        const url = '/removeCooler?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_gpu').addEventListener('click', async()=>{
    if(document.getElementById('GPU').value.length ===0) {
        alert("There is no GPU in your cart")
    }else{
        const url = '/removeGPU?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_mem').addEventListener('click', async()=>{
    if(document.getElementById('memory').value.length ===0) {
        alert("There is no memory in your cart")
    }else{
        const url = '/removeMemory?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_mb').addEventListener('click', async()=>{
    if(document.getElementById('motherBoard').value.length ===0) {
        alert("There is no MotherBoard in your cart")
    }else{
        const url = '/removeMotherBoard?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_case').addEventListener('click', async()=>{
    if(document.getElementById('pcCase').value.length ===0) {
        alert("There is no PC Case in your cart")
    }else{
        const url = '/removeCase?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_pow').addEventListener('click', async()=>{
    if(document.getElementById('powerSupply').value.length ===0) {
        alert("There is no Power Supply in your cart")
    }else{
        const url = '/removePower?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});

document.getElementById('D_storage').addEventListener('click', async()=>{
    if(document.getElementById('storage').value.length ===0) {
        alert("There is no Storage in your cart")
    }else{
        const url = '/removeStorage?name=' + storage.getItem('username');
        const response = await fetch(url);
        if(response.ok){
            const responseTEXT = await response.text();
            if(responseTEXT === "removed"){
                alert("Item removed");
                window.location.href="ShoppingCart.html";
            }
        }
    }
});
