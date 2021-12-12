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

document.getElementById("Build").addEventListener('click',async () => {
    var e = document.getElementById("Budget");
    var value = e.options[e.selectedIndex].value;
    var a = document.getElementById("chip");
    var avalue = a.options[a.selectedIndex].value;
    if (document.getElementById("Purpose").value === "Office" && value !== "less than $1000") {
        alert("Office purpose is not available in this budget");
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
    else{
        let pr = -1;
        let chip = document.getElementById("chip").value;
        if(document.getElementById("Budget").value === "less than $1000"){
            pr = 1000;
        }
        if(document.getElementById("Budget").value === "1000 to 2000"){
            pr = 1500;
        }
        if(document.getElementById("Budget").value === "2000 to 3000"){
            pr = 2000;
        }
        if(document.getElementById("Budget").value === "above 3000"){
            pr = 10000000;
        }

        let result = await makeChoice(chip,pr);
        console.log(result);
        lstorage.setItem("CPU", result.cpu.name);
        lstorage.setItem("cooler", result.cool.name);
        lstorage.setItem("GPU", result.GPU.GPU);
        lstorage.setItem("memory", result.mem.name);
        lstorage.setItem("motherboard" , result.mo.name);
        lstorage.setItem("pcCase", result.pcc.name);
        lstorage.setItem("powerSupply",result.ps.name);
        lstorage.setItem("Storage",result.st.name);
    }
    window.location.href = 'Output_page.html';
});




async function makeChoice(chip, pr) {

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
    for (let i = 0; i < 10; i++) {
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
        if ((parseInt(result.cpu.price) + parseInt(result.cool.price) + parseInt(result.GPU.price) + parseInt(result.mem.price) + parseInt(result.mo.price) + parseInt(result.pcc.price) + parseInt(result.ps.price) + parseInt(result.st.price)) < pr) {
            return result;
        }

    }
}







