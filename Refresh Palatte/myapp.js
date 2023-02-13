const container = document.querySelector(".container")
// console.log(container);
const refreshBtn = document.querySelector(".refresh-btn");

const maxPalleteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i < maxPalleteBoxes; i++) {

        //generating a random hex code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16); // In JavaScript, the .toString(16) method is used to convert a number to a string in base 16 (hexadecimal)

        randomHex = `#${randomHex.padStart(6, "0")}`;
        // console.log(randomHex);
        
        //creating a new 'li' element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style = "background : ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`;
        //adding click event to current li element to copy the color
        color.addEventListener('click', () => copyColor(color, randomHex))

        container.appendChild(color);
    }
    
}
generatePalette();

const copyColor = (elem, hexVal) => {
    // console.log(elem, hexVal)
    const colorElement = elem.querySelector(".hex-value");
    //Copying the hex value, updating the text to copied, and changing text back to original hex value after 1 second 
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = 'Copied';
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!")); //showing alert if color can't be copied.
}

refreshBtn.addEventListener("click", generatePalette);