$(document).ready(function() 
    {
    $(window).stellar();
    }
);


  function login()
  {
    document.getElementById('login').style.display = "block";
    setTimeout(addLogin, 0);
  }

  function addLogin(){
    document.getElementById('login').style.marginTop = "0px";
  }
/*creates a delayed trigger to animate those awesome merch pictures*/
$(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    if(windowScroll > $('#merchList').offset().top)
    {
      $('#merchList a').each(function(i){

        setTimeout(function(){
          console.log(i);
          $('#merchList a').eq(i).addClass('populate');
        } , 150 * (i+1));
      });
    }
  }
);


/* Not my code ***/
$(document).ready(
  function() { 

    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff",
    });
      

  }

);

$(function() {
    $("#2").lavaLamp({
        fx: "backout",
        speed: 700,
        click: function(event, menuItem) {
                    return false;
                }
    });
});



