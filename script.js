let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //This part is evaluating the numbers when clicked on =
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string
        }
        //This part is CLEARING the input box when clicked on AC ...
        else if (e.target.innerHTML == "AC") {
            string = " "
            document.querySelector("input").value = string
        }
        else {
            //This part is only displaying the clicked button the input box..
            // console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector("input").value = string
        }


    })
})