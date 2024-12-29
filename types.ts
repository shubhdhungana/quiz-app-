// yo type.ts file ho, maile banako for types define garna lai

// aba yo interface le ek wata question ko structure define garcha
export interface QuizQuestion {
    question: string; 
    answers: string[]; 
    correctAnswer: string; // 
    type: "multiple-choice" | "true-false"; 
}

// yo interface le quiz ko overall state define garcha
export interface QuizState {
    currentQuestion: number; 
    userAnswers: string[]; 
    score: number;
    timer: number; 
    isQuizFinished: boolean; 
}
