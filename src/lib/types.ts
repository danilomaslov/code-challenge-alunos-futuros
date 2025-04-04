
export interface Question {
  id: string;
  question: string;
  language: Language;
  options: string[];
  correctAnswer: number; // índice da resposta correta em options
  explanation?: string;
  code?: string;
}

export type Language = 'html' | 'css' | 'python' | 'c' | 'cpp' | 'csharp' | 'java';

export interface QuizState {
  currentLanguage: Language;
  currentQuestionIndex: number;
  score: number;
  answers: Record<string, number>; // questionId -> selectedAnswerIndex
  completed: boolean;
}
