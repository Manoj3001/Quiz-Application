const quizData = [
    {
        num: 1,
        question: "Suresh Raina was Born on",
        a: "30 January 2002",
        b: "27 November 1986",
        c: "9 June 2018",
        d: "12 April 1999",
        correct: "b",
    },
    {
        num: 2,
        question: "What team does Suresh Raina captained in 2016 IPL edition",
        a: "Chennai Super Kings",
        b: "Kolkata Knight Riders",
        c: "Gujarat Lions",
        d: "Mumbai Indians",
        correct: "c",
    },
    {
        num: 3,
        question: "Suresh Raina is an occasional",
        a: "Off Spinner",
        b: "Leg Spinner",
        c: "Medium Pacer",
        d: "Chinaman Bowler",
        correct: "a",
    },
    {
        num: 4,
        question: "Suresh Raina announced his retirement in",
        a: "1996",
        b: "2012",
        c: "2011",
        d: "2020",
        correct: "d",
    },


];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const nextBtn = document.getElementById('next_btn')
const prevBtn = document.getElementById('prev_btn')


let currentQuiz = 0
let score = 0
let question_num = 1;


loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
next_btn.onclick = ()=>
{
    if(currentQuiz < quizData.length - 1){
        currentQuiz++; 
        question_num++;
        loadQuiz(currentQuiz);
    }
}
prev_btn.onclick = ()=>
{
    if(currentQuiz <= quizData.length - 1){
        currentQuiz--; 
        question_num--;
        loadQuiz(currentQuiz);
    }
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly
           </h2><button onclick="location.reload()">Reload</button>`
       }
    }
})