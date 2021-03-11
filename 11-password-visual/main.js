$(function(){
  let $pwd=$('input');  
  console.log($pwd);
  console.log($pwd.prop('type'));
  let $photo=$('i');
  $photo.mouseover(()=>{
    $photo.attr('class','fa fa-eye'); 
    $pwd.prop('type','text')

  })
  $photo.mouseout(()=>{
    $photo.attr('class','fa fa-eye-slash');
    $pwd.prop('type','password');
  })
});
