// JavaScript Document




function main(){
  
  $('.projects-button').on('click',function (){
    //$(this).next().toggle();
    $(this).next().slideToggle(600)
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
}

$(document).ready(main);