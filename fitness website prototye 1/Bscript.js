
function myFunction() {

    let hei = document.getElementById("hei").value;
    let wei = document.getElementById("wei").value;
    let age = document.getElementById("ema").value;

    let Bmi = Number(wei / Math.pow(hei, 2));
    // document.getElementById("bmisco").innerHTML = Bmi;

    document.getElementById("bmisco").innerHTML = Bmi;




}