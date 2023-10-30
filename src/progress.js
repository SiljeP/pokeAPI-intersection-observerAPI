export default (function () {
    if (!window.location.pathname.includes("article.html")) return // guard clause

    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 0.05
    })

    const ARTICLE = document.querySelector(".article")
    OBSERVER.observe(ARTICLE)

    function callback(entries) {
        const [ENTRY] = entries //destrukturering man trækker det første i arrayet ud og giver det et navn
        if (!ENTRY.isIntersecting) return //guard clause

        if (ENTRY.isIntersecting) {

            window.addEventListener("scroll", function () {

                const ENTRY_HEIGHT = ENTRY.target.clientHeight
                const ENTRY_DISTANCE_FROM_TOP = ENTRY.target.offsetTop
                const SCREEN_HEIGHT = window.innerHeight
                const SCROLL_FROM_TOP = window.scrollY

                const PROGRESS = ((SCROLL_FROM_TOP + SCREEN_HEIGHT - ENTRY_DISTANCE_FROM_TOP) / ENTRY_HEIGHT) * 100

                const PROGRESS_BAR = document.querySelector("progress")
                PROGRESS_BAR.value = PROGRESS

            })
        }
    }

})()