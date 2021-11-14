var readlineSync = require("readline-sync")
console.log("Hi Mate!!! Good Day!!!");
var userName = readlineSync.question("What do your friends call you :");
console.log("Hey "+ userName +" Welcome to Basic Computer Science Quiz");
console.log("In which you have Two LevelsCSE if you score full marks in Level-1 you will promoted to Level-2");
var userSpecialization = readlineSync.question("Hey "+userName+" What's your B.Tech Specialization :");
if(userSpecialization==="CSE"){
  console.log("Then you are going to rock the Quiz!!!");
}else{
  console.log("Ohooo Nooo!! But you can able to answer the baisc of Computers!!!");
}
var score=0;
var level=1;
var wrong=0;
var highestScoreUser={name:"",result:0};

function Quiz(Question,Answer){
  console.log('......')
var userAnswer=readlineSync.question(Question);
console.log(typeof userAnswer)
if(userAnswer.toUpperCase()===Answer.toUpperCase()){
  console.log("You have Given Right answer");
  score=score+1;
  if(score===4 && wrong ===0){
    console.log("Your are 1 point near to reach the level 2 Quiz!!! ");
  }
}else{
  wrong=wrong-1;
  console.log("You have Given wrong answer");
}
}
var quizQuestions=[{question:"Who invented Computer ",answer:"Charles Babbage"},{question:"What is the First Computer Language ",answer:"FORTRAN"},{question:"In which Year FORTRAN developed:",answer:"1954"},{question:"When was C Programming developed:",answer:"1970"},{question:"Which Programming Language is easy to learn now-days:",answer:"python"}]
for(var i=0;i<quizQuestions.length;i++){
 // var currentQuestion=qui
  Quiz(quizQuestions[i].question,quizQuestions[i].answer)
}
if(score===5 && level===1){
  level=level+1;
  console.log("Congrats You have finished Level-1 Quiz and entering into Level-2");
}
var quizQuestion2=[{question:"At what lab C langauge developed : ",answer:"AT&T Bell lab"},{question:"Who developed C language : ",answer:"Dennis Ritchie"}];
for(var i=0;i<quizQuestion2.lenght;i++){
  Quiz(quizQuestion2[i].question,quizQuestion2[i].answer);
}
console.log("Your Final Score is :"+score);
if(score>highestScoreUser.result){
  highestScoreUser.name=userName;
  highestScoreUser.result=score;
}
console.log("-----Highest Score of the quiz event Till Now!!-----");
console.log(highestScoreUser.name+" with score "+highestScoreUser.result);
console.log("------Thank you------");