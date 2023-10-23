export class QuizDataService {
    constructor() { }

    public getQuiz(): Array<any> {
        return [
            {
                subject: 'English',
                instructions: [
                    'This quiz will determine how good you are at English Grammar.',
                    'The quiz is composed of random (fill-in-the-blanks / multiple-choice) questions about English Grammar.'
                ]
            }
        ];
    }

    public getQuizDetailsBySubject(subject: string): any {
        let quizDetails = [{
            subject: 'English',
            qItems: [
                {
                    type: 'multiple',
                    question: 'The order of a basic positive sentence is?',
                    answers: [
                        'Object-Verb-Subject',
                        'Verb-Object-Subject',
                        'Subject-Verb-Object',
                        'Subject-Object-Verb'
                    ],
                    cAnswer: 'Subject-Verb-Object'
                },
                {
                    type: 'fill',
                    question: 'The <input id="{id}" type="textbox"> is always included in a predicate of a sentence.',
                    cAnswer: 'verb'
                },
                {
                    type: 'multiple',
                    question: 'An independent clause contains?',
                    answers: [
                        'a verb and an object',
                        'a subject and a verb',
                        'a subject and an object',
                        'a noun and an object'
                    ],
                    cAnswer: 'a subject and a verb'
                },
                {
                    type: 'fill',
                    question: 'The <input id="{id}" type="textbox"> performs the verb\'s action.',
                    cAnswer: 'subject'
                },
                {
                    type: 'fill',
                    question: 'The <input id="{id}" type="textbox"> recieves the verb\'s action.',
                    cAnswer: 'object'
                },
                {
                    type: 'fill',
                    question: '"David writes the best songs." The direct object is <input id="{id}" type="textbox">.',
                    cAnswer: 'David'
                },
                {
                    type: 'fill',
                    question: 'It is a/an <input id="{id}" type="textbox"> verb if a verb\'s action is directed at a direct object.',
                    cAnswer: 'transitive'
                },
                {
                    type: 'fill',
                    question: 'Possessive is a value of the grammatical category called <input id="{id}" type="textbox">.',
                    cAnswer: 'case'
                },
                {
                    type: 'multiple',
                    question: 'We started ________ dinner without you.',
                    answers: [
                        'eating',
                        'to eat',
                        'to ate',
                        'eating/to eat'
                    ],
                    cAnswer: 'eating/to eat'
                },
                {
                    type: 'multiple',
                    question: 'My grandmother prefers ________ science fiction books.',
                    answers: [
                        'read',
                        'reading',
                        'to read',
                        'reading/to read'
                    ],
                    cAnswer: 'reading/to read'
                },
                {
                    type: 'multiple',
                    question: 'I can\'t imagine ________ my own house.',
                    answers: [
                        'buying',
                        'to buy',
                        'bought',
                        'buying/to buy'
                    ],
                    cAnswer: 'buying'
                },
                {
                    type: 'multiple',
                    question: 'I used ________ that television show all the time.',
                    answers: [
                        'watch',
                        'watching',
                        'to watch',
                        'watching/to watch'
                    ],
                    cAnswer: 'to watch'
                },
                {
                    type: 'multiple',
                    question: 'An adverb is a word that can modify',
                    answers: [
                        'verbs',
                        'adjective',
                        'adverb',
                        'verbs/adjective/adverb'
                    ],
                    cAnswer: 'verbs/adjective/adverb'
                },
                {
                    type: 'multiple',
                    question: 'An auxiliary verb is used with',
                    answers: [
                        'a proper noun',
                        'a main verb',
                        'an adjective',
                        'a pronoun'
                    ],
                    cAnswer: 'a main verb'
                },
                {
                    type: 'multiple',
                    question: 'A compound-complex sentence consists of',
                    answers: [
                        'one or more independent thoughts and one or more dependent clauses.',
                        'two or more independent clauses and one or more dependent clauses.',
                        'one or more independent clauses and two or more dependent clauses.',
                        'two or more independent thoughts and two or more dependent clauses.'
                    ],
                    cAnswer: 'two or more independent clauses and one or more dependent clauses.'
                }
            ]
        }];
        
        let result = quizDetails.filter((quiz: any) => {
            return quiz.subject == subject
        });

        if (result.length > 0) {
            return result[0].qItems;
        }
        else return result;
    }

    public getScoreScale(): Array<any> {
        return [
            {
                score: 0,
                scale: 'Low Score',
                mRecomCourse: 'B2 First / C1 Advance'
            },
            {
                score: 70,
                scale: 'Average Score',
                mRecomCourse: 'B2 First for Schools'
            },
            {
                score: 85,
                scale: 'High Score',
                mRecomCourse: 'B1 Preliminary for Schools / A2 Key for Schools'
            }
        ];
    }
}