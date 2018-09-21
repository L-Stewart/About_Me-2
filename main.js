'use strict';
var correct = 0;
var incorrect = 0;
var input = [];

//Asking for the visitors name
var userName = function(){
  var userName = prompt('Hello visitor, welcome to my site about me. Please tell me your name.');
  //console.log(userName + '\'s answers:');
  document.getElementById('guestName').innerHTML = userName + '\'s Answers:';

  alert('Hello ' + userName + ' , I\'m going to ask you some Yes or No questions about myself. Have fun!');
};

// Checking your knowledge of what keeps me alive: answer is yes
var nomNom = function(){
  var food = prompt('Do I like food?');
  console.log('Do I like food: ' + food);
  food = food.toUpperCase();
  document.getElementById('food').innerHTML = 'Do I like food: ' + food;

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

//Asking for a yes or no on my little ones
var brats = function(){
  var kids = prompt('Do I have any children?');
  console.log('Do I have kids: ' + kids);
  kids = kids.toUpperCase();
  document.getElementById('kids').innerHTML = 'Do I have kids: ' + kids;

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
};

//Looking for a reasonable answer about my thoughts on spiders
var eightLegs = function(){
  var spiders = prompt('Do I think that spiders are cool?');
  console.log('Do I like spiders:' + spiders);
  spiders = spiders.toUpperCase();
  document.getElementById('eightLegs').innerHTML = 'Do I like Spiders: ' + spiders;

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
};

//Asking about my favorite season
var cold = function(){
  var season = prompt('Could winter be considered my favorite season?');
  console.log('Is winter my favorite season: ' + season);
  season = season.toUpperCase();
  document.getElementById('winter').innerHTML = 'Is winter my favorite season: ' + season;

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
};

//Asking if im 100  years old
var babyFace = function(){
  var age = prompt('Would you say that I am 100 years old?');
  console.log('Am I 100 years old:' + age);
  age = age.toUpperCase();
  document.getElementById('100').innerHTML = 'Am I 100 years old: ' + age;
  
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
};

//Random number guessing game
var randomNumber = function(){
  alert('We are going to play a fun and challenging number guessing game. You need to guess a number between 1 and 10.');
  var randomNum = Math.floor((Math.random() * 10) +1);
  console.log(randomNum);

  var attempts = 0;
  var guess = prompt('Guess a number now please. Remember its between 0 and 10.');
  var guessInt = parseInt(guess);

  for(attempts = 0; attempts < 4; attempts++){
    if(guessInt === randomNum){
      correct++;
      alert('That is correct, GREAT JOB!');
      break;

    }else if(attempts === 3){
      alert('Those were some good trys. The number you were looking for was ' + randomNum);
      incorrect++;

    }else if(guessInt > randomNum){
      guessInt = prompt('Thats high lets try again.');
      guessInt = parseInt(guessInt);
      //console.log(guessInt);

    }else if(guessInt < randomNum){
      guessInt = prompt('Thats low lets try again.');
      guessInt = parseInt(guessInt);
      //console.log(guessInt);

    }
  }
};

//Guessing game with an arrey of pets I have had
var animals = function(){
  var pets = ['dog', 'cat', 'rabbit', 'gecko', 'frog'];
  var attempts = 6;
  var answer = false;
  console.log(pets);
  console.log(attempts);

  alert('For this last game you are going to guess one try at a time the different types of pets I have had in my life. Starting.... NOW!');

  while(attempts > 0 && answer === false){
    var petGuess = prompt('You have ' + attempts + ' left to try and get a right answer.');

    if(pets.includes(petGuess)){
      correct++;
      alert('That is correct, I have had Dogs, Cats, Rabbits, Geckos, and Frogs as pets too.');
      answer = true;
      break;

    } else {
      attempts--;
      alert('That is not one of the pets that I have had. You have ' + attempts + ' left to try and get a right answer.');
    }
  }

  if (attempts === 0){
    incorrect++;
    alert('Nice try but you have run out of guesses. I have had ' + pets + 'as pets.');
  }
};

//Array that runs through the yes/no questions
var questions = [userName, nomNom, brats, eightLegs, cold, babyFace, randomNumber, animals];
var i = 0, length = questions.length;
for(i; i < length; i++){
  var runThru = questions[i];
  runThru();
}

alert('You got ' + correct + ' out of 7 questions correct');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);
console.log(input);
