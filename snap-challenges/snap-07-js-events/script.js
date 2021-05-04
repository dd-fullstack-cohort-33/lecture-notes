function onClick() {
    const button = document.getElementById("target")

    if(  button.style.backgroundColor === "red") {
        button.style.backgroundColor = "blue"
    } else {
        button.style.backgroundColor = "red"
    }
    console.log(button.style)
}