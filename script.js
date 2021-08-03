function calage() {
    var inputage = document.getElementById("dob").value;

    var ud = Date.parse(inputage);
    var nd = Date.now();

    var ageinmilli = nd - ud;

    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;

    var yy = Math.round(ageinmilli / years);


    var months = yy * 12;
    var day = yy * 365;
    var hour = yy * Math.round(ageinmilli / hours);

    let btnClear = document.querySelector('button');
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
    })

    document.getElementById("ears").innerHTML = yy;

    document.getElementById("nths").innerHTML = months;

    document.getElementById("ays").innerHTML = day;

    document.getElementById("ours").innerHTML = hour;
}