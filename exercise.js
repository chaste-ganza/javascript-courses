function check() {
    let name = String(document.getElementById("admin").value);
    let result;

    if (name === "chaste") {
        result = "Welcome grand master";
    } else {
        result = "Who the fuck are you?";
    }

    document.getElementById("result").innerHTML = result;
}