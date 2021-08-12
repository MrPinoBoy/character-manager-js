(async() =>  {
    const allInputs = document.querySelectorAll("input")
    const newImage = document.getElementById("character-image-upload")
    const preview = document.getElementById("character-image-preview")
    const newName = document.getElementById("input-character-name")
    const newSmallDescription = document.getElementById("input-character-small-description")
    const newLongDescription = document.getElementById("input-character-long-description")
    const saveNewCharacter = document.getElementById("button-save")
    const cancelNewCharacter = document.getElementById("button-cancel")
    const newCharacter = new Object

    allInputs.forEach(element => element.value = "")//on vide tous les inputs
    async function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();//lis le contenu d'un fichier
    reader.addEventListener('load', (event) => {//l'event se lance après la ligne 16
        const imageDataUrl = reader.result//result donne le résultat de la ligne 16
        preview.src = imageDataUrl;//on remplace la source par l'url
        const imageUrlSeparator = imageDataUrl.split(",")
        newCharacter.image = imageUrlSeparator[1]
    });
    ;//transforme le fichier en data url
    reader.readAsDataURL(file)
  }

    newImage.addEventListener("change", async function(event){
        let file = event.target.files//on va chercher le fichier qu'on a input qui est enregistré comme une array
        await readImage(file[0])//on utilise le fichier dans la fonction
    })

    saveNewCharacter.addEventListener("click", async()=> {
        if (newName.value != "" && newSmallDescription.value != "" && newLongDescription.value != "" && newImage.value != ""){
            newCharacter.name = newName.value
            newCharacter.shortDescription = newSmallDescription.value
            newCharacter.description = newLongDescription.value

        } else {
            alert("erreur")
        }
    })

    cancelNewCharacter.addEventListener("click", function(){
    })
})();