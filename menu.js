let element = document.getElementById(`paragraph`);
element.innerHTML = 'Dare to click the button';
let isSubmitted = document.getElementById("submit");


const button = document.getElementById("submit");

button.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});

button.addEventListener("click", function() {
  element.innerHTML = "Congrats you solved the unsolvable!"
})

