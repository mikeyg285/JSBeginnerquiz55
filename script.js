/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const quizForm = document.getElementById("quiz-form")
const answer = document.querySelectorAll(".answer")
const question = document.querySelectorAll(".question-item")
const alert = document.getElementById("alert")
//console.log(question)
// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
quizForm.addEventListener("submit", formSubmit) 
function formSubmit(e) {
  e.preventDefault()
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  var checkedAnswers = []
  answer.forEach(i => { if(i.checked){checkedAnswers.push(i)}})
  console.log (checkedAnswers)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  checkedAnswers.forEach(i => { console.log(i.value)})
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
  //console.log(question)
  question.forEach(i => {
    i.classList.remove("correct") 
    i.classList.add("incorrect")    
  })

  var totalScore = 0 
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
  checkedAnswers.forEach(i => { if(i.value=="true"){
    console.log("True has been hit")
    i.closest("div").parentElement.classList.add("correct")
    i.closest("div").parentElement.classList.remove("incorrect")
    totalScore++
}
})
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
  checkedAnswers.forEach(i => { if(i.value=="false"){
    console.log("False has been hit")
    i.closest("div").parentElement.classList.add("incorrect")
    i.closest("div").parentElement.classList.remove("correct")
}
})
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
  if(totalScore===3) {
    console.log("total score is " + totalScore)
    alert.classList.add("active")
    setTimeout(closeAlert, 1000)
  }
  function closeAlert() {
    alert.classList.remove("active")
  }
}