function calculate() {
    clearChart(chart);
    var v1=parseFloat(document.getElementById('v1').value);
    var v2=parseFloat(document.getElementById('v2').value);
    var v3=parseInt(document.getElementById('v3').value);
    var v4=parseInt(document.getElementById('v4').value);
    var i;
    var total = 0;
    var yearlyDividend=0;
    var totalDividends=0;

    for (i=0; i < v3; i++) {
        if (v4 == 1) {
            totalDividends = totalDividends + (v1 * (v2 / 100));
            v1 = v1 * (1 + (v2 / 100));
        } else {
            totalDividends = totalDividends + (v1 * (v2 / 100));
        }
        yearlyDividend = v1 * (v2 / 100);
        updateChart(chart, i, totalDividends);
    }

    if (v4 == 1) {
        total = v1;
    } else {
        total = v1 + totalDividends;
    }

    total = total.toFixed(2);
    yearlyDividend = yearlyDividend.toFixed(2);
    totalDividends = totalDividends.toFixed(2);
    v1 = v1.toFixed(2);

    var acc=document.getElementById('acc');
    acc.value=v1;
    var yDiv=document.getElementById('yDiv');
    yDiv.value=yearlyDividend;
    var tDiv=document.getElementById('tDiv');
    tDiv.value=totalDividends;
    var sum=document.getElementById('sum');
    sum.value=total;
}

function emailcheck (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function myFunction() {
    var x, y, z, zlen, xlen, err1, err2, err3, post;

    x = document.getElementById("nameInput").value;
    y = document.getElementById("emailInput").value;
    z = document.getElementById("messageInput").value;

    document.getElementById("VE1").innerHTML = '';
    document.getElementById("VE2").innerHTML = '';
    document.getElementById("VE3").innerHTML = '';


    zlen = z.split(" ").length;
    xlen = x.split(" ").length;
    post = 1;

    // If x is Not a Number or less than one or greater than 10
    if (zlen < 10) {
        err1 = "Too few words in message field";
        document.getElementById("VE1").innerHTML = err1;
        post = 0;
    }
    if (emailcheck(y) == false) {
        err2 = "Email is not valid";
        document.getElementById("VE2").innerHTML = err2;
        post = 0;
    }
    if (xlen < 2) {
        err3 = "Enter both first and last name";
        document.getElementById("VE3").innerHTML = err3;
        post = 0;
    }

    if (post == 1) {
        document.getElementById("contactForm").submit();
    }

}
