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

let iter = generateDigitsOfPi();
let t = 0;

const app = require('express')();

app.get('/', (req, res) => {
  t += 50;
  res.json({
    digitsCount: t,
    piOutput: `${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}`,
  });
});

app.listen(3000, () => console.log('Online On Port 3000'))

//console.log('Pi Calculator');

//setInterval(() => {
//  t += 50;
//  console.log(
//    `${t}th Digits = ${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}${iter.next().value}`
//  );
//}, 100);
