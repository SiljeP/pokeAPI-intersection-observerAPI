export default (function () {
    if (!window.location.pathname.includes("article.html")) return //guard clause

    //Paragraphs herunder
    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 1.0
    })
    const PARAGRAPHS = document.querySelectorAll(".article p")
    PARAGRAPHS.forEach(p => OBSERVER.observe(p))
    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.fontWeight = "normal"
            }
            if (entry.intersectionRatio >= 0.5) {
                entry.target.style.fontWeight = "bold"
            } else {
                entry.target.style.fontWeight = "normal"
            }

        })
    }

    //Button herunder
    const BTN_OBSERVER = new IntersectionObserver(btncallback, {
        threshold: 0.5
    })
    const BUTTON = document.querySelector(".backToTop")
    BTN_OBSERVER.observe(BUTTON)
    function btncallback(entries) {
        entries.forEach(entry => {
            if (!entry.intersectionRatio >= 0.5) {
                entry.target.style.opacity = 0
            }

            if (entry.intersectionRatio >= 0.5) {
                entry.target.style.opacity = 1
            }

        })
    }

})()