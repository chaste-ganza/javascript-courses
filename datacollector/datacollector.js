const submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    collectData();
})

const space =document.getElementById("space")
const table = document.getElementById("table")


let person =[{names:"",age:0,gender:""}]
let personIndex = 0

function collectData(){
        person[personIndex] = {
            names: document.getElementById("inputName").value,
            age: document.getElementById("inputAge").value,
            gender: document.querySelector('input[name="gender"]:checked').value
        }
        table.innerHTML += `<tr><td>${personIndex+1}</td><td>${person[personIndex].names}</td><td>${person[personIndex].age}</td><td>${person[personIndex].gender}</td></tr>`
        personIndex++;        
        
        }