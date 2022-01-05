//eklediğimiz elemanlar buraya eklenecek
var data=[];
var count=0;

//yeni bir görev ekle
function AddTask(){
    // text areayaya girilen değeri , ıd si text olan textarenin içine girilen değeri getir.
    var taskValue= document.getElementById('task').Value;
    //oluşturulan task olan obje data arryinin itemi olur.
    
    var task={
      id:count,
      task:taskValue,
      statu:'to-do'
    }
    //objenin data arrayinin en sonuna eklenmesi
    data.push(task);
    //task eklendikten sonra içerisinin temizlenmesi için null kullanılır.
    document.getElementById('task').value=null
    FillData();
    count++;
}

function FillData(){
    var tempHTML="";

    for(var i=0; i<data.length;i++){
        if(data[i].statu=='to-do'){
            tempHTML+=' <!--  bootstrap compenend kısmından alındı -->'+
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend ">'+
                '<div class="input-group-prepend ">'+ 
                '<div class="input-group-text input-group-text-lg">'+
                     
                        '<input type="checkbox" aria-label="Checkbox for following text input">' +
                     ' </div>'+
                 '</div>'+
                 '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].task+'</p>'+
                 '<!-- sadece dış çizgisi olan bir buton -->'+
                 '<div class="input-group-append">'+
                     '<button class="btn btn-outline-primary" type="button"> <iclass="far fa-edit "></iclass=></button>'+
                    ' <button class="btn btn-outline-danger" type="button"> <i class="far fa-trash-alt"></i></button>'+
                 '</div>'+
             '</div>';
        }
    }
    document.getElementById('to-do').innerHTML=tempHTML;
}