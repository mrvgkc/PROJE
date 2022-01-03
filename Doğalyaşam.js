// $('.option').click(function(){
//     $('.option').removeClass('active');
//     $(this).addClass('active');
//  })

function burcbul() {
    document.form1.gun.selectedIndex;
    document.form1.ay.selectedIndex;
    document.form1.burc.value;
    if (document.form1.ay.selectedIndex == 1 && document.form1.gun.selectedIndex <= 19) { document.form1.burc.value = "Oğlak"; }
    if (document.form1.ay.selectedIndex == 1 && document.form1.gun.selectedIndex >= 20) { document.form1.burc.value = "Kova"; }
    if (document.form1.ay.selectedIndex == 2 && document.form1.gun.selectedIndex <= 18) { document.form1.burc.value = "Kova"; }
    if (document.form1.ay.selectedIndex == 2 && document.form1.gun.selectedIndex >= 19) { document.form1.burc.value = "Balık"; }
    if (document.form1.ay.selectedIndex == 3 && document.form1.gun.selectedIndex <= 20) { document.form1.burc.value = "Balık"; }
    if (document.form1.ay.selectedIndex == 3 && document.form1.gun.selectedIndex >= 21) { document.form1.burc.value = "Koç"; }
    if (document.form1.ay.selectedIndex == 4 && document.form1.gun.selectedIndex <= 20) { document.form1.burc.value = "Koç"; }
    if (document.form1.ay.selectedIndex == 4 && document.form1.gun.selectedIndex >= 21) { document.form1.burc.value = "Boğa"; }
    if (document.form1.ay.selectedIndex == 5 && document.form1.gun.selectedIndex <= 20) { document.form1.burc.value = "Boğa"; }
    if (document.form1.ay.selectedIndex == 5 && document.form1.gun.selectedIndex >= 21) { document.form1.burc.value = "İkizler"; }
    if (document.form1.ay.selectedIndex == 6 && document.form1.gun.selectedIndex <= 20) { document.form1.burc.value = "İkizler"; }
    if (document.form1.ay.selectedIndex == 6 && document.form1.gun.selectedIndex >= 21) { document.form1.burc.value = "Yengeç"; }
    if (document.form1.ay.selectedIndex == 7 && document.form1.gun.selectedIndex <= 21) { document.form1.burc.value = "Yengeç"; }
    if (document.form1.ay.selectedIndex == 7 && document.form1.gun.selectedIndex >= 22) { document.form1.burc.value = "Aslan"; }
    if (document.form1.ay.selectedIndex == 8 && document.form1.gun.selectedIndex <= 21) { document.form1.burc.value = "Aslan"; }
    if (document.form1.ay.selectedIndex == 8 && document.form1.gun.selectedIndex >= 22) { document.form1.burc.value = "Başak"; } //www.bilisimogretmeni.com
    if (document.form1.ay.selectedIndex == 9 && document.form1.gun.selectedIndex <= 21) { document.form1.burc.value = "Başak"; }
    if (document.form1.ay.selectedIndex == 9 && document.form1.gun.selectedIndex >= 22) { document.form1.burc.value = "Terazi"; }
    if (document.form1.ay.selectedIndex == 10 && document.form1.gun.selectedIndex <= 21) { document.form1.burc.value = "Terazi"; }
    if (document.form1.ay.selectedIndex == 10 && document.form1.gun.selectedIndex >= 22) { document.form1.burc.value = "Akrep"; }
    if (document.form1.ay.selectedIndex == 11 && document.form1.gun.selectedIndex <= 21) { document.form1.burc.value = "Akrep"; }
    if (document.form1.ay.selectedIndex == 11 && document.form1.gun.selectedIndex >= 22) { document.form1.burc.value = "Yay"; }
    if (document.form1.ay.selectedIndex == 12 && document.form1.gun.selectedIndex <= 20) { document.form1.burc.value = "Yay"; }
    if (document.form1.ay.selectedIndex == 12 && document.form1.gun.selectedIndex >= 21) { document.form1.burc.value = "Oğlak"; }

    if (document.form1.ay.selectedIndex == "x" || document.form1.gun.selectedIndex == "y") return;
}

function validate() {
    if (document.form1.ay.selectedIndex == 2 && document.form1.gun.selectedIndex > 29) { alert("Şubat ayında en fazla 29 gün seçebilirsiniz"); return false; }
    if (document.form1.ay.selectedIndex == 4 && document.form1.gun.selectedIndex == 31) { alert("Nisan ayında sadece 30 gün vardır."); return false; }
    if (document.form1.ay.selectedIndex == 6 && document.form1.gun.selectedIndex == 31) { alert("Haziran ayında sadece 30 gün vardır."); return false; }
    if (document.form1.ay.selectedIndex == 9 && document.form1.gun.selectedIndex == 31) { alert("Eylül ayında sadece 30 gün vardır."); return false; } //www.bilisimogretmeni.com
    if (document.form1.ay.selectedIndex == 11 && document.form1.gun.selectedIndex == 31) { alert("Kasım ayında sadece 30 gün vardır."); return false; }
    else {
        return true;
    }
}

