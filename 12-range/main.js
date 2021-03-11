$(function(){
    //get elem:range,span
    //range change event
    //get range value
    //set span text
    let $range=$('input'),
        $age=$('span');
                        
    $range.change(()=>{
        $age.html($range.val());
    })
});
