// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


$(document).ready(function(){

  // Chiedo con prompt, quante righe e quante COLONNE
  // deve avere la griglia da generare
  var numRow = parseInt(prompt('inserisci un numero di righe'));
  var numColumn = parseInt(prompt('inserisci un numero di colonne'));
  var output = $('.wrapper')


  gridGenerate(numRow, numColumn , output);


  // AL CLICK sul quadrato ad ogni click parte
 // una richiesta AJAX che prende un numero random da 1 a 9.c
  $(document).off().on("click", ".square",function(){


    var thisSquare = $(this);


    //AL click aggingo un attributo per il controllo
    // thisSquare.attr("checked","yes");


    //Controllo se il quadrato non è gia stato cliccato(NON GIRA ANCORA)
    if (!thisSquare.hasClass("checked")) {

      // Chiamata AJAX con JQuery
      $.ajax(
        {

          url : "https://flynn.boolean.careers/exercises/api/random/int",
          method : "GET",
          success : function (data,stato) {

            var attr = thisSquare.addClass("checked");
            console.log("verifica presenza attributo: ",attr);
            var numapi = data.response;

            // Cambio lo style color a seconda se lo user ha digitato maschi o femmina alla richiesta del prompt
            if (numapi < 5) {
              thisSquare.css( "background-color", "yellow");
            }else if (numapi > 5){
              thisSquare.css( "background-color", "lightgreen");
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
      }

  });

// CHIUSARA DOCUMENT.READY
});



//FUNZIONE CHE GENERA UNA GRIGLIA IN BASE
//A NUMERO DI RIGHE E COLONNE SCELTRE DALL'UTENTE
function gridGenerate(numRow, numColumn, output){

  //Variabile che registra la larghezza del quadrato in base al NUMERO
  //delle colonne da generare
  var modWidth = numColumn;


  for (var i = 0; i < numRow; i++) {
    var addRow = $('#myTemplate .row').clone();

    for (var j = 0; j < numColumn; j++) {
      var addSquare = $('#myTemplate .square').clone();

      addSquare.css( "width", "calc(100% /"+numColumn+" - 5px)" );
      addRow.append(addSquare);

    }
    output.append(addRow);

    console.log("RigaGenerata con quadrati interni", addRow);
  }

}
