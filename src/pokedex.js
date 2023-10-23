const UL = document.querySelector(".pokeList")
// const URL = new URLSearchParams(window.location.search)
// const OFFSET = parseInt(URL.get("offset") || 0)

fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
    .then(function (response) {
        if (response.status !== 200)
            throw new Error("error message")
        return response.json()
    })
    .then(function (data) {
        data.results.forEach(function (result) {
            const LI = document.createElement("li")
            LI.classList.add("pokeListItem")
            LI.innerHTML = `${result.name}`
            UL.append(LI)
        })

    })
    .catch(function (error) {
        console.log(error)

    })
