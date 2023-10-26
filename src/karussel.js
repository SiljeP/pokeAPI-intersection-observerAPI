export default (function() {
	if (!window.location.pathname.includes("article.html")) return // guard clause

	const OBSERVER = new IntersectionObserver(callback, {
		threshold: 1
	})

	OBSERVER.observe(document.querySelector(".karussel"))

	function callback(entries) {
		const ENTRY = entries[0]

		if (!ENTRY.isIntersecting) return

		const SLIDES = document.querySelectorAll(".slide")
	
		SLIDES.forEach(slide => {
			slide.style.transform = "translateY(-300px)"
		})
	}
})()