const readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
let score = 0;

const nameInput = readlineSync.question("Please tell us your name?\n");
console.log(
  chalk.bold.bgRedBright.underline.black(
    `Welcome ${nameInput} to ARE YOU A POTTERHEAD?\n`
  )
);
console.log(`Rules & Instructions: 
 1) ${nameInput}, there are 12 questions.
 2) You will get 2 points on the right answer.
 3) You will lose 1 point on the wrong answer\n`);

console.log(chalk.underline.cyanBright(`lets start, ${nameInput}!\n`));

function play(question, answer) {
  const quizInput = readlineSync.question(question);

  const quizAns = answer;

  if (quizInput === quizAns) {
    console.log(`You entered ${quizInput}`);
    console.log(chalk.bold.greenBright(`Right Answer!`));
    score = score + 2;
  } else {
    console.log(`You entered ${quizInput}`);
    console.log(chalk.bold.red(`Wrong Answer!`));
    score = score - 1;
  }
  if (score < 0) {
    score = 0;
  }
  console.log(chalk.underline.bold.blueBright(`Score: ${score}\n`));
}

// if (score > 8) {
//   console.log(`You won!`)
// } else {
//   console.log()
// }

const quesAns = [
  {
    question: `What spell did Harry use to kill Lord Voldemort?
  a: Expelliarmus
  b: Expecto Patronum
  c: Avada Kedavra
  d: Accio\n`,
    answer: `a`,
  },
  {
    question: `At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell ‘Serpensortia’?
  a: Frog
  b: Snake
  c: Dragon
  d: Bear\n`,
    answer: `b`,
  },
  {
    question: `Which Patronus belongs to Luna Lovegood?
  a: Doe
  b: Rabbit
  c: Dog
  d: Horse\n`,
    answer: `b`,
  },
  {
    question: `The ‘Felifors’ spell turns a cat into a what?
  a: Hat
  b: Bat
  c: Matchbox
  d: cauldron\n`,
    answer: `d`,
  },
  {
    question: `Which element is associated with Hufflepuff?
  a: Fire
  b: Air
  c: Water
  d: Earth\n`,
    answer: `d`,
  },
  {
    question: `What was the name of the Black family’s house elf?
  a: Dobby
  b: Winky
  c: Kreacher
  d: Hokey\n`,
    answer: `c`,
  },
  {
    question: `When unearthed, a mandrake will do what?
  a: Burp
  b: Scream
  c: Laugh'
  d: Dance\n`,
    answer: `b`,
  },
  {
    question: `The tears of which animal are the only known antidote to basilisk venom?
  a: Phoenix
  b: Billywig 
  c: Hippogriff
  d: Boggart\n`,
    answer: `a`,
  },
  {
    question: `What position does Harry play on his Quidditch team?
  a: Chaser
  b: Keeper
  c: Budger
  d: Seeker\n`,
    answer: `d`,
  },
  {
    question: `Albus Dumbledore destroyed which Horcrux?
  a: Slytherin's locket
  b: Nagini
  c: Hufflepuff's Cup
  d: Marvolo Gaunt's Ring\n`,
    answer: `d`,
  },
  {
    question: `Who knocks out the troll in the ladies’ bathroom in Harry Potter and the Philosopher’s Stone?
  a: Harry
  b: Ron
  c: Hermione
  d: Snape\n`,
    answer: `b`,
  },
  {
    question: `Finish the inscription on Dobby’s tombstone: ‘Here lies Dobby…
  a: 'A true friend'
  b: 'The best servant'
  c: 'A free elf'
  d: 'Master of socks'\n`,
    answer: `c`,
  },
];

for (let i = 0; i < quesAns.length; i++) {
  play(quesAns[i].question, quesAns[i].answer);
}

console.log(`\n`);

console.log(
  chalk.bold.yellowBright(`Congratulations! Your total score is ${score}.`)
);
const remark =
  score === 24
    ? `Remark: You are a perfect Potterhead!😲`
    : score < 24 && score > 10
    ? `Remark: You do know quite a good deal about Harry Potter!🤠`
    : `Remark: You don't know much about Harry Potter.🙁`;
console.log(chalk.bold.yellowBright.underline(remark));
