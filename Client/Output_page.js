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
    if(response.ok){
        const responseTEXT = await response.text();
        if(responseTEXT === 'added'){
            return true;
        }
    }
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
});


document.getElementById("shopping_cart").addEventListener('click', () => {
    window.location.href = 'ShoppingCart.html';
});

document.getElementById("back_select").addEventListener("click", () => {
    window.location.href = "Select.html"
});
