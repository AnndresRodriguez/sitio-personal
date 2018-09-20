  window.onload = function(){

  AOS.init();
  resetCircles();   

  var $divCircles = $('.seccion-tecnologias');
  var $divwho =$('.seccion-informacion');
  var divFooter = $('.footer');
  var dropdownMenu= $('.navbar-collapse');

  
  if($(window).width()<=475){
    animateSkills();
    $('.navbar-right').on('click', 'li', function(){
        dropdownMenu.attr('aria-expanded', 'false');
        dropdownMenu.attr('class', 'navbar-collapse collapse');
    });

   
  }else{
     $('.container-skills').attr('data-aos', '');
      $divCircles.waypoint(function(direction){resetCircles();},{ offset:'80%'});
      $divCircles.waypoint(function(direction){animateSkills();}, { offset:'15%'});
  }
$('[data-toggle="tooltip"]').tooltip(); 
function animateSkills() {

  $('.circle-html5').circleProgress({ value: 0.5,fill:{color:'#F46135'},});
  $('.circle-css3').circleProgress({ value: 0.6, fill:{color:'#32A3DB'} });
  $('.circle-js').circleProgress({ value: 0.5, fill:{color:'#FED93A'} });
  $('.circle-jquery').circleProgress({ value: 0.6, fill:{color:'#046AAE'} });
  $('.circle-bootstrap').circleProgress({ value: 0.5, fill:{color:'#5E4388'} });
  $('.circle-java').circleProgress({ value: 0.5, fill:{gradient: [["#2753AA", .5], ["#F7412B", .5]] }});
  $('.circle-php').circleProgress({ value: 0.35, fill:{color:'#5969A6'} });
  $('.circle-laravel').circleProgress({ value: 0.25, fill:{color:'#F76661'} });
  $('.circle-mysql').circleProgress({ value: 0.25, fill:{gradient: [["#01678B", .5], ["#E59203", .5]] }});
  $('.circle-git').circleProgress({ value: 0.5, fill:{color:'#FC511F'} });
  $('.circle-github').circleProgress({ value: 0.5, fill:{color:'#000'} });
}

function resetCircles() {
   $('.circle--size-default').circleProgress({ value: 0.0});
}



  }



















