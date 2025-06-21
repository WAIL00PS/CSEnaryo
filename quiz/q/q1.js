const questions = [
  {
    question: "Solve for x: 2x + 10 = 4x - 2",
    options: ["4", "5", "6", "7"],
    answer: [2],
    explanation:
      "Step-by-step solution: 2x + 10 = 4x - 2 → Subtract 2x from both sides: 10 = 2x - 2 → Add 2 to both sides: 12 = 2x → Divide by 2: x = 6.",
  },
  {
    question:
      "The project was delayed due to unforeseen _______ in the planning phase.",
    options: ["complications", "compliments", "complements", "compulsions"],
    answer: [0],
    explanation:
      "The correct answer is 'complications' because it means unexpected problems or difficulties. 'Compliments' are praises, 'complements' means things that complete something, and 'compulsions' are strong urges - none of which fit the context of project delays.",
  },
  {
    question:
      "Which of the following logically follows from the statements: 'All birds can fly.' 'Penguins are birds.'?",
    options: [
      "Penguins can fly.",
      "Some birds cannot fly.",
      "All flying animals are birds.",
      "No penguins can fly.",
    ],
    answer: [1],
    explanation:
      "Since we know penguins are birds that cannot fly, this proves that not all birds can fly, even if the first statement says they can. This is a classic example of how real-world knowledge can override given statements in logical reasoning.",
  },
  {
    question:
      "If 3 times a number decreased by 5 equals 16, what is the number?",
    options: ["5", "6", "7", "8"],
    answer: [2],
    explanation:
      "Let's solve the equation: 3x - 5 = 16. Add 5 to both sides: 3x = 21. Then divide both sides by 3: x = 7. Therefore, the correct answer is 7.",
  },
  {
    question: "Who is known as the 'National Hero of the Philippines'?",
    options: [
      "Andres Bonifacio",
      "Emilio Aguinaldo",
      "Jose Rizal",
      "Lapu-Lapu",
    ],
    answer: [2],
    explanation:
      "Jose Rizal is officially recognized as the National Hero of the Philippines through Executive Order No. 75 issued in 1993. His writings inspired the Philippine Revolution against Spanish colonization.",
  },
  {
    question: "Select the grammatically correct sentence:",
    options: [
      "The data shows an interesting trend.",
      "Everyone should bring their own lunch.",
      "The committee are divided in their opinions.",
      "One of the students were absent.",
    ],
    answer: [0],
    explanation:
      "'Data' can be treated as singular or plural, but in formal contexts it's often singular. Option A is correct because 'data' is treated as singular with 'shows'. The other options have agreement errors between subjects and verbs.",
  },
  {
    question:
      "If all squares are rectangles and some rectangles are not parallelograms, which must be true?",
    options: [
      "Some squares are not parallelograms.",
      "All rectangles are squares.",
      "No squares are parallelograms.",
      "Some parallelograms are squares.",
    ],
    answer: [3],
    explanation:
      "All squares are rectangles (special case where all sides are equal), and all squares are also parallelograms. Since some rectangles are not parallelograms (like trapezoids), but all squares are parallelograms, the correct answer is that some parallelograms are squares.",
  },
  {
    question: "A book costs Php 350. How much would 12 books cost?",
    options: ["Php 3,800", "Php 4,000", "Php 4,200", "Php 4,400"],
    answer: [2],
    explanation:
      "Simple multiplication: 350 × 12 = 4,200. Break it down: 300 × 12 = 3,600 and 50 × 12 = 600. 3,600 + 600 = 4,200.",
  },
  {
    question: "The Philippine-American War began in which year?",
    options: ["1896", "1898", "1899", "1901"],
    answer: [2],
    explanation:
      "The Philippine-American War began on February 4, 1899, when an American sentry killed a Filipino soldier in Manila. This occurred shortly after the Spanish-American War ended in 1898.",
  },
  {
    question: "Choose the synonym of 'verbose':",
    options: ["Concise", "Wordy", "Quiet", "Simple"],
    answer: [1],
    explanation:
      "'Verbose' means using more words than needed, so its synonym is 'wordy'. 'Concise' is actually an antonym meaning brief and to the point.",
  },
  {
    question:
      "Four colleagues—W, X, Y, Z—are accountant, lawyer, teacher, and nurse. Given: W is not a lawyer. X is the accountant. Y is the nurse. Who is the teacher?",
    options: ["W", "X", "Y", "Z"],
    answer: [0],
    explanation:
      "From the information: X=accountant, Y=nurse. W cannot be lawyer (given), so W must be teacher. That leaves Z to be lawyer. Therefore, W is the teacher.",
  },
  {
    question:
      "The sudden storm caused significant _______ to the coastal village.",
    options: ["devastation", "celebration", "fascination", "compensation"],
    answer: [0],
    explanation:
      "'Devastation' means great destruction or damage, which fits the context of a storm's impact. The other options don't make sense in this context: celebration (party), fascination (interest), compensation (payment).",
  },
  {
    question: "If 'Some A are B' and 'All B are C', which must be true?",
    options: ["All A are C", "Some C are A", "No A are C", "Some A are not C"],
    answer: [1],
    explanation:
      "This is classic syllogistic reasoning. If some A are B, and all B are C, then those A that are B must also be C. Therefore, at least some C must be A (the same As that are B).",
  },
  {
    question: "Which Philippine president declared Martial Law in 1972?",
    options: [
      "Diosdado Macapagal",
      "Ferdinand Marcos",
      "Corazon Aquino",
      "Ramon Magsaysay",
    ],
    answer: [1],
    explanation:
      "President Ferdinand Marcos declared Martial Law on September 21, 1972, through Proclamation No. 1081. This marked the beginning of his authoritarian rule that lasted until 1986.",
  },
  {
    question: "Select the correct sentence:",
    options: [
      "The jury has reached their decision.",
      "Neither option are acceptable.",
      "Mathematics are my favorite subject.",
      "The staff is meeting in the conference room.",
    ],
    answer: [3],
    explanation:
      "Option D is correct because 'staff' is a collective noun that can be treated as singular. The other options have subject-verb agreement errors: 'jury has reached its' (not their), 'neither option is', 'mathematics is'.",
  },
  {
    question:
      "If no reptiles are mammals and all snakes are reptiles, which is true?",
    options: [
      "Some snakes are mammals.",
      "No snakes are mammals.",
      "All reptiles are snakes.",
      "Some mammals are reptiles.",
    ],
    answer: [1],
    explanation:
      "This is straightforward logic: If no reptiles are mammals, and snakes are reptiles, then snakes cannot be mammals. The other options are false: A contradicts the premises, C is too broad (not all reptiles are snakes), D contradicts the first statement.",
  },
  {
    question: "If a dozen eggs costs Php 84, how much would 30 eggs cost?",
    options: ["Php 200", "Php 210", "Php 220", "Php 230"],
    answer: [1],
    explanation:
      "First find the cost per egg: 84 ÷ 12 = 7 pesos per egg. Then multiply by 30: 7 × 30 = 210 pesos. Therefore, the correct answer is Php 210.",
  },
  {
    question: "The EDSA People Power Revolution occurred in what year?",
    options: ["1983", "1986", "1989", "1991"],
    answer: [1],
    explanation:
      "The EDSA People Power Revolution occurred in February 1986, leading to the ouster of Ferdinand Marcos and the installation of Corazon Aquino as president. It's considered a watershed moment in Philippine history.",
  },
  {
    question: "Choose the antonym of 'generous':",
    options: ["Kind", "Stingy", "Charitable", "Benevolent"],
    answer: [1],
    explanation:
      "The antonym of 'generous' (liberal in giving) is 'stingy' (reluctant to give). The other options are actually synonyms or related to generosity.",
  },
  {
    question:
      "Four siblings—P, Q, R, S—have birthdays in different months: March, May, August, November. Given: P's birthday is not in May. Q's is in August. R's is in November. When is S's birthday?",
    options: ["March", "May", "August", "November"],
    answer: [1],
    explanation:
      "From the information: Q=August, R=November. P cannot be May (given), so P must be March. That leaves S to be May. Therefore, S's birthday is in May.",
  },
  {
    question:
      "Her _______ approach to problem-solving often yielded creative solutions.",
    options: ["methodical", "haphazard", "unconventional", "traditional"],
    answer: [2],
    explanation:
      "'Unconventional' fits best as it implies thinking outside the box, which would lead to creative solutions. 'Methodical' and 'traditional' suggest following established patterns, while 'haphazard' means random or without plan.",
  },
  {
    question: "If 'No P are Q' and 'Some Q are R', which must be true?",
    options: ["Some P are R", "No R are P", "Some R are not P", "All Q are R"],
    answer: [2],
    explanation:
      "From 'No P are Q', we know P and Q don't overlap. 'Some Q are R' means part of Q overlaps with R. Therefore, at least those R that are Q cannot be P, so 'Some R are not P' must be true.",
  },
  {
    question: "What is 25% of 1,200?",
    options: ["250", "300", "350", "400"],
    answer: [1],
    explanation:
      "25% is the same as 1/4. 1,200 divided by 4 is 300. Alternatively, you can calculate 0.25 × 1,200 = 300.",
  },
  {
    question: "Which Philippine city is known as the 'Walled City'?",
    options: ["Vigan", "Intramuros", "Cebu City", "Davao City"],
    answer: [1],
    explanation:
      "Intramuros in Manila is known as the 'Walled City', built during the Spanish colonial period. Its name literally means 'within the walls' in Spanish. It was the center of political, religious, and military power during Spanish rule.",
  },
  {
    question: "Select the correctly spelled word:",
    options: ["Accomodate", "Occassion", "Harassment", "Embarass"],
    answer: [2],
    explanation:
      "The correct spelling is 'Harassment,' with two *r*’s and two *s*’s. The other options contain common spelling errors: 'Accomodate' is missing an *m* (correct: 'Accommodate'), 'Occassion' has an extra *s* (correct: 'Occasion'), and 'Embarass' is missing an *r* (correct: 'Embarrass').",
  },
  {
    question: "If all X are Y, and some Y are Z, which cannot be true?",
    options: ["Some X are Z", "All Z are X", "Some Y are not Z", "No X are Z"],
    answer: [1],
    explanation:
      "'All Z are X' cannot be true because we only know some Y are Z, and all X are Y. There could be Z that are not X. The other options could potentially be true given the premises.",
  },
];
