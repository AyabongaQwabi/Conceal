function concealer(){

    this.realPass;
    var real;
    var encrypted='';
    this.element='';
    this.secret='';
   this.reveal = function(){
    $(this.element).val(real)
    return real;
   }
   this.reconceal = function(){
     $(this.element).val(encrypted)
   }

  this.conceal= function(element,secret){
      this.element=element;
      this.secret=secret;
      var str=''
      real=str;
      var count=0,
          fake='',
          key = secret.split('');


       $(element).keyup(function(e){
           if(e.keyCode == 8){
              erase();
              deMorph();
              //fill(this,fake)
           }
           else{
             store($(this).val().substring($(this).val().length-1));
             empty($(this).val(''));
             Morph();
             fill(this,fake)
             count+=1;
           }

      })

      function erase(){
        str=str.substring(0,str.length-1);
        real=str;
      }
      function store(data){
           str+=data;
           real=str;

       }
      function empty(element){
          element.val('');
      }
      function Morph(){
          if(fake.length>=key.length){
             return;
          }
          else{
            console.log('\nh:'+real.length)
            console.log('k:'+key.length)
            if(real.length <= key.length){
              fake+=key[real.length-1]
              encrypted=fake;
            }
            else{
              encrypted=fake;
            }

          }

      }
      function deMorph(){


            if(real.length<=key.length){
              fake=fake.substring(0,fake.length-1);
            }
            encrypted=fake;


      }
      function fill(src,data){
          $(src).val(data);
      }

    }
}
