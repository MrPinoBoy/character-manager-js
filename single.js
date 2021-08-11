(async() =>  {
        // const template = document.getElementById("tpl-character")
        // const target = document.getElementById("target")
        const currentId = window.location.hash.split('#')
        const fetcher = async() => { //on crée une fonction async (pour pouvoir utiliser await)
            let rawData = await fetch(`https://character-database.becode.xyz/characters/${currentId[1]}`) // on va chercher les données et on utilise await parce que fetch prend plus de temps pour télécharger qu'il n'en faut au code pour passer a la ligne suivante 
            return data = await rawData.json() //on convertit les données en un objet json et encore une fois on utilise await car la conversion prend plus de temps
        }
    
        //console.log(await fetcher()) //afin de ne pas afficher les données pendant qu'elles sont manipulées, on ajoute un await (tu peux enlever l'await si tu veux voir ce qu'il se passe)
        await fetcher()
        console.log(data)
})();