let historyList = document.getElementById("historyList");

let savedHistory = localStorage.getItem("history");
    if(savedHistory){
        historyList.innerHTML = savedHistory;
    }

let display = document.getElementById("display");


function add(value){

    if(value === "/"){
        display.value += " ÷ ";
    }
    else if(value === "*"){
        display.value += " × ";
    }
    else{
        display.value += value;
    }

}


function ClearDisplay(){
    display.value = "";
}


function calculate(){

    try{

        let expression = display.value;

        expression = expression
        .replace(/÷/g, "/")
        .replace(/×/g, "*")
        .replace(/%/g, "/100");

        let result = eval(expression);

        let historyItem = document.createElement("li");
        historyItem.textContent = display.value + " = " + result;

        historyList.prepend(historyItem);
        localStorage.setItem("history", historyList.innerHTML)

        display.value = result;

    }catch{
        display.value = "Erro";
    }

}


function backspace(){
        display.value = display.value.slice(0, -1);
}


document.addEventListener("keydown", function(evente){
    let key = evente.key;

    if(!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/"){
        add(key);
    }

    if(key === "%"){
        add("%");
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        backspace();
    }

    if(key === "Escape"){
        ClearDisplay();
    }

})
    
function clearHistory(){
    historyList.innerHTML = "";
    localStorage.removeItem("history");
}

// Sessão 'Tema'
function toggleTheme(){
    document.body.classList.toggle("ligth-mode");
}