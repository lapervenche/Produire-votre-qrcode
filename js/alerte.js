// Script secondaire (boîte d'alerte/bouton d'aide) facultatif
        $(document).ready(function () { 
            $("#mybutton").click(function () { 
                alerte("🖥 Image QR-Code téléchargée!"); 
            }); 
            $("#mabtn").click(function () { 
                alert("✅ Image QR-Code générée!"); 
            });
        });
