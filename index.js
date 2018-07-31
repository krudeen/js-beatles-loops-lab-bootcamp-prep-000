// add solution here

  
function theBeatlesPlay(musicians, instruments){
   var x = [];
   
   for (let i=0; i<musicians.length; i++) {
  x.push(musicians[i] + " plays " + instruments[i]);
}

return x;
}
