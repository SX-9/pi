#! /bin/node
function * generateDigitsOfPi() {
  let q = 1n;
  let r = 180n;
  let t = 60n;
  let i = 2n;
  while (true) {
    let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
    yield Number(digit);
    let u = i * 3n;
    u = (u + 1n) * 3n * (u + 2n);
    r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
    q *= 10n * i * (i++ * 2n - 1n);
    t *= u;
  }
}

const { writeFileSync, readFileSync } = require('fs');

let iter = generateDigitsOfPi();
let t = 0;
let array = [];
let file = readFileSync(process.cwd() + '/pi.txt');

console.log('\nCalculating Pi...\nNew Digit Every 1 Milisecond');

const calc = () => {
  t++;
  array.push(iter.next().value);
  writeFileSync('./pi.txt', array.join(''));
}

setInterval(calc, 1);

process.on('SIGINT' || 'SIGTERM' || 'SIGKILL' || 'SIGQUIT' || 'SIGSTOP', () => {
  console.log('\n\nCounted Up To ' + t + ' Digits');
  process.exit();
});
