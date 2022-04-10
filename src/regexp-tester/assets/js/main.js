    
    document.addEventListener('DOMContentLoaded', function(){
         
        regexp.oninput = data.oninput = function(){

            var pattern = regexp.value;

            var text = data.value;

            controlInput.pattern = pattern;

            controlInput.value = text;

            if(!pattern){
                data.style.background = "";
                result.innerHTML = '';
                return;
            }

            var answer = controlInput.checkValidity();
            
            result.innerHTML = String(answer).toUpperCase();
                   
            if(answer){
                data.style.background = "#aaffaa";
            }else{
                data.style.background = "#ffaaaa";
            }    

        }

    });