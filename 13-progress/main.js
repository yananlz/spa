$(function(){
  let $start=$('#start'),       
      $stop=$('#stop'),        
      $reset=$('#reset'),
      $progress=$('progress'),
      timer=0,
      arr=new Array();

$start.click(()=>{
   // timer=timier+1;    
    myTimer=setInterval(()=>{
    if($progress.val()<100){  
      $progress.val($progress.val()+9);
    }else{
      clearInterval(myTimer);
    }
    
  },1000)
  arr.push(myTimer);
   timer=timer+1;

})
$stop.click(()=>{
   
    for(i=0;i<arr.length;i++){
      clearInterval(arr[i]);
    }
  

})
$reset.click(()=>{
  $progress.val(0);  
  clearInterval(myTimer);
})

});

