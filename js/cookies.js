/* Cookies */
// On ready
document.addEventListener("DOMContentLoaded", function() {
  
  // Create cookie function
  function createCookie(name, value, days) {
      var expires;
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          expires = "; expires="+date.toGMTString();
      }
      else {
          expires = "";
      }
      document.cookie = name+"="+value+expires+"; path=/";
  }

  // Reading cookies function
  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
              c = c.substring(1,c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
              return c.substring(nameEQ.length,c.length);
          }
      }
      return null;
  }
  
  // Selectors
  var cookiePolicy      = document.querySelector('.cookiePolicy');
  var closeCookiePolicy = cookiePolicy.querySelector('.cookiePolicy__close');
  var hasCookie         = readCookie("visited"); 
  
  // If the 'visited' cookie isn't set, show the popunder after 2 seconds
  if (!hasCookie) { 
    setTimeout(function(){
      cookiePolicy.classList.add('is-active');
    }, 2000);
  } else {
    cookiePolicy.parentNode.removeChild(cookiePolicy);
  }
  
  // On clicking the popunder, hide it and set the cookie so we don't show it until 365 days
  cookiePolicy.addEventListener('click', function(e){
    e.preventDefault();
    cookiePolicy.classList.remove('is-active');
    cookiePolicy.parentNode.removeChild(cookiePolicy);
    createCookie("visited", true, 365);
  });
});
