export default(function(){
const json = {
    "name": "Brian",
    "age": 55,
    "hair_color": false

}

localStorage.setItem("fnyf", JSON.stringify(json))
console.log( JSON.parse(localStorage.getItem("fnyf")).hair_color)

})()