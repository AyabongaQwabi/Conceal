function concealer(){

    this.realPass;
    var hollow;
    var encrypted='';
    this.element='';
    this.secret='';
   this.reveal = function(element){
    $(this.element).val(hollow)
   }
   this.reconceal = function(){
     $(this.element).val(encrypted)
   }

  this.conceal= function(element,secret){
      this.element=element;
      this.secret=secret;
      var str=''
      hollow=str;
      var count=0,
          pass='',
          key = secret.split('');


       $(element).keyup(function(){
           store($(this).val().substring($(this).val().length-1));
           empty($(this).val(''));
           Morph();
           fill(this,pass)
           count+=1;
      })


      function store(data){
           str+=data;
           hollow=str;

       }
      function empty(element)
      {
          element.val('');
      }
      function Morph(){
          if(pass.length>=key.length){
             return;
          }
          else{
            pass+=key[pass.length]
            encrypted=pass;
          }

      }
      function fill(src,data){
          $(src).val(data);
      }

    }
}
