function result(){
        var inputText=document.getElementById("inputText").value;
        var odd="";
        for(var i=0;i<inputText.length;i++){
            if(i%2!==0){
                odd+inputText.charAt(i);
            }
        }
        console.log(odd);
    }