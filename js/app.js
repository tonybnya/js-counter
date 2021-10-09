// initialize the counter to 0
let counter = 0;
// select the span value and all the buttons
const value = document.querySelector("#value");
const allBtn = document.querySelectorAll(".btn");

// set and event for each btn
allBtn.forEach(function (btn) {
    // add an click event for each button
    btn.addEventListener("click", function (event) {
        // get all classes inside the button container
        const styles = event.currentTarget.classList;
        // check each class and perform the right statement
        if (styles.contains("increase")) {
            // increment the counter
            counter++;
        } else if (styles.contains("decrease")) {
            // decrement the counter
            counter--;
        } else {
            // set the counter to 0
            counter = 0;
        }
        // set different colors whether is negative or positive
        if (counter > 0) {
            value.style.color = "green";
        } else if (counter < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
        // change the span by the value of the counter
        value.textContent = counter;
    });
});
