(async() =>  {
    const allInputs = document.querySelectorAll("input")
    const updatedImage = document.getElementById("character-image-update")
    const preview = document.getElementById("character-image-preview")
    const updatedName = document.getElementById("update-character-name")
    const updatedSmallDescription = document.getElementById("update-character-small-description")
    const updatedLongDescription = document.getElementById("update-character-long-description")
    const saveUpdatedCharacter = document.getElementById("button-save")
    const deleteCurrentCharacter = document.getElementById("button-delete")
    const updatedCharacter = new Object
    const currentId = window.location.hash.split('#')
    
        
    
    const fetcher = async() => {
        const rawData = await fetch(`https://character-database.becode.xyz/characters/${currentId[1]}`)
        return currentCharacter = await rawData.json()
    }
    await fetcher()
    updatedName.value = currentCharacter.name
    updatedSmallDescription.value = currentCharacter.shortDescription
    updatedLongDescription.value = currentCharacter.description
    preview.src = `data:image/jpeg;base64,${currentCharacter.image}`
    updatedCharacter.image = currentCharacter.image
    async function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();//lis le contenu d'un fichier
    reader.addEventListener('load',() => {//l'event se lance après la ligne 16
        const imageDataUrl = reader.result//result donne le résultat de la ligne 16
        preview.src = imageDataUrl;//on remplace la source par l'url
        const imageUrlSeparator = imageDataUrl.split(",")
        updatedCharacter.image = imageUrlSeparator[1]
    });
    ;//transforme le fichier en data url
    reader.readAsDataURL(file)
  }

    updatedImage.addEventListener("change", async function(event){
        let file = event.target.files//on va chercher le fichier qu'on a input qui est enregistré comme une array
        await readImage(file[0])//on utilise le fichier dans la fonction
    })

    saveUpdatedCharacter.addEventListener("click", async()=> {
        if (updatedName.value != "" && updatedSmallDescription.value != "" && updatedLongDescription.value != ""){
            updatedCharacter.name = updatedName.value
            updatedCharacter.shortDescription = updatedSmallDescription.value
            updatedCharacter.description = updatedLongDescription.value

            let name = updatedCharacter.name
            let shortDescription = updatedCharacter.shortDescription
            let description = updatedCharacter.description
            let image = updatedCharacter.image
            
            const postData = await fetch(`https://character-database.becode.xyz/characters/${currentId[1]}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, shortDescription, description, image})
            })
            document.location.href = "/index.html"
        } else {
            alert("erreur")
        }
    })

    deleteCurrentCharacter.addEventListener("click", function(){
        document.location.href = "/index.html"
    })
})();