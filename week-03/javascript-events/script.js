function changeButtonText() {
    const button = document.getElementById("target")
    if(button.innerHTML !== "I was clicked") {
        button.innerHTML = "I was clicked"
    } else {
        button.innerHTML = "CLick ME"
    }
}

