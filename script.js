// Good Luck 💪🏾
function makeCapital(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
 
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
  }
  console.log(makeCapital("my name is ali"));
  
  console.log(makeCapital("fikrcamp Bootcamp"));
  
  console.log(makeCapital("i live In Paris"));
