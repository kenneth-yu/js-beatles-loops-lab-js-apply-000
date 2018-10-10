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

function johnLennonFacts(facts){
  while()
}

function iLoveTheBeatles(){
  
}