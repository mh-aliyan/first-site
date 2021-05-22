function error(){

    var a = document.getElementById('check');
    var newvar = 0;
    var count;
    for(count=0; count<a.lenght; count++){
        if(a[count].checked==true){
            newvar = newvar +1;
        }
    }
        if(newvar>=5){
            document.getElementById('notvalid').innerHTML='لطفا فقط یک گزینه را انتخاب کنید'
            return false;
        }
}