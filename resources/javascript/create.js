(async() =>  {
    const image = document.getElementById("character-image-upload")
    const preview = document.getElementById("character-image-preview")
    function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();//lis le contenu d'un fichier
    reader.addEventListener('load', (event) => {//l'event se lance après la ligne 16
        const imageDataUrl = event.target.result//result donne le résultat de la ligne 16
        preview.setAttribute("src", imageDataUrl);//on remplace la source par l'url
    });
    reader.readAsDataURL(file);//transforme le fichier en data url
  }
    image.addEventListener("change", function(event){
        let file = event.target.files//on va chercher le fichier qu'on a input qui est enregistré comme une array
        console.log(file)
        readImage(file[0])//on utilise le fichier dans la fonction
    })
})();