// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


$(document).ready(function(){

  // AL CLICK sul quadrato ad ogni click parte
 // una richiesta AJAX che prende un numero random da 1 a 9.c
  $(document).off().on("click", ".square",function(){

    var thisSquare = $(this);
    // Chiamata AJAX con JQuery
    $.ajax(
      {

        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {

          var numapi = data.response;
          thisSquare.html(numapi);

          console.log("numero ottnuto dal server: ", numapi);
        },

        error : function (richiesta,stato,errore) {
        alert("E' avvenuto un errore. "+errore);
        }

      });

  });

// CHIUSARA DOCUMENT.READY
});
