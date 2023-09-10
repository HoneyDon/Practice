const changecolor = () => {
    try {
        const getHTMLElement = document.querySelector(".my-text")
        getHTMLElement.style.color = "green";
        console.log("getHTMLElement")
    } catch (error) {
        console.log(error.message)
    }
}

// CREATING LIST

const innercreatelist = () => {
    try {
        const getHTMLElement = document.querySelector(".inner-list")
        getHTMLElement.innerHTML += "<li>Made using Inner-HTML</li>"
    } catch (error) {
        console.log(error.message)
    }
}

const createlist = () => {
    try {
        const getHTMLElement = document.querySelector(".create-list")
        const createLi = document.createElement("li");
        createLi.innerText = "Made using Create-Element";
        getHTMLElement.appendChild(createLi);
    } catch (error) {
        console.log(error.message)
    }
}

// Creating Table

