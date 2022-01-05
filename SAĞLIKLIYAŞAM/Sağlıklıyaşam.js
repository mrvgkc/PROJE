function hesapla() {
    var kilo = document.KitleForm.kilo.value
    var boy = document.KitleForm.boy.value
    if(kilo > 0 && boy > 0){  
    var sonuc = kilo/(boy/100*boy/100)
    document.KitleForm.endeks.value = sonuc
    if(sonuc < 18.5){
    document.KitleForm.islemsonucu.value = "Zayıfsınız."
    }
    if(sonuc > 18.5 && sonuc < 25){
    document.KitleForm.islemsonucu.value = "Gayet Sağlıklı."
    }
    if(sonuc > 25){
    document.KitleForm.islemsonucu.value = "Vücut kitle indeksiniz olması gerekenden fazla."
    }
    }
    else{
    alert("Lütfen bir değer giriniz:")
    }
 }

 