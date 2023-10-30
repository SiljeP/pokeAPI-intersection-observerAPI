import getJSONfromLocalStorage from "./getJSONfromLocalstorage"

export default (function() {
	if (!window.location.pathname.includes("todo.html")) return // guard clause


	const TODO_FORM = document.querySelector(".todoForm")
    TODO_FORM.addEventListener("submit", submitHandler)

	function submitHandler(event) {
		event.preventDefault()

		
        localStorage.setItem("item", event.target.item.value)
	}

})()