export default (async function () {
    const json = {
        "name": "Brian",
        "age": 55,
        "hair_color": false

    }
    // for at gemme et json objekt i en string skal man lave det om det et objekt og for at bruge det igen skal det derfor laves om til JSON igen.
    localStorage.setItem("fnyf", JSON.stringify(json))
    console.log(JSON.parse(localStorage.getItem("fnyf")).name)

    //herunder gemmes bulbasaur

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    let data = await response.json()

    localStorage.setItem("pokemon", JSON.stringify(data))

     const savedPokemon = JSON.parse(localStorage.getItem("pokemon"))
     
    document.querySelector(".pokemonInfo").innerText = `Name is ${savedPokemon.name} and its weight is ${savedPokemon.weight}`
    





})()