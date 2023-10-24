const UL = document.querySelector(".pokeList")
    export default (function() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then(res => res.json())
            .then(data => {
                data.results.forEach(pokemon => {
                    const LI = document.createElement("li")
                    LI.classList.add("pokeListItem")
                    LI.innerText = pokemon.name
                    document.body.append(p)
                    UL.append(LI)
                })
            })
    })()
    