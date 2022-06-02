let doc = document.getElementById("result");
doc.readOnly = true;
doc.placeholder = "0";
let indic = document.getElementById("indication");
indic.style.display = "none";
function display(val) {
    document.getElementById("result").value += val;
}

function reset() {
    document.getElementById("result").value = null;
    indic.style.display = "none";
}

function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x)
    document.getElementById("result").value = y;
    indic.style.display = "block";
}
/*function multiply(){
    let x = document.getElementById("result").value;
    reset();
    console.log(x);
    let y = document.getElementById("result").value;
    console.log(y);
    y = eval
    let result = x*y;
    console.log(result);
    document.getElementById("result").value = result;
}*/


