// Getting elements
const submit = document.getElementById("submit");
const names = document.getElementById("nameInput");
const school = document.getElementById("schoolInput");
const code = document.getElementById("codeInput");
const age = document.getElementById("ageInput");

const nameDisplay = document.getElementById("nameDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const schoolDisplay = document.getElementById("schoolDisplay");
const codeDisplay = document.getElementById("codeDisplay");


const submitName = document.getElementById("submitName");
const submitAge = document.getElementById("submitAge");
const submitSchool = document.getElementById("submitSchool");
const submitCode = document.getElementById("submitCode");
let cardLayout = document.getElementById("cardLayout");


// Initially hide the input fields and buttons
names.style.display = "none";
school.style.display = "none";
code.style.display = "none";
age.style.display = "none";

submitName.style.display = "none";
submitAge.style.display = "none";
submitSchool.style.display = "none";
submitCode.style.display = "none";

cardLayout.style.display = "none";


// Event listener for the start button
submit.addEventListener("click", function() {
    names.style.display = "initial";
    submitName.style.display = "initial";
    submit.style.display = "none"; // Hide the start button
});

// Handle name submission
submitName.addEventListener("click", function() {
    if (names.value === "") {
        alert("Please fill in your name.");
    } else {
        names.style.display = "none";
        submitName.style.display = "none";
        age.style.display = "initial";
        submitAge.style.display = "initial";
    }
});

// Handle age submission
submitAge.addEventListener("click", function() {
    if (age.value === "") {
        alert("Please fill in your age.");
    } else {
        age.style.display = "none";
        submitAge.style.display = "none";
        school.style.display = "initial";
        submitSchool.style.display = "initial";
    }
});

// Handle school submission
submitSchool.addEventListener("click", function() {
    if (school.value === "") {
        alert("Please fill in your school.");
    } else {
        school.style.display = "none";
        submitSchool.style.display = "none";
        code.style.display = "initial";
        submitCode.style.display = "initial";
    }
});

// Handle code submission
submitCode.addEventListener("click", function() {
    if (code.value === "") {
        alert("Please fill in your code.");
    } else {
        code.style.display = "none";
        submitCode.style.display = "none";
        cardLayout.style.display = "initial";
        nameDisplay = names;
        ageDisplay = age;
        schoolDisplay = school;
        codeDisplay = code;
    }
});
