let DSA = [];
let PL = [];
let Networks = [];

function enrollStudent(subjectArray) {
  let studentName = prompt("Enter the name of the student to enroll:");
  subjectArray.push(studentName);
  console.log(`${studentName} enrolled in ${subjectArray.length > 1 ? "the" : "a"} ${subjectArray.length} ${subjectArray.length > 1 ? "students" : "student"} in ${subjectArray === DSA ? "DSA" : subjectArray === PL ? "PL" : "Networks"}`);
}

function unenrollStudent(subjectArray) {
  if (subjectArray.length === 0) {
    console.log("No students are currently enrolled in this subject.");
    return;
  }

  console.log("Currently enrolled students:");
  for (let i = 0; i < subjectArray.length; i++) {
    console.log(`${i + 1}. ${subjectArray[i]}`);
  }

  let studentName = prompt("Enter the name of the student to unenroll:");
  let studentIndex = subjectArray.indexOf(studentName);

  if (studentIndex !== -1) {
    subjectArray.splice(studentIndex, 1);
    console.log(`${studentName} has been unenrolled from ${subjectArray.length > 1 ? "the" : "a"} ${subjectArray.length} ${subjectArray.length > 1 ? "students" : "student"} in ${subjectArray === DSA ? "DSA" : subjectArray === PL ? "PL" : "Networks"}`);
  } else {
    console.log(`${studentName} is not enrolled in this subject.`);
  }
}

while (true) {
  let subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks");
  let operationChoice;

  if (subjectChoice.toUpperCase() === "A") {
    operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

    if (operationChoice.toUpperCase() === "A") {
      enrollStudent(DSA);
    } else if (operationChoice.toUpperCase() === "B") {
      unenrollStudent(DSA);
    } else if (operationChoice.toUpperCase() === "C") {
      continue; // Go back to subject selection
    } else if (operationChoice.toUpperCase() === "D") {
      console.log("DSA Students:");
      console.log(DSA);
      console.log("PL Students:");
      console.log(PL);
      console.log("Networks Students:");
      console.log(Networks);
      break; // Exit the program
    }
  } else if (subjectChoice.toUpperCase() === "B") {
    operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

    if (operationChoice.toUpperCase() === "A") {
      enrollStudent(PL);
    } else if (operationChoice.toUpperCase() === "B") {
      unenrollStudent(PL);
    } else if (operationChoice.toUpperCase() === "C") {
      continue; // Go back to subject selection
    } else if (operationChoice.toUpperCase() === "D") {
      console.log("DSA Students:");
      console.log(DSA);
      console.log("PL Students:");
      console.log(PL);
      console.log("Networks Students:");
      console.log(Networks);
      break; // Exit the program
    }
  } else if (subjectChoice.toUpperCase() === "C") {
    operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

    if (operationChoice.toUpperCase() === "A") {
      enrollStudent(Networks);
    } else if (operationChoice.toUpperCase() === "B") {
      unenrollStudent(Networks);
    } else if (operationChoice.toUpperCase() === "C") {
      continue; // Go back to subject selection
    } else if (operationChoice.toUpperCase() === "D") {
      console.log("DSA Students:");
      console.log(DSA);
      console.log("PL Students:");
      console.log(PL);
      console.log("Networks Students:");
      console.log(Networks);
      break; // Exit the program
    }
  }
}
