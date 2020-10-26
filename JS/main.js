var app = new Vue({
    // Arnulfo sarmiento
    el: '#app',
    data: {
     cantP:0,
     porcM:100,
     cantR:0,
     rta:"--",
    }, 
    methods:{ 
        porcentajes:function(){
        this.rta=(this.cantR*this.porcM)/this.cantP;
         if(this.rta==100){
             this.rta="excelente";
         }else if(this.rta>=91 && this.rta<=99){
             this.rta="Muy bueno";
         }else if(this.rta>=61 && this.rta<=91){
             this.rta="Bueno";
         }else if(this.rta>=40 && this.rta<=60){
             this.rta="Regular";
         }else if(this.rta<40){
             this.rta="Malo";
         }
        },
    }
    })