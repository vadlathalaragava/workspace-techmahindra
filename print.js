printType=function(){
    var numbers=[];
    var strings=[];
    var booleanArray=[];
    for(var i=0;i<arguments.length;i++){
        if(typeof(arguments[i])=="number"){
            numbers.push(arguments[i]);
        }
        else if(typeof(arguments[i])=='string' ){
            strings.push(arguments[i]);
        }
        else if(typeof(arguments[i])=="boolean"){
            booleanArray.push(arguments[i]);
        }
    }
    
    console.log("numbers:" +numbers.length +":" +numbers);
    console.log("numbers:" +strings.length +":" +strings);
    console.log("booleans:" +booleanArray.length +":" +booleanArray);
}