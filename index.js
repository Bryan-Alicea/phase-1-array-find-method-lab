// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(array){
     const foundWin = array.find(function(element){
        return element.result === "W"                    
     })

     if(foundWin){
        return foundWin.year
     }
  }
