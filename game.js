let level="easy";
let language="c";

let currentQuestion=null;
let answered=false;

let codeBox,result,scoreText,nextBtn,highScoreText;

/* score per language */
let scores={
c:0,
cpp:0,
java:0,
python:0
};

/* load highscores from browser */
let highScores=JSON.parse(localStorage.getItem("highScores"))||{
c:0,cpp:0,java:0,python:0
};

document.addEventListener("DOMContentLoaded",startGame);

function startGame(){
codeBox=document.getElementById("code-box");
result=document.getElementById("result");
scoreText=document.getElementById("score");
highScoreText=document.getElementById("highScore");
nextBtn=document.getElementById("nextBtn");

nextBtn.addEventListener("click",loadQuestion);

updateScoreDisplay();
loadQuestion();
}

function updateScoreDisplay(){
scoreText.innerText=scores[language];
highScoreText.innerText=highScores[language];
}

function getQuestion(){
let pool=Levels[language][level];
if(!pool||pool.length==0)return null;
return pool[Math.floor(Math.random()*pool.length)];
}

function loadQuestion(){
answered=false;
codeBox.innerHTML="";
result.innerText="";
currentQuestion=getQuestion();
if(!currentQuestion)return;

currentQuestion.code.forEach((line,index)=>{
let div=document.createElement("div");
div.className="line";
div.innerText=(index+1)+"  "+line;

div.onclick=function(){
if(answered)return;
answered=true;

if(index===currentQuestion.answer){
div.classList.add("correct");
result.innerText="Correct!";
scores[language]++;

/* update high score */
if(scores[language]>highScores[language]){
highScores[language]=scores[language];
localStorage.setItem("highScores",JSON.stringify(highScores));
}

}else{
div.classList.add("wrong");
result.innerText="Wrong!";
codeBox.children[currentQuestion.answer].classList.add("correct");
}

updateScoreDisplay();
};

codeBox.appendChild(div);
});
}

function setLevel(lvl){
level=lvl;
loadQuestion();
}

function setLanguage(lang){
language=lang;
updateScoreDisplay();
loadQuestion();
}
