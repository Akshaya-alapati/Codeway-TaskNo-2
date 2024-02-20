document.addEventListener("DOMContentLoaded", function () {
    const display = document.forms["calc"]["display"];

    // Function to append value to the display
    function appendValue(value) {
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = "";
    }

    // Event listeners for number buttons
    for (let i = 0; i <= 9; i++) {
        const numButton = document.querySelector(`.num[value="${i}"]`);
        numButton.addEventListener("click", function () {
            appendValue(i);
        });
    }

    // Event listeners for operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(function (operatorButton) {
        operatorButton.addEventListener("click", function () {
            appendValue(operatorButton.value);
        });
    });

    // Event listener for the clear button
    const clearButton = document.querySelector(".operator[value='C']");
    clearButton.addEventListener("click", function () {
        clearDisplay();
    });

    // Event listener for the equals button
    const equalsButton = document.querySelector(".operator[value='=']");
    equalsButton.addEventListener("click", function () {
        display.value = eval(display.value);
    });
});
