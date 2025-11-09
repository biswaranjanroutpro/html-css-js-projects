const inputBox = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");


let result = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '=') {
            result = eval(result);
            inputBox.value = result;
        } else if (e.target.innerHTML == 'AC') {
            result = "";
            inputBox.value = result;
        } else if(e.target.innerHTML == 'DEL') {
            result = result.slice(0, -1);
            inputBox.value = result;
        }
         else {
            result += e.target.innerHTML;
            inputBox.value = result;
        }
    });
});
