const changecolor = () => {
    try {
        const getHTMLElement = document.querySelector(".my-text")
        getHTMLElement.style.color = "green";
        console.log("getHTMLElement")
    } catch (error) {
        console.log(error.message)
    }
}