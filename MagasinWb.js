function calculer(){

        let petiteRation = document.getElementById("quantity1");
        let grosseRation = document.getElementById("quantity2");

        //attention à .value, la condition effectue bien le calcul, mais ne l'affiche pas si le .value n'est pas présent
        
        if(parseInt(petiteRation.value) >= 5){
            grosseRation.value = parseInt(grosseRation.value) + Math.floor(parseInt(petiteRation.value)/5);
            petiteRation.value = parseInt(petiteRation.value) % 5;
        }
 
        petiteRation = document.getElementById("quantity1").value;
        grosseRation = document.getElementById("quantity2").value;
        var epee =document.getElementById("quantity3").value;
        var bouclier =document.getElementById("quantity4").value;
        var potion =document.getElementById("quantity5").value;
        var sacDeToile =document.getElementById("quantity6").value;

        var total = (petiteRation*2)+(grosseRation*8)+(epee*20)+(bouclier*15)+(potion*5)+(sacDeToile*1);
        document.getElementById("somme").innerHTML=total+" $";

        let saccoche = parseInt(petiteRation) + parseInt(grosseRation) + parseInt(epee) + parseInt(bouclier) + parseInt(potion) + parseInt(sacDeToile);
        document.getElementById("quantite").innerHTML=saccoche;
        if (saccoche > 15){
            alert("Vous ne pouvez pas porter plus d'items");
         }

        
 

        var sousTotal = (petiteRation*2)+' $';
        document.getElementById("sousTotal").innerHTML=sousTotal;
        var sousTotal2 = (grosseRation*8)+' $';
        document.getElementById("sousTotal2").innerHTML=sousTotal2;
        var sousTotal3 = (epee*20)+' $';
        document.getElementById("sousTotal3").innerHTML=sousTotal3;
        var sousTotal4 = (bouclier*15)+' $';
        document.getElementById("sousTotal4").innerHTML=sousTotal4;
        var sousTotal5 = (potion*5)+' $';
        document.getElementById("sousTotal5").innerHTML=sousTotal5;
        var sousTotal6 = (sacDeToile*1)+' $';
        document.getElementById("sousTotal6").innerHTML=sousTotal6;

        
        if(total <= 50){
            document.getElementById("somme").style.color ='green';
        }
        else if(total>50 && total<76){
            document.getElementById("somme").style.color = 'orange';
        }
        else{
            document.getElementById("somme").style.color = 'red';

    }
}
function vider(){
        document.getElementById("quantity1").value = 0;
        document.getElementById("quantity2").value = 0;
        document.getElementById("quantity3").value = 0;
        document.getElementById("quantity4").value = 0;
        document.getElementById("quantity5").value = 0;
        document.getElementById("quantity6").value = 0;

        calculer();
        //document.getElementById("somme").innerHTML='0 $';
}

// function division{
//     let quotient = math.floor(petiteRation/5);
//     let reste = petiteRation % 5;
//     reste = petiteRation++;
//     quotient = grosseRation++;
// }

