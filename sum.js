
sum=function(){
    var result=0;
    for(var i=0;i<arguments.length;i++){
        
        if(typeof(arguments[i])=="number"){
            result=result+arguments[i];
        }
       }
    console.log(result);
    
}

