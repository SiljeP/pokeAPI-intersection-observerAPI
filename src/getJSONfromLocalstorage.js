function getJSONfromLocalStorage(key){

const OBJECT = JSON.parse(localStorage.getItem(key) || [])
return OBJECT

}

export default getJSONfromLocalStorage