const textareaEl = document.getElementById("input-area")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
} )

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

