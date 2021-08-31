
    var now = new Date();
    //    document.getElementById("checkTime").innerText= now.getHours(12) +":"+ now.getMinutes() ;
       checkTime.innerText=now.getHours(12) +":"+ now.getMinutes() ;

       function clr() {
           document.getElementById("res1").innerText= "0";
           document.getElementById("res2").innerText= "ans...";
           
       }
       function  del() {
           var dete = document.getElementById("res1").innerText;
           document.getElementById("res1").innerText= dete.substring(0, dete.length -1);
           
           
       }
        function  disp(val) {
           var chg =  document.getElementById("res1").innerText += val;

            // document.getElementById("res1").innerText= chg;
           
        }
        function solve() {
            // var square = res1.innerText;

          
            var numericalExpression = document.getElementById("res1").innerText;
            var result = eval(numericalExpression);
            var newDisp =  document.getElementById("res2").innerText = result ;
            document.getElementById("res2").innerText= newDisp;
        }

       function limit() {
        var len = res1.innerText;
        var hint = document.getElementById("res1").innerText= len.length;
        if (hint<=25){
            document.getElementById("res1").innerText= "correct";
        }else{
            document.getElementById("res1").innerText= "wrong";
        }
       }
          