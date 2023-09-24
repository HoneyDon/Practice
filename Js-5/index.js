// index.js

// Get the input and result elements
var result = document.getElementById("result");
var buttons = document.querySelectorAll("#calcu input[type='button']");

// Add click event listeners to the buttons
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var value = button.value;

        if (value === "=") {
            try {
                // Evaluate the expression and update the result
                result.value = eval(result.value);
            } catch (error) {
                // Handle error and display "Error" in case of invalid expression
                result.value = "Error";
            }
        } else if (value === "c") {
            // Clear the input field
            result.value = "";
        } else {
            // Append the button value to the input field
            result.value += value;
        }
    });
});