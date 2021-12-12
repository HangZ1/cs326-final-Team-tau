const storage = window.sessionStorage
const lstorage = window.localStorage

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

    if(storage.getItem('username')) {
        if(lstorage.getItem("CPU")){
            document.getElementById("CPU").value = lstorage.getItem("CPU");
            document.getElementById("cooler").value = lstorage.getItem("cooler");
            document.getElementById("GPU").value = lstorage.getItem("GPU");
            document.getElementById("memory").value = lstorage.getItem("memory");
            document.getElementById("motherboard").value = lstorage.getItem("motherboard");
            document.getElementById("pcCase").value = lstorage.getItem("pcCase");
            document.getElementById("powerSupply").value = lstorage.getItem("powerSupply");
            document.getElementById("Storage").value = lstorage.getItem("Storage");
            lstorage.clear();
        }
        else{
            document.getElementById("CPU").value = '';
            document.getElementById("cooler").value = '';
            document.getElementById("GPU").value = '';
            document.getElementById("memory").value = '';
            document.getElementById("motherboard").value = '';
            document.getElementById("pcCase").value = '';
            document.getElementById("powerSupply").value = '';
            document.getElementById("Storage").value = '';
        }
    }else{
        window.location.href='Signin_page.html';
    }
    if(document.getElementById("GPU").value !== "GTX1660" && document.getElementById("GPU").value !== "GTX1650SUPER" && document.getElementById("GPU").value !== "integrated video card" && document.getElementById("GPU").value !== "gt710"){
        document.getElementById("tip").innerText += "Due to the influence of cryptocurrency, the price of mid-range and high-end gaming graphics cards is unreasonable and fluctuates significantly, and there are mining cards circulating in the market.\n";
    }
    if(document.getElementById("GPU").value !== "GTX1660" && document.getElementById("GPU").value !== "GTX1650SUPER" && document.getElementById("GPU").value !== "integrated video card"&& document.getElementById("GPU").value !== "gt710"){
        document.getElementById("tip").innerText += "For a better gaming experience, we recommend that you use a monitor with at least 1080p and a 144hz refresh rate. \n";
    }
    if(document.getElementById("Storage").value === "SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe"){
        document.getElementById("tip").innerText += "If you don't have high-capacity storage needs, we suggest you choose SAMSUNG 970 EVO Plus SSD 1TB - M.2 NVMe which has better Cost-effectiveness\n";
    }
    if((document.getElementById("GPU").value === "RTX3080" ||document.getElementById("GPU").value === "RTX3090") && (document.getElementById("powerSupply").value !== "ASUS ROG STRIX 1000W Gold PSU, Power Supply")){
        document.getElementById("tip").innerText += "In view of the high power consumption of this graphics card, if you want to give full play to the performance of the graphics card such as overclocking graphics cards, we recommend that you use ASUS ROG STRIX 1000W Gold PSU.\n";
    }
    if(document.getElementById("GPU").value === "integrated video card" && document.getElementById("GPU").value !== "gt710"){
        document.getElementById("tip").innerText += "If you want to play some video games with this set or have light game performance, we suggest you use GTX1650SUPER at least instead\n";
    }
});

document.getElementById('Signout').addEventListener('click', ()=> {
    storage.clear();
    alert("you just signed out")
    window.location.href = 'Homepage.html';
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
document.getElementById('helper').addEventListener('click',() => {
    window.location.href = 'Homepage.html';
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


