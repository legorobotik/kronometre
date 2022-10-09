window.onload = function () {
    var saniye = 00;
    var salise = 00;
    var saniyeElemani = document.getElementById('saniye');
    var saliseElemani = document.getElementById('salise');
    var baslamaButonu = document.getElementById('baslama');
    var durdurmaButonu = document.getElementById('durdurma');
    var sifirlamaButonu = document.getElementById('sifirlama');
    var Interval;
    const NONE = "none";
    const INLINE = "inline";

    swapDisplay(INLINE, NONE);

    baslamaButonu.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(zamaniBaslat, 10);
        swapDisplay(NONE, INLINE);
        baslamaButonu.style.display = "none";
        durdurmaButonu.style.display = "inline";
    }

    durdurmaButonu.onclick = function () {
        clearInterval(Interval);
        swapDisplay(INLINE, NONE);
        baslamaButonu.innerHTML = 'Devam';
    }

    sifirlamaButonu.onclick = function () {
        clearInterval(Interval);
        salise = "00";
        saniye = "00";
        saliseElemani.innerHTML = salise;
        saniyeElemani.innerHTML = saniye;
        baslamaButonu.innerHTML = 'Başla';
        swapDisplay(INLINE, NONE);
    }

    function zamaniBaslat() {
        salise++;

        if (salise <= 9) {
            saliseElemani.innerHTML = "0" + salise;
        }

        if (salise > 9) {
            saliseElemani.innerHTML = salise;
        }
        if (salise > 99) {
            console.log("saniye");
            saniye++;
            saniyeElemani.innerHTML = "0" + saniye;
            salise = 0;
            saliseElemani.innerHTML = "0" + 0;
        }

        if (saniye > 9) {
            saniyeElemani.innerHTML = saniye;
        }
    }

    function swapDisplay(basla, durdur) {
        baslamaButonu.style.display = basla;
        durdurmaButonu.style.display = durdur;
    }
}