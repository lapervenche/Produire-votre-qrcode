// créer le qrcode image
let img = document.createElement("img");
let qr = document.querySelector(".qr-code");
qr.appendChild(img);
function generate(){
    let input = document.getElementById("input");
    if(input.value){
        input.style.borderColor = "#c7c7c7";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${input.value}`;
    }
    else{
// boite d'erreur écrit non valide
        input.style.borderColor="red";
        return false;
    }
// résultat valide dans la boite de dialogue
    input.value = "";
}
// bouton pour télécharger image
let btnDownload = document.querySelector('#mybutton');
let imgdwn = document.querySelector('img');
// fonction d'enregistrement de l'image 
btnDownload.addEventListener('click', () => {
    let imagePath = imgdwn.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, "nom-du-qrcode.png");
});

function getFileName(str) {
    let gotstr = str.substring(str.lastIndexOf('=') + 1 );
    let format = ".jpg";
    return  gotstr.concat(format);
}
