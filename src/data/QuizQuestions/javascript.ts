// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple
// @ts-nocheck

import { Question, Topic } from '.'

const questions: Question[] = [
  {
    question: "What's the output?",
    code: `function sayHi() {
      console.log(name);
      console.log(age);
      var name = 'Lydia';
      let age = 21;
    }
    
    sayHi();`,
    choices: [
      'Lydia and undefined',
      'Lydia and ReferenceError',
      'ReferenceError and 21',
      'undefined and ReferenceError',
    ],
    type: 'MAQs',
    correctAnswers: ['undefined and ReferenceError'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    },`,
    choices: ['0 1 2 and 0 1 2', '0 1 2 and 3 3 3', '3 3 3 and 0 1 2', '-'],
    type: 'MAQs',
    correctAnswers: ['3 3 3 and 0 1 2'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `function getAge() {
      'use strict';
      age = 21;
      console.log(age);
    }
    
    getAge();`,
    choices: ['21', 'undefined', 'ReferenceError', 'TypeError'],
    type: 'MAQs',
    correctAnswers: ['ReferenceError'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `var num = 8;
    var num = 10;
    
    console.log(num);`,
    choices: ['8', '10', 'ReferenceError', 'SyntaxError'],
    type: 'MAQs',
    correctAnswers: ['10'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `function a() {
      console.log("hi);
    }

    a();
    function b(){
      console.log("bye")
    }`,
    choices: ['hi', 'bye'],
    type: 'boolean',
    correctAnswers: ['bye'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `(() => {
      let x, y;
      try {
        throw new Error();
      } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
      }
      console.log(x);
      console.log(y);
    })();`,
    choices: [
      '1 undefined 2',
      'undefined undefined undefined',
      '1 1 2',
      '1 undefined undefined',
    ],
    type: 'MAQs',
    correctAnswers: ['1 undefined 2'],
    score: 10,
  },
  {
    question: 'Everything in JavaScript is either a...',

    choices: [
      'primitive or object',
      'function or object',
      'number or object',
      'string or object',
    ],
    type: 'MAQs',
    correctAnswers: ['primitive or object'],
    score: 10,
  },
  {
    question: 'Whats the output?.',
    code: `
    function loop() {
      for (i = 5; i < 5; i++) {
        console.log(i)
      }
      console.log('final', i)
    }
    
    loop()
    `,
    choices: ['1 2 3 4 5, 5', '5 5 5 5 5, 5', 'ReferenceError', 'TypeError'],
    type: 'MAQs',
    correctAnswers: ['ReferenceError'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);`,
    choices: [
      'undefined, number',
      'number, number',
      'object, number',
      'number, undifined',
    ],
    type: 'MAQs',
    correctAnswers: ['undefined, number'],
    score: 10,
  },
  {
    question: "What's the output?",
    code: `var favouriteFood = "Mangos";

    var food Thoughts = function ()
    
    console.log("Original favourite food: + favouriteFood);
    
    var favouriteFood = "Pizza";
    
    console.log("New favourite food: " + favouriteFood);
    
    };
    
    
     foodThoughts()`,
    choices: [
      'Original favourite food: Mangos, New favourite food: sushi',
      'Original favourite food: undefined, New favourite food: undefined',
      'Original favourite food: undefined, New favourite food: sushi',
      'Original favourite food: Mangos, New favourite food: undefined',
    ],
    type: 'MAQs',
    correctAnswers: ['Original favourite food: undefined, New favourite food: sushi'],
    score: 10,
  },
]

export const javascript: Topic = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: questions?.length,
  totalScore: questions?.length * 10,
  totalTime: questions?.length * 45,
  questions: questions,
}

function loop() {
  for (i = 5; i < 5; i++) {
    console.log(i)
  }
  console.log('final', i)
}

loop()
