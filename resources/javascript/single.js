(async() =>  {
        // const template = document.getElementById("tpl-character")
        // const target = document.getElementById("target")
        const currentId = window.location.hash.split('#')// on va chercher une information dans l'url, à partir du #, et split sert à se débarasser du #
        const fetcher = async() => { //on crée une fonction async (pour pouvoir utiliser await)
            let rawData = await fetch(`https://character-database.becode.xyz/characters/${currentId[1]}`)// on va chercher les informations qui correspondent au bon id. On précise [1] parce que split crée une array de deux éléments, un avec ce qu'il y a avant le # et un avec ce qu'il y a après 
            return data = await rawData.json() //on convertit les données en un objet json et encore une fois on utilise await car la conversion prend plus de temps
        }
    
        //console.log(await fetcher()) //afin de ne pas afficher les données pendant qu'elles sont manipulées, on ajoute un await (tu peux enlever l'await si tu veux voir ce qu'il se passe)
        await fetcher()
        
        
})();