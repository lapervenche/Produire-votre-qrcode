//  Script pour affichage du texte de l'aide (afficher/masquer l'aide)
   $("#afficheMasque").click(function() {
    if ($("#text").css('display') == "none" ) {
        $("#text").slideDown(400);
        $('#afficheMasque').html("Masquer l'aide");
        } else {
          $("#text").hide(400);
          $('#afficheMasque').html("Aide❔");
          }
    });
