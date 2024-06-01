var myModal = (function() {
  'use-strict';
  return {
    // Basic options
    options:{
      'success':'Operation performed successfully <button>OK</button>',
      'error':'There has been an error, try again'
    },
    // qS(class)
    qS: function(el) {
      return document.querySelector(el);
    },
    // event handler
    close: function(el) {
      var slf = this,
          cl = this.qS('.myModal_close');
      cl.addEventListener('click', function() {
        slf.qS('.myModal').classList.remove('myModal_show');
        slf.qS('.myModal_inner').classList.remove(el);
        slf.tmpl('');
      }, false);
      return el;
    },
    success:function(sc){
      var s = sc,self = this,
          inn = this.qS('.myModal_inner');
      // if not custom text show options text
      if (typeof sc === 'undefined') {
        s = self.options.success;}
      // if contains class
      if(inn.classList.contains('myModal_error')){
        inn.classList.remove('myModal_error');
        // wait 1s and show
        var t = setTimeout(function(){
          self.qS('.myModal').classList.add('myModal_show');
          inn.classList.add('myModal_success');
          clearTimeout(t);
        },1000);
      }else if(inn.classList.contains('myModal_success')){
        inn.classList.remove('myModal_success');
        // wait 1s and show
        var t = setTimeout(function(){
          self.qS('.myModal').classList.add('myModal_show');
          inn.classList.add('myModal_success');
          clearTimeout(t);
        },1000);
      }else{
          this.qS('.myModal').classList.add('myModal_show');
          inn.classList.add('myModal_success');
      }
      // close modal success
      this.close('myModal_success');
      // show text
      this.tmpl(s);
    },
    error:function(er){
      var e = er,
          self = this,
          inn = this.qS('.myModal_inner');
      if (typeof er === 'undefined') {
        e = self.options.error;}
      if(inn.classList.contains('myModal_success')){
        inn.classList.remove('myModal_success');
        var t = setTimeout(function(){
          self.qS('.myModal').classList.add('myModal_show');
          inn.classList.add('myModal_error');
          clearTimeout(t);
        },1000);
      }else if(inn.classList.contains('myModal_error')){
        inn.classList.remove('myModal_error');
        var t2 = setTimeout(function(){
          self.qS('.myModal').classList.add('myModal_show');
          inn.classList.add('myModal_error');
          clearTimeout(t2);
        },1000);
      }else{
          this.qS('.myModal').classList.add('myModal_show');
          inn.classList.add('myModal_error');        
      }
      this.close('myModal_error');
      this.tmpl(e);       
    },
    // this.tmpl(element);
    tmpl: function(e) {
      this.qS('.myModal_content').innerHTML = e;
      return e;
    }
  }
})();


// Demos with jquery ( you can use javascript )
// demo success
$('.success').on('click',function(){
  myModal.success(); 
});

// demo error
$('.error').on('click',function(){
  myModal.error(); 
});

// demo success
$('.custom').on('click',function(){
  myModal.success('<p>Change for error <a href="#" onclick="myModal.error(\'And other popup\');" title="">popup</a></p>');  
});


// demo success
$('.image').on('click',function(){
  myModal.success('<h3>This is a image</h3><img src="https://susahcebok.github.io/laughing-invention/prev.png"/>'); 
});

// demo login
$('.login').on('click',function(){
  var html = '<form action="#"><p><label>Name</label><br><input type="text" name="name"></p><p><label>Password</label><br><input type="password" name="password"></p><p><input type="submit" name="submit" value="submit" onclick="myModal.success()"></p></form>';
  myModal.success(html); 
});

// demo various
$('.various').on('click',function(){
    myModal.success('<p>Start here <a href="#" onclick="return various()" title="">Click me</a></p>');
});

var various = function(){
   myModal.success('This is the first Success');
    setTimeout(function(){
    myModal.success('The seccond Success');},3000);
  setTimeout(function(){
    myModal.error('The third Error');},6000);
  setTimeout(function(){
    myModal.success('Another Success');},9000);
 var f = setTimeout(function(){
   myModal.success('And finish Close this');
   clearTimeout(f);},12000);
}
