'use strict';

var userName = prompt('Welcome to my site about me, what\'s your name?'); //Asking for the visitors name
console.log('Visitor\'s name: ' + userName + '.');

// Checking your knowledge of what keeps me alive: answer is yes
var food = prompt('Do I like food?');
console.log('Do I like food: ' + food);
food = food.toUpperCase();
if(food === 'YES' || food === 'YA' || food === 'YUP' || food === 'SI' || food === 'Y'){
  alert('You bet I love food, its\'s the BEST!');
} else if(food === 'NO' || food === 'NOPE' || food === 'N'){
  alert('You dont know me \:\(');
}else {
  alert('You need to answer this, it\'s important.');
}

//Asking for a yes or no on my little ones
var kids = prompt('Do I have any childern?');
console.log('Do I have kids: ' + kids);
kids = kids.toUpperCase();
if(kids === 'YES' || kids === 'YA' || kids === 'YUP' || kids === 'SI' || kids === 'Y'){
  alert('Totally, I have 3 little ones and the oldest just started kindergarten');
} else if(kids === 'NO' || kids === 'NOPE' || kids === 'N'){
  alert('That would be false my so-called-friend.');
}else {
  alert('You need to answer this, it\'s important.');
}

//Looking for a reasonable answer about my thoughts on spiders
var spiders = prompt('Do I think that spiders are cool?');
console.log('Are spiders ok:' + spiders);
spiders = spiders.toUpperCase();
if(spiders === 'NO' || spiders === 'NOPE' || spiders === 'NEVER' || spiders === 'NADA' || spiders ==='N'){
  alert('If I see them they are fine its what happens when they ninja out of site thats the problem. Well done.');
} else if(spiders === 'YES' || spiders === 'YA' || spiders === 'YUP' || spiders === 'SI' || spiders === 'Y'){
  alert('You and I may not be able to hangout. Unless you have a pet spider named Joey, then your Cool.');
}else {
  alert('You need to answer this, it\'s important.');
}

//Asking about my favorite season
var season = prompt('Could winter be considered my favorite season?');
console.log('Favorite season: ' + season);
season = season.toUpperCase();
if(season === 'YES' || season === 'YA' || season === 'YUP' || season === 'SI' || season === 'Y'){
  alert('I love everything about winter.');
} else if(season === 'NO' || season === 'NOPE' || season === 'N'){
  alert('BUT THINK OF ALL THE SNOW!!!!!.');
}else {
  alert('You need to answer this, it\'s important.');
}

//Asking if im 100  years old
var age = prompt('Would you say that I am 100 years old?');
console.log('Do they think Im old:' + age);
age = age.toUpperCase();
if(age === 'NO' || age === 'NOPE' || age === 'NEVER' || age === 'NADA' || age === 'N'){
  alert('That would be a safe guess, also thats correct.');
} else if(age === 'YES' || age === 'YA' || age === 'YUP' || age === 'SI' || age === 'Y'){
  alert('Your eyes may be decieving you friend.');
}else {
  alert('You need to answer this, it\'s important.');
}

