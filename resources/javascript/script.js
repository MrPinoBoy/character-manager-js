(async() =>  {
    const template = document.getElementById("tpl-character")
    const target = document.getElementById("target")
    const fetcher = async() => { //on crée une fonction async (pour pouvoir utiliser await)
        let rawData = await fetch("https://character-database.becode.xyz/characters") // on va chercher les données et on utilise await parce que fetch prend plus de temps pour télécharger qu'il n'en faut au code pour passer a la ligne suivante 
        return data = await rawData.json() //on convertit les données en un objet json et encore une fois on utilise await car la conversion prend plus de temps
    }

    //console.log(await fetcher()) //afin de ne pas afficher les données pendant qu'elles sont manipulées, on ajoute un await (tu peux enlever l'await si tu veux voir ce qu'il se passe)

    await fetcher()
    data.forEach(character => {
        const clone = template.content.cloneNode(true)
        const documentName = clone.getElementById("character-name")
        const documentShortDescription = clone.getElementById("character-small-description")
        const documentImage = clone.getElementById("character-img")
        const documentForm = clone.getElementById("formGet") //

        documentName.innerHTML = character.name
        documentShortDescription.innerHTML = character.shortDescription
        documentImage.setAttribute("src", `data:image/jpeg;base64,${character.image}`) //on définit l'attribut "src" de l'image en ajoutant "data:image/jpeg;base64," (qui permet d'afficher l'url fourni dans l'objet) suivi de l'url fourni dans l'objet (data[0].image)
        documentForm.setAttribute("action", `pages/single.html#${character.id}`) //l'url du lien contient l'id du personnage arpès un #, pour qu'on puisse aller le rechercer sur la page single
        target.appendChild(clone)
    });
    // documentName.innerHTML = data[0].name
    // documentShortDescription.innerHTML = data[0].shortDescription
    // documentImage.setAttribute("src", `data:image/jpeg;base64,${data[0].image}`) //on définit l'attribut "src" de l'image en ajoutant "data:image/jpeg;base64," (qui permet d'afficher l'url fourni dans l'objet) suivi de l'url fourni dans l'objet (data[0].image)
})();