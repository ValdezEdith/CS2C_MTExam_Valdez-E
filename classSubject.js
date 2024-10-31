// Collect user information
let subjectTitle = prompt("Enter the Subject Title:");
let classSchedule = prompt("Enter the Class Schedule (Time, Days):");
let classroom = prompt("Enter the Classroom:");
let classInstructor = prompt("Enter the Class Instructor:");
let studentName = prompt("Enter the Student Name:");

// Log the information to the console
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}`);
