let screenOutput = document.getElementById("screen-output");

        function display(num){
            screenOutput.value += num;
        }

        function calculate(){
            try{
                screenOutput.value = eval(screenOutput.value);
            }
            catch(err){
                alert("Invalid Operation!");
            }
        }

        function clearScreen(){
            screenOutput.value = "";
        }

        function del(){
            screenOutput.value = screenOutput.value.slice(0,-1);
        }