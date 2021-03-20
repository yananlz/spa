$(()=>{
        //get dom elem
   let $width=$('#width'),
       $height=$('#height'),  
       $btnCal=$("#calc"),
       $perimeter=$('#perimeter'),
       $area=$('#area'),
       $widthValidata=$("#width-validata"),
       $heightValidata=$("#height-validata");
       $form=$("#main");
   //字符级校验
   $width.keypress((e)=>{
         let key=e.key,
            vall=e.target.value,
           pos=e.target.selectionStart;
    // if(key is feifazifu) e.preventDefault();
    // 屏蔽非法字符
   // if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'"]/.test(key))e.preventDefault();
        //合法字符规则:e
    //在一个科学计数法的数字前、中间、后面不能出现e
   // if(vall.indexOf('e')!==-1)e.preventDefault;
       //合法字符小数点
    

             // console.log(e.key);
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.selectionStart);
        vall=vall.slice(0,pos)+key+vall.slice(pos,vall.length);
        if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(vall))e.prevendDefault;

       });
   $height.keypress();
   
   //字段级校验
  // $form.focusout((e)=>{
    //冒泡    
    // console.log(e.target);
  // });
$width.focusout(()=>{
 if(!validata($width,$widthValidata)){
   $width.select();
  }
});
$height.focusout(()=>{
         if(!validata($height,$heightValidata)){
    $height.select();
 }
})
         //表单校验集中校验
      $btnCal.click(()=>{
      //get value
          let w=Number($width.val()),
            h=Number($height.val());
      //validata
   if(validata($width,$widthValidata) && validata($height,$heightValidata)){
              //calc  
      let p=(w+h)*2,
          a=w*h;
      //output
      $perimeter.val(p);
      $area.val(a);
    }

    })
    
});
function validata(input,output){
        //empty
  if(input.val()===""){
      output.html("此字段不能为空");
    return false;
  }else{
    output.html("");
  }
  let val=Number(input.val());
  //is number
  if(isNaN(val)){
     output.html ("该字段应该是数值");
    return false;

  }else{
    output.html("");
  }
  
  //is >0
  if(val<0){
    output.html("该字段应该为正数");
    return false;
  }else{
    output.html("");
  }
  return true;
}
