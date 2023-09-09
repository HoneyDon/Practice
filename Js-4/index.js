const changecolor = () => {
    try {
        const getHTMLElement = document.querySelector(".my-text")
        getHTMLElement.style.color = "green";
        console.log("getHTMLElement")
    } catch (error) {
        console.log(error.message)
    }
}

const createlist = () => {
    try {
        const getHTMLElement = document.querySelector(".inner-list")
        getHTMLElement.innerHTML += "<li>Item 1</li>"
    } catch (error) {
        console.log(error.message)
    }
}