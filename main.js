// requiring our Classroom module exported from classroom.js
var inquirer = require("inquirer");
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Darin", 803);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Jacob", "Coding in Modern Times", 3.33);
// firstClass.addStudent("Stacy", "JavaScript for Fun and Profit", 3.87);

addStudentInfo();
// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
function addStudentInfo() {
    inquirer.prompt([{
        name: "name",
        message: "Name of student?"
    }, {
        name: "favoritesubject",
        message: "What is the student's favorite subject?"
    }, {
        name: "studentgpa",
        message: "Student GPA?"
    }, {
        type: "confirm",
        message: "Enter another student?",
        name: "continue",
        default: true
    }]).then(function(answers) {
        // initializes the variable newguy to be a programmer object which will
        // take in all of the user's answers to the questions above
        console.log(answers);
        console.log(answers.name + "\n" + answers.favoritesubject + "\n" + answers.studentgpa)
        var newStudent = new firstClass.addStudent(
            answers.name,
            answers.favoritesubject,
            answers.studentgpa)

        // if (answers.continue) {
        //     addStudentInfo();
        // } else{
        // 	console.log(firstClass);
        // }
    })
}

