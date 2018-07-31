// add solution here

  
function theBeatlesPlay(musicians, instruments){
   var x = [];
   
   for (let i=0; i<musicians.length; i++) {
  x.push(musicians[i] + " plays " + instruments[i]);
}

return x;
}

function johnLennonFacts(facts){
  var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

}