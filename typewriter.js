const sentence = '"I don\'t know...  -Celeste Stephens\n';
// the first callback on the handler will be scheduled in 1 second;
let appointmentTime = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, appointmentTime)
  appointmentTime += 50;
}