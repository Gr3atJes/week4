function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "You Just added a text field ");
    document.body.appendChild(x);
}
function myFunctionTwo() {
    var y = document.createElement("INPUT");
    y.setAttribute("type", "radio");
    document.body.appendChild(y);
}

function myFunction() {
    var x = document.getElementById("myCheck");
    x.checked = true;
}