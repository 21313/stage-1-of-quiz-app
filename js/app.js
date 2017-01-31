var startingIndex = 0;
var score = 0;

var myQuiz = [
    {
        id: 0,
        question: "MEAN Stack Developing is based on which language.",
        choice0: "java",
        choice1: "javaScript",
        choice2: "Phython",
        choice3: "c#",
        correctAnswer: "javaScript"
    },
    {
        id: 1,
        question: "Which statement is correct for the language of javaScript",
        choice0: "javaScript is Completely OOP language.",
        choice1: "javaScript compile not interpret.",
        choice2: "javaScript is a Static computer Programming language.",
        choice3: "javaScript is a programming language of HTML & Web",
        correctAnswer: "javaScript is a programming language of HTML & Web"
    },
    {
        id: 2,
        question: "In javaScript objects there is an attribute containing.",
        choice0: "functions",
        choice1: "Property & values",
        choice2: "Property",
        choice3: "None of them",
        correctAnswer: "Property & values"

    },
    {
        id: 3,
        question : "hellosdsodjopsjdpokpofpf[piwq[f[qwdp[wpfdp[wfd[pwe]]]]]]",
        // question: "<p id='demo'>This is a demonstration.</p>",
        choice0: "#demo.innerHTML = 'Hello World!'",
        choice1: "document.getElement('p').innerHTML = 'Hello World!';",
        choice2: "document.getElementById('demo').innerHTML = 'Hello World!';",
        choice3: "document.getElementByName('p').innerHTML = 'Hello World!';",
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        id: 4,
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "alertBox('Hello World');",
        choice2: "msg('Hello World');",
        choice3: "msgBox('Hello World');",
        choice4: "alert('Hello World)';",
        correctAnswer: "alert('Hello World)';"
    }
];
function homePage() {
    var hiddenScore = document.querySelector("#scoreDiv").setAttribute("style", "visibility : hidden");
    var hiddenQuizSection = document.querySelector("#quizSection").setAttribute("style", "visibility: hidden");
}
function startQuiz() {
    var a = document.getElementById("nextquest");
    a.removeAttribute("disabled","disabled");
    var mainContent = document.querySelector("#mainContent").setAttribute("style", "display: none");
    var visibleQuizSection = document.querySelector("#quizSection").setAttribute("style", "visibility: visible");
    document.getElementById("question").innerHTML = myQuiz[0].question;
    document.getElementById("opt0").innerHTML = myQuiz[0].choice0;
    document.getElementById("radio0").value = myQuiz[0].choice0;
    document.getElementById("opt1").innerHTML = myQuiz[0].choice1;
    document.getElementById("radio1").value = myQuiz[0].choice1;
    document.getElementById("opt2").innerHTML = myQuiz[0].choice2;
    document.getElementById("radio2").value = myQuiz[0].choice2;
    document.getElementById("opt3").innerHTML = myQuiz[0].choice3;
    document.getElementById("radio3").value = myQuiz[0].choice3;

}

function nextButton() {
    var radiobutton = document.querySelector("input[name='radio']:checked").value;
    if (radiobutton) {
        var remove1 = document.getElementById("nextquest");
        remove1.removeAttribute("disabled", "disabled");
        nextQuestion();
    }
}

function nextQuestion() {
    startingIndex = startingIndex + 1;
    var correctAnswer = myQuiz[startingIndex - 1].correctAnswer;
    var radiobutton = document.querySelector('input[name="radio"]:checked');
    if (radiobutton === correctAnswer) {
       var rightAnswer =  rightAnswer++;
    }
    else {
        rightAnswer;
    }
    if (myQuiz[startingIndex] === undefined) {
        var correctAnswer = rightAnswer / myQuiz.length * 100;
        document.getElementById("score").innerHTML = correctAnswer;
        // score = score.Mathround(score);
    }
    else {
        document.getElementById("question").innerHTML = myQuiz[startingIndex].question;
        document.getElementById("opt0").innerHTML = myQuiz[startingIndex].choice0;
        document.getElementById("radio0").value = myQuiz[startingIndex].choice0;
        document.getElementById("opt1").innerHTML = myQuiz[startingIndex].choice1;
        document.getElementById("radio1").value = myQuiz[startingIndex].choice1;
        document.getElementById("opt2").innerHTML = myQuiz[startingIndex].choice2;
        document.getElementById("radio2").innerHTML = myQuiz[startingIndex].choice2;
        document.getElementById("opt3").innerHTML = myQuiz[startingIndex].choice3;
        document.getElementById("radio3").innerHTML = myQuiz[startingIndex].choice3;
    }
}