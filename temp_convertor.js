function ftoc ()
{
let tempF = document.getElementById("tempf").value;
let c = (5/9.0) * (tempF-32);
document.getElementById("tempc").value = Math.round(c);



}

function ctof ()
{
let tempC = document.getElementById("tempc").value;
let f = ((9 * tempC) / 5.0) + 32;
document.getElementById("tempf").value = Math.round(f);



}
