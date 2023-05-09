const sentence = "hello there from lighthouse labs";
const sentLen = sentence.length
setTimeout(() => {
  //  console.log(char); 
    process.stdout.write('\n');
  }, (sentLen + 1) * 50);

for (let x = 0; x < sentLen; x++){
  setTimeout(() => {
    //  console.log(char); 
      process.stdout.write(sentence[x]);
    }, x * 50);
}

//console.log("new line?");

// process.stdout.write("\n");

