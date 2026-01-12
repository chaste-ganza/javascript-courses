const studentList = [
    {name: "ashrafu", age:9, marks:12, isActive:false},
    {name: "Kalisa", age:12, marks:12, isActive:true},
    {name: "nelson", age:12, marks:20, isActive:false},
    {name: "david", age:11, marks:14, isActive:true},
    {name: "bruce", age:16, marks:16, isActive:false},
    {name: "Bob", age:9, marks:9, isActive:false},
    {name: "John", age:16, marks:14, isActive:true},
    {name: "Ken", age:13, marks:4, isActive:false}
]

//transformation of vaules
const students = studentList.map((student)=>{
    return({name: student.name, age:student.age})
})


//console.log(students)



//filter

const studentWithAge12 = studentList.filter((stud)=>{
    return stud.age===12;
});

//console.log(studentWithAge12)




//find


const studentWith12Mark = studentList.find((learner)=>{return learner.marks===12})

//console.log(studentWith12Mark)


//reduce


const sumOfMarks = studentList.reduce((acc,curr)=>{
    return acc + curr.marks
},0)


const average = sumOfMarks/studentList.length

console.log(average)


//explore about function "some" and "every"