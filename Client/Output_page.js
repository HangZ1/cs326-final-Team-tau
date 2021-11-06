async function get_output(){
    const url = 'http://localhost:8080/getPC/:component'
    const response = await fetch(url);
    if(response.ok){
        const responseJSON = await response.json();
        document.getElementById("processor").value = responseJSON.processor;
        document.getElementById("motherBoard").value = responseJSON.motherBoard;
        document.getElementById("graphicCard").value = responseJSON.graphiccard;
        document.getElementById("memory").value = responseJSON.memory;
        document.getElementById("storage").value = responseJSON.storage;
        document.getElementById("pcCase").value = responseJSON.pccase;
        document.getElementById("powerSupply").value = responseJSON.powersupply;
        document.getElementById("cpuCooler").value = responseJSON.cpucooler;
    }
}


async function push_cart(){
    const response = await fetch('http://localhost:8080/addtoShoppingCart/:user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            user: {processor:"1", motherBoard:"2", graphiccard:"3",memory:"4",storage:"5", pccase:"6",powersupply:"7", cpucooler:"8"}
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
    get_output();
});




    document.getElementById("shopping_cart").addEventListener('click', () => {
        window.location.href = 'ShoppingCart.html';
    })

    document.getElementById("back_select").addEventListener("click", () => {
        window.location.href = "Select.html"
    })
