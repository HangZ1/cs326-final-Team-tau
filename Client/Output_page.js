const storage = window.sessionStorage



async function push_cart(){
    const response = await fetch('/addShoppingCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            cpu: document.getElementById("CPU").value,
            cool: document.getElementById("cooler").value,
            gpu: document.getElementById("GPU").value,
            mem: document.getElementById("memory").value,
            mb: document.getElementById("motherboard").value,
            pcase: document.getElementById("pcCase").value,
            ps: document.getElementById("powerSupply").value,
            st: document.getElementById("Storage").value
        })
    });
}

window.addEventListener('load', () =>{
    document.getElementById("CPU").value = 'responseJSON.processor';
    document.getElementById("cooler").value = 'responseJSON.motherBoard';
    document.getElementById("GPU").value = 'responseJSON.graphiccard';
    document.getElementById("memory").value = 'responseJSON.memory';
    document.getElementById("motherboard").value = 'responseJSON.storage';
    document.getElementById("pcCase").value = 'responseJSON.pccase';
    document.getElementById("powerSupply").value = 'responseJSON.powersupply';
    document.getElementById("Storage").value = 'responseJSON.cpucooler';
});

document.getElementById('allToCart').addEventListener('click', ()=>{
    push_cart()
    alert("All component added to cart");
});


document.getElementById("shopping_cart").addEventListener('click', () => {
    window.location.href = 'ShoppingCart.html';
});

document.getElementById("back_select").addEventListener("click", () => {
    window.location.href = "Select.html"
});

document.getElementById('A_cpu').addEventListener("click", async() => {
    const response = await fetch('/addUserCPU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            cpu: document.getElementById("CPU").value,
        })
    });
});

document.getElementById('A_cooler').addEventListener("click", async() => {
    const response = await fetch('/addUsercooler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            cool: document.getElementById("cooler").value,
        })
    });
});

document.getElementById('A_gpu').addEventListener("click", async() => {
    const response = await fetch('/addUserGPU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            gpu: document.getElementById("GPU").value,
        })
    });
});

document.getElementById('A_meme').addEventListener("click", async() => {
    const response = await fetch('/addUserMemory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            mem: document.getElementById("memory").value,
        })
    });
});

document.getElementById('A_mb').addEventListener("click", async() => {
    const response = await fetch('/addUserMoterboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            mb: document.getElementById("motherboard").value,
        })
    });
});

document.getElementById('A_case').addEventListener("click", async() => {
    const response = await fetch('/addUserPCcase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            pcase: document.getElementById("pcCase").value,
        })
    });
});

document.getElementById('A_ps').addEventListener("click", async() => {
    const response = await fetch('/addUserPower', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            ps: document.getElementById("powerSupply").value,
        })
    });
});

document.getElementById('A_stor').addEventListener("click", async() => {
    const response = await fetch('/addUserStorage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            name: storage.getItem('username') ,
            st: document.getElementById("Storage").value
        })
    });
});
