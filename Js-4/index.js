const changecolor = () => {
    try {
        const getHTMLElement = document.querySelector(".my-text");
        getHTMLElement.style.color = "Green";
        console.log("getHTMLElement");
    } catch (error) {
        console.log(error.messagge)
    }
}