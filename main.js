// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


$(document).ready(function(){

  // AL CLICK sul quadrato ad ogni click parte
 // una richiesta AJAX che prende un numero random da 1 a 9.c
  $(document).off().on("click", ".square",function(){

    // Chiedo con prompt, quante righe e quante COLONNE
    // deve avere la griglia da generare


    var thisSquare = $(this);
    // Chiamata AJAX con JQuery
    $.ajax(
      {

        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {

          var numapi = data.response;

          // Cambio lo style color a seconda se lo user ha digitato maschi o femmina alla richiesta del prompt
          if (numapi < 5) {
            thisSquare.attr('style',  'background-color:yellow');
          }else if (numapi > 5){
            thisSquare.attr('style',  'background-color:green');
          }

          // Stampo il numero al centro del quadrato cliccato
          thisSquare.html(numapi);

          console.log("oggetto cliccato: ", thisSquare);
          console.log("numero ottnuto dal server: ", numapi);
        },

        error : function (richiesta,stato,errore) {
        alert("E' avvenuto un errore. "+errore);
        }

      });

  });

// CHIUSARA DOCUMENT.READY
});

//FUNZIONE CHE GENERA UNA GRIGLIA IN BASE
//A NUMERO DI RIGHE E COLONNE SCELTRE DALL'UTENTE
function gridGenerate(numRow, numColumn){



}
