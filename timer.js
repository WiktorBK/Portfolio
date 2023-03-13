function timer()
{
    var dzisiaj = new Date();
    var godzina = dzisiaj.getHours();
    var minuta = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();

    if (godzina < 10) godzina="0"+godzina;
    if (sekunda < 10) sekunda="0"+sekunda;
    if (minuta < 10) minuta="0"+minuta;
    
    document.getElementById("time").innerHTML =
    godzina + ":" + minuta + ":" + sekunda;

    setTimeout("timer()", 1000);
}
