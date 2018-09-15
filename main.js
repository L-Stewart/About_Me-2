'use strict';
var correct = 0;
var incorrect = 0;

var userName = function(){
  var userName = prompt('Hello visitor, welcome to my site about me. Please tell me your name.');
  console.log(userName);
  alert('Hello ' + userName + ' , I\'m going to ask you some Yes or No questions about myself. Have fun!');
};
userName();


// Checking your knowledge of what keeps me alive: answer is yes
var nomnom = function(){
  var food = prompt('Do I like food?');
  console.log('Do I like food: ' + food);
  food = food.toUpperCase();
  if(food === 'YES' || food === 'YA' || food === 'YUP' || food === 'SI' || food === 'Y'){
    correct++;
    alert('You bet I love food, its\'s the BEST!');
  } else if(food === 'NO' || food === 'NOPE' || food === 'N'){
    incorrect++;
    alert('You dont know me \:\(');
  }else {
    incorrect++;
    alert('You need to answer this, it\'s important.');
  }
};
nomnom();

//Asking for a yes or no on my little ones
var brats = function(){
  var kids = prompt('Do I have any childern?');
  console.log('Do I have kids: ' + kids);
  kids = kids.toUpperCase();
  if(kids === 'YES' || kids === 'YA' || kids === 'YUP' || kids === 'SI' || kids === 'Y'){
    correct++;
    alert('Totally, I have 3 little ones and the oldest just started kindergarten');
  } else if(kids === 'NO' || kids === 'NOPE' || kids === 'N'){
    incorrect++;
    alert('That would be false my so-called-friend.');
  }else {
    incorrect++;
    alert('You need to answer this, it\'s important.');
  }
}
brats();

//Looking for a reasonable answer about my thoughts on spiders
var eightLegs = function(){
  var spiders = prompt('Do I think that spiders are cool?');
  console.log('Do I like spiders:' + spiders);
  spiders = spiders.toUpperCase();
  if(spiders === 'NO' || spiders === 'NOPE' || spiders === 'NEVER' || spiders === 'NADA' || spiders ==='N'){
    correct++;
    alert('If I see them they are fine its what happens when they ninja out of site thats the problem. Well done.');
  } else if(spiders === 'YES' || spiders === 'YA' || spiders === 'YUP' || spiders === 'SI' || spiders === 'Y'){
    incorrect++;
    alert('You and I may not be able to hangout. Unless you have a pet spider named Joey, then your Cool.');
  }else {
    incorrect++;
    alert('You need to answer this, it\'s important.');
  }
}
eightLegs();

//Asking about my favorite season
var cold = function(){
  var season = prompt('Could winter be considered my favorite season?');
  console.log('Is winter my favorite season: ' + season);
  season = season.toUpperCase();
  if(season === 'YES' || season === 'YA' || season === 'YUP' || season === 'SI' || season === 'Y'){
    correct++;
    alert('I love everything about winter.');
  } else if(season === 'NO' || season === 'NOPE' || season === 'N'){
    incorrect++;
    alert('BUT THINK OF ALL THE SNOW!!!!!.');
  }else {
    incorrect++;
    alert('You need to answer this, it\'s important.');
  }
}
cold();

//Asking if im 100  years old
var babyFace = function(){
  var age = prompt('Would you say that I am 100 years old?');
  console.log('Am I 100 years old:' + age);
  age = age.toUpperCase();
  if(age === 'NO' || age === 'NOPE' || age === 'NEVER' || age === 'NADA' || age === 'N'){
    correct++;
    alert('That would be a safe guess, also thats correct.');
  } else if(age === 'YES' || age === 'YA' || age === 'YUP' || age === 'SI' || age === 'Y'){
    incorrect++;
    alert('Your eyes may be decieving you friend.');
  }else {
    incorrect++;
    alert('You need to answer this, it\'s important.');
  }
}
babyFace();

var randomNumber = function(){
  alert('We are going to play a fun and challenging number guessing game. You need to guess a number between 0 and 10.');
  var randomNum = Math.floor((Math.random() * 10) +1);
  console.log(randomNum);

  var guess = prompt('Guess a number now please. Remember its between 0 and 10.');
  var guessInt = parseInt(guess);

  for(var i = 0; i < 3; i++){
    if(guessInt === randomNum){
      correct++;
      alert('That is correct, GREAT JOB!');
      break;
    }else if(guessInt > randomNum){
      guessInt = prompt('Thats high lets try again.');
      guessInt = parseInt(guessInt);
      console.log('high: ' + guessInt);
    }else if(guessInt < randomNum){
      guessInt = prompt('Thats low lets try again.');
      guessInt = parseInt(guessInt);
      console.log('Low: ' + guessInt);
    }else{

      if(i === 3){
        incorrect++;
        alert('Good try. Maybe next time!');
      }
    }
  }
};


randomNumber();

//Guessing game with an arrey of pets I have had
var animals = function(){
  var pets = ['dog', 'cat', 'rabbit', 'gecko', 'frog'];
  var attemts = 6;
  var answer = false;
  console.log(pets);
  console.log(attemts);

  alert('For this last game you are going to guess one try at a time the different types of pets I have had in my life. Starting.... NOW!');

  while(attemts > 0 && answer === false){
    var petGuess = prompt('You have ' + attemts + ' left to try and get a right answer.');

    if(pets.includes(petGuess)){
      correct++;
      alert('That is correct, I have had Dogs, Cats, Rabbits, Gecko\'s, and Frogs as pets too.');
      answer = true;
      break;

    } else {
      attemts--;
      alert('That is not one of the pets that I have had. You have ' + attemts + ' left to try and get a right answer.');
    }
  }

  if (attemts === 0){
    incorrect++;
    alert('Nice try but you have run out of guesses. I have had ' + pets + 'as pets.');
  }
};

animals();
alert('You got ' + correct + ' out of 7 questions correct');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);

// //An input section that puts the visitors answers to the questions in a list next to my answers
// var visitor = [userName, food, kids, spiders, season, age];
// var attemps = 6;
// var
























// var fruitAnswer = prompt('What are pandas favorite fruits?');
// var answeredCorrectly = false;
// var guessCounter = 6;

// do{
//     var fruitAnswer = prompt('What are pandas favorite fruits?');

//     for(var i = 0; i < favoriteFruits.length; i++){
//         if(favoriteFruits[i] === fruitAnswer){
//             answeredCorrectly = true;
//             break;
//         }
//     }

//     if(answeredCorrectly){
//         alert(favoriteFruits[i])
//         alert('Nice job, they like tangeriens, durian, canteloupe, strawberries, and dragons.');
//         correctGuesses++;
//     } else {
//         alert('Nice try, they like tangeriens, durian, canteloupe, strawberries, and dragons.');
//     }
// }
// }while(guessCounter > 0 && !answeredCorrectly);

// if(!answeredCorrectly){
//     alert('Nice try, they like tangeriens, durian, canteloupe, strawberries, and dragons.');
// }
