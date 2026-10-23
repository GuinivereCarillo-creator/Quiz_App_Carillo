export type Question = {
  id: number
  question: string
  choices: string[]
  answer: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'A specific keys/shortcut for shutdowning a computer using a keyboard.',
    choices: ['Alt + F4 + Enter', 'Fn + Alt + F4', 'Alt+F3', 'Alt+F4'],
    answer: 'Alt + F4 + Enter',
  },
  {
    id: 2,
    question: 'Solve this: 1 + (7 x 5) - 9',
    choices: ['23', '28', '27', '29'],
    answer: '27',
  },
  {
    id: 3,
    question: 'What is the output of this code: \nvector<int> num = {1,2,3,4};\nnum.erase(num.begin()+1);for(int n : num) cout << n;',
    choices: ['134', '34', '124', '123'],
    answer: '134',
  },
  {
    id: 4,
    question: 'What is the output of this code: \n\nIn Java what is the purpose or use of this:\nChar.At(0)',
    choices: ['Adding a letter based on the index entered', 'Parsing it first to character and also Getting the first character by index', 'Returning the first word that the user entered', 'Parsing from int to character'],
    answer: 'Parsing it first to character and also Getting the first character by index',
  },
  {
    id: 5,
    question: 'What is the chemical symbol for gold?',
    choices: ['Ag', 'Gd', 'Au', 'Go'],
    answer: 'Au',
  },
  {
    id: 6,
    question: 'What is the sequence of the gear that Raider150 have:',
    choices: ['102345', '012345', '123450', '12034'],
    answer: '102345',
  },
  {
    id: 7,
    question: 'Which language runs directly in a web browser?',
    choices: ['Python', 'JavaScript', 'Java', 'C++'],
    answer: 'JavaScript',
  },
  {
    id: 8,
    question: 'In what year did humans first land on the Moon?',
    choices: ['1965', '1969', '1972', '1975'],
    answer: '1969',
  },
  {
    id: 9,
    question: 'What is the largest mammal in the world?',
    choices: ['Elephant', 'Blue whale', 'Giraffe', 'Orca'],
    answer: 'Blue whale',
  },
  {
    id: 10,
    question: 'Which country is home to the kangaroo?',
    choices: ['South Africa', 'Brazil', 'Australia', 'India'],
    answer: 'Australia',
  },
]
