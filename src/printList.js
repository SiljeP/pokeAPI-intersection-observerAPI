import getJSONfromLocalStorage from "./getJSONfromLocalstorage"
import updateJSONinLocalStorage from "./updateJSONinLocalStorage"

function printList (){
    const DATA = getJSONfromLocalStorage("todo-items")
    const ITEMS = document.querySelector(".items")

    ITEMS.innerHTML = ""

    DATA.forEach((item, index) => {
        const LI = document.createElement("li")
        const CHECKBOX = document.createElement("input")
        CHECKBOX.type = "checkbox"
        CHECKBOX.name = index
        CHECKBOX.checked = item.done
        LI.append(CHECKBOX, item.name)
        ITEMS.append(LI)

        CHECKBOX.addEventListener("click", clickHandler)

        function clickHandler(event){
            updateJSONinLocalStorage("todo-items", parseInt(event.target.name))
        }

        // localStorage.setItem("todo-items", "[]") DEN HER LAVER FEJL
    })
}

export default printList