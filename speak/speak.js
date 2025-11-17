const readText = document.getElementById("read");

readText.addEventListener("click",function(){
    const text = document.getElementById("text").value;
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
})

