window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendseconds = document.getElementById('seconds');
    var appendtens = document.getElementById('tens');
    var buttonStart = document.getElementById('button-start');
    var buttonPause = document.getElementById('button-pause');
    var buttonReset = document.getElementById('button-reset');
    var date = document.getElementById('date');
    var hora = document.getElementById('hora');
    var interval;
    var systemDate = new Date();
    var currentDate =
        systemDate.toLocaleString("pt", { day: 'numeric', month: 'long', year: 'numeric' })
    date.innerHTML = currentDate;

    var clock = () => {

        systemDate.setSeconds(systemDate.getSeconds() + 1);

        var hour = systemDate.getHours();
        var minutes = systemDate.getMinutes();
        var secondes = systemDate.getSeconds();

        if (hour <= 9) {
            hour = '0' + hour
        }

        if (minutes <= 9) {
            minutes = '0' + minutes
        }

        if (secondes <= 9) {
            secondes = "0" + secondes
        }

        hora.innerHTML = `${hour} : ${minutes} : ${secondes}`
    }

    clock(); // chamei a função aqui para evitar um daley de 1 seg. no carregamente do relógio(na pagweb) por conta do setinterval abaixo

    var time = setInterval(clock, 1000);


    buttonStart.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTime, 10)
    }

    buttonPause.onclick = () => {
        clearInterval(interval);
    }

    buttonReset.onclick = () => {
        clearInterval(interval);
        seconds = "00";
        tens = "00";

        appendseconds.innerHTML = seconds;
        appendtens.innerHTML = tens;
    }

    let startTime = () => {
        tens++
        if (tens <= 9) {
            appendtens.innerHTML = '0' + tens;
        } else {
            appendtens.innerHTML = tens;

        }
        if (tens > 99) {
            seconds++
            appendseconds.innerHTML = '0' + seconds;
            tens = 00;

        } if (seconds > 9) {
            appendseconds.innerHTML = seconds;

        }

    }

}