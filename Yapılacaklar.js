//İD si parantez içerisinde olan html kodlarına etki eden let tipinde tanımlı 4 satır
let submitButonu = document.getElementById('submit');
let toplama = document.getElementById('toplama');
let inputText = document.getElementById('inputText');
let dropButonu = document.getElementById('drop');
//submitButonu değişkenine click : tıklanıldığında fonksiyonu çağır
//tıklanıldığında paragraf elementi olan p nin oluşturulurması ve sonra içerisine yazılan yazının ekle butonuna basıldığında aşağıya geçmesini sağlamak inputText.value=""; ile yazı yazılıp eklenildikten sonra butonun içerisinin boş kalmasını sağlarız. 
submitButonu.addEventListener('click',function(){
  let paragraf = document.createElement('p');
  paragraf.classList.add('paragraf-style');
  toplama.appendChild(paragraf);
  paragraf.innerHTML=inputText.value;
  inputText.value="";
  
  //eklenen maddelerin üstüne tıklanıdığında onu silmeye yarar
  paragraf.addEventListener('click',function(){
        toplama.removeChild(paragraf);
  })
  // temizle butonunun tüm listeyi silmesini sağlar.
  dropButonu.addEventListener('click',function(){
          paragraf.remove();
  })


})