function main_function() {

    if (document.getElementById("button").innerHTML == "JUM") {
        console.log("first condition");
        document.getElementById("button").innerHTML = "JUMP";
        var text = document.getElementById("left-box").value;
        document.getElementById("right-box").value = text;
        document.getElementById("left-box").value = "";
        
    } else if (document.getElementById("button").innerHTML == "JUMP") {
        console.log("second condition");
        document.getElementById("button").innerHTML = "JUM"
        var text = document.getElementById("right-box").value;
        document.getElementById("left-box").value = text;
        document.getElementById("right-box").value = "";
    }
}
