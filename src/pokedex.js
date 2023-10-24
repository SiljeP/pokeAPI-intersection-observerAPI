const UL = document.querySelector(".pokeList")

export default (async function init(offset = 0) {
    let fetchObserver = new IntersectionObserver(callback, { rootMargin: "0px", threshold: 1.0 })
    let imageObserver = new IntersectionObserver(imageCallback, { rootMargin: "0px", threshold: 1.0 })

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`)
    let data = await response.json()
    data.results.forEach((pokemon, index) => {
        const LI = document.createElement("li")
        const IMG = document.createElement("img")
        const id = pokemon.url.split("/")[6]

        IMG.dataset.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        imageObserver.observe(IMG)

        LI.classList.add("pokeListItem")
        LI.innerText = pokemon.name
        UL.append(LI)
        LI.append(IMG)
        if (index === data.results.length - 1) {
            fetchObserver.observe(LI)
        }
    })


    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return // guard clause

            if (entry.intersectionRatio >= 0.5) {
                fetchObserver.unobserve(entry.target)
                init(offset + 50)
            }
        })
    }

    function imageCallback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return // guard clause

            if (entry.intersectionRatio >= 0.1) {
                imageObserver.unobserve(entry.target)
                entry.target.src = entry.target.dataset.src
            }
        })
    }
})()
