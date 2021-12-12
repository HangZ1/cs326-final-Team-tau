const storage = window.sessionStorage
const lstorage = window.localStorage

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
    var value = e.options[e.selectedIndex].value;
    var a = document.getElementById("chip");
    var avalue = a.options[a.selectedIndex].value;
    if (document.getElementById("Purpose").value === "Office") {
        if ((value !== "less than $1000")) {
            alert("Office purpose is not available in this budget");
        } else {
            window.location.href = 'Output_page.html';
        }
    } else if (avalue === "AMD" && document.getElementById("Purpose").value === "Gaming") {
        if (value === "less than $1000") {
            alert("Due to the high price of AMD cpu, Gaming under $1000 with AMD platform is not valid");
        } else {
            window.location.href = 'Output_page.html';
        }
    } else {
        window.location.href = 'Output_page.html';
    }
    if (document.getElementById("Purpose").value === "Office" && value === "less than $1000" && document.getElementById("chip").value === "Intel") {
        lstorage.setItem("CPU", "i3-10100");
        lstorage.setItem("cooler", "CPU its own fans");
        lstorage.setItem("GPU", "integrated video card");
        lstorage.setItem("memory", "PNY Performance 8GB DDR4 2666MHz");
        lstorage.setItem("motherboard" , "MSI H510M-A PRO ProSeries Motherboard");
        lstorage.setItem("pcCase", "NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case");
        lstorage.setItem("powerSupply","EVGA SuperNOVA 550 G3, 80 Plus Gold 550W");
        lstorage.setItem("Storage","Kingston 240GB A400 SATA 3 2.5 Internal SSD SA400S37/240G");
    }
    if (document.getElementById("Purpose").value === "Office" && value === "less than $1000" && document.getElementById("chip").value === "AMD") {
        lstorage.setItem("CPU", "5600X");
        lstorage.setItem("cooler", "Thermaltake UX100 5V");
        lstorage.setItem("GPU", "gt710");
        lstorage.setItem("memory", "PNY Performance 8GB DDR4 2666MHz");
        lstorage.setItem("motherboard" , "MSI B550M PRO ProSeries Motherboard");
        lstorage.setItem("pcCase", "NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case");
        lstorage.setItem("powerSupply","EVGA SuperNOVA 550 G3, 80 Plus Gold 550W");
        lstorage.setItem("Storage","Kingston 240GB A400 SATA 3 2.5 Internal SSD SA400S37/240G");
    }

    // window.location.href = 'Output_page.html';
});



async function makeChoice(chip, pr) {
    let result = {};
    const coolerUrl = "/getAllcooler";
    const GPUUrl = "/getAllGPU";
    const MEMUrl = "/getAllMEM";
    const MotherBoardUrl = "/getAllMotherBoard";
    const PCCaseUrl = "/getAllPCCase";
    const PSUrl = "/getAllPS";
    const StorageUrl = "/getAllStorage";

    let cool = await (await fetch(coolerUrl)).json();
    let GPU = await (await fetch(GPUUrl)).json();
    let MEM = await (await fetch(MEMUrl)).json();
    let Mo = await (await fetch(MotherBoardUrl)).json();
    let PCC = await (await fetch(PCCaseUrl)).json();
    let PS = await (await fetch(PSUrl)).json();
    let St = await (await fetch(StorageUrl)).json();

    cool = cool.sort((a, b) => b.price - a.price);
    GPU = GPU.sort((a, b) => b.price - a.price);
    MEM = MEM.sort((a, b) => b.price - a.price);
    Mo = Mo.sort((a, b) => b.price - a.price);
    PCC = PCC.sort((a, b) => b.price - a.price);
    PS = PS.sort((a, b) => b.price - a.price);
    St = cool.sort((a, b) => b.price - a.price);
    if (chip === "AMD") {
        const CUrl = "/getCPUbyCompany?company=AMD"
        let CPU = await (await fetch(CUrl)).json();
        CPU = CPU.sort((a, b) => b.price - a.price);
        return helper(CPU,cool,GPU,MEM,Mo,PCC,PS,St,pr);
    }
    else if (chip === "INTEL") {
        const CUrl = "/getCPUbyCompany?company=INTEL"
        let CPU = await (await fetch(CUrl)).json();
        CPU = CPU.sort((a, b) => b.price - a.price);
        return helper(CPU,cool,GPU,MEM,Mo,PCC,PS,St,pr);
    }

}

function helper(CPU,cool,GPU,MEM,Mo,PCC,PS,St,pr) {
    let result = {};
    for (let i = 0; i < MEM.length; i++) {
        if (i < CPU.length) {
            result.cpu = CPU[i];
        }
        if (i < cool.length) {
            result.cool = cool[i];
        }
        if (i < GPU.length) {
            result.GPU = GPU[i];
        }
        if (i < MEM.length) {
            result.mem = MEM[i];
        }
        if (i < Mo.length) {
            result.mo = Mo[i];
        }
        if (i < PCC.length) {
            result.pcc = PCC[i];
        }
        if (i < PS.length) {
            result.ps = PS[i];
        }
        if (i < St.length) {
            result.st = St[i];
        }
        if ((CPU[i].price + cool[i].price + GPU[i].price + MEM[i].price + Mo[i].price + PCC[i].price + PS[i].price + St[i].price) < pr) {
            return result;
        }
    }
}





