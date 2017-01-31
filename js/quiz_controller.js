// function Quiz(questions){
//     this.scroe = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }
// //First function to check the currentIndex of the Question
// Quiz.prototype.getQuestionIndex = function(){
//     return this.questions[this.questionIndex];
// }

// //Second function to check the quiz is ended or not
// Quiz.prototype.isEnded = function(){
//     return this.questions.length === questionIndex;
// }

// //Third function is to check the answer is correct or not
// Quiz.prototype.guess = function(answer){
//     this.questionIndex++;
//     if(this.getQuestionIndex().correctAnswer(answer)){
//         this.score++;
//     }
// }