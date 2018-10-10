// add solution here
var musicians = [];
var instruments= [];
var largestArray = 0;
var answer = [];
function theBeatlesPlay(musicians, instruments){
  if (musicians.length() > instruments.length()){
    largestArray = musicians.length();
  }
  else{
    largestArray = instruments.length();
  }
  for(i = 0; i<largestArray;i++){
    array[i] = musicians[i] + instruments[i];
  }
}