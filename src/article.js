export default (function(){
if (!window.location.pathname.includes("artikel.html")) return //guard clause

const OBSERVER = new IntersectionObserver(callback,{
    threshold: 1.0
})

const PARAGRAPHS = document.querySelectorAll(".article p")
PARAGRAPHS.forEach(p => OBSERVER.observe(p))

function callback(entries){
    entries.forEach(entry =>{
        
    })
}

})()