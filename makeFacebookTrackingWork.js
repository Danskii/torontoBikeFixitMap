$(document).ready(function(){
  function facebookReady(){
    FB.init({
      appId  : 'YOUR APP ID',
      status : true,
      cookie : true,
      xfbml  : true
    });
    $(document).trigger("facebook:ready");
  }

  if(window.FB) {
    facebookReady();
  } else {
    window.fbAsyncInit = facebookReady;
  }
});

// elsewhere in the code
$(document).live("facebook:ready", function(){
  $("#content").html("Welcome!")
});
