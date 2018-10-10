// add solution here
var musicians = [];
var instruments= [];
var largestArray = 0;
var answer = [];
function theBeatlesPlay(musicians, instruments){
  if (musicians.length > instruments.length){
    largestArray = musicians.length;
  }
  else{
    largestArray = instruments.length;
  }
  for(var i = 0; i<largestArray; i++){
    answer[i] = musicians[i] + " plays " + instruments[i];
  }
  return answer
}

var counter = 0;
var answer2 = [];
function johnLennonFacts(facts){
  while(counter < facts.length){
    answer2[counter] = facts[counter] + "!!!"
    console.log(facts[counter]);
    counter++
  }
  return answer2;
}

function iLoveTheBeatles(){
  
}