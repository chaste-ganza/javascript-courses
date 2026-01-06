let inputItem = []
const submit = document.getElementById("submit")
const list = document.getElementById("list")

let itemIndex = 0


submit.addEventListener("click", ()=>{
    inputItem[itemIndex] = document.getElementById("item").value
    list.innerHTML += `<li>${inputItem[itemIndex]} <input type ="checkbox"></li>`
    itemIndex++
})


