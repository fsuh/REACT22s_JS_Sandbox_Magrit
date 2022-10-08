// prints all psositive numbers that are smaller than 100 and even in particular order
/*for (let evens = 1; evens <= 100; evens++) {
    if (evens % 2 === 0) {
        console.log(evens);
    }
}*/

// Correction of code during class

let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
  answer += ' ' + i + ' ';
  answer += ' ' + end + ' ';
  end -= 2;
}
console.log(answer);