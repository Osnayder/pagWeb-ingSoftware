/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function revisar(){
    var pregunta1 = document.form1.pregunta1.value;
    var pregunta2 = document.form1.pregunta2.value;
    var pregunta3 = document.form1.pregunta3.value;
    var pregunta4 = document.form1.pregunta4.value;
    var pregunta5 = document.form1.pregunta5.value;
    var contador = 0;
    
    document.getElementById("resul_1").innerHTML=" ";
    document.getElementById("resul_2").innerHTML=" ";
    document.getElementById("resul_3").innerHTML=" ";
    document.getElementById("resul_4").innerHTML=" ";
    document.getElementById("resul_5").innerHTML=" ";
    
    if(pregunta1 === "a"){ contador++; }else{ 
        document.getElementById("resul_1").innerHTML="La repuesta correcta en la primera pregunta es: a ";
    }
    
    if(pregunta2 === "b"){ contador++; }else{
        document.getElementById("resul_2").innerHTML="La repuesta correcta en la segunda pregunta es: b";
    }
    
    if(pregunta3 === "b"){ contador++; }else{
        document.getElementById("resul_3").innerHTML="La repuesta correcta en la tercera pregunta es: b";
    }
    
    if(pregunta4 === "d"){ contador++; }else{
        document.getElementById("resul_4").innerHTML="La repuesta correcta en la cuarta pregunta es: d";
    }
    
    if(pregunta5 === "c"){ contador++; }else{
         document.getElementById("resul_5").innerHTML="La repuesta correcta en la quienta pregunta es: c";        
    }
    
    alert("Su calificacion es: "+contador);
    
}


