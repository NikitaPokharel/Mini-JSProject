const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    // console.log(filterInput)
    // let reverseInput = filterInput.split("") //just checking
    // console.log(reverseInput);
    // let reverseInput = filterInput.split("").reverse()//just checking
    // console.log(reverseInput)

    //splitting user input character, reversing them, and joining them in a single word.
    let reverseInput = filterInput.split("").reverse().join("")
    infoTxt.style.display = "block";

    // console.log(reverseInput)
    // console.log(filterInput, reverseInput)

    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span> '${txtInput.value}'</span> isn't  a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span> '${txtInput.value}'</span> is  a palindrome!`;
})

txtInput.addEventListener("keyup", () => {
    //removing spaces and all special characters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    // console.log(filterInput)
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});