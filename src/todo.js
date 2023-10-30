import getJSONfromLocalStorage from "./getJSONfromLocalstorage"
import printList from "./printList"
import saveJSONtoLocalStorage from "./saveJSONtoLocalstorage"

export default (function() {
	if (!window.location.pathname.includes("todo.html")) return // guard clause
	const TODO_FORM = document.querySelector(".todoForm")
    TODO_FORM.addEventListener("submit", submitHandler)

	function submitHandler(event) {
		event.preventDefault()

        saveJSONtoLocalStorage("todo-items",
        {name: event.target.item.value, done: false})
		printList()
	}
    //Alt over her er om at gemme ting i local storage
    //--------------------------------------------------------------------------------------//

    printList()

})()