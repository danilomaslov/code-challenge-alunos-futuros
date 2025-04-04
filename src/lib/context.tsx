
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, QuizState } from './types';
import { languages } from './questions';

interface QuizContextType {
  quizState: QuizState;
  setLanguage: (language: Language) => void;
  setQuestionIndex: (index: number) => void;
  selectAnswer: (questionId: string, answerId: number) => void;
  incrementScore: () => void;
  resetQuiz: () => void;
  completeQuiz: () => void;
}

const defaultState: QuizState = {
  currentLanguage: 'html',
  currentQuestionIndex: 0,
  score: 0,
  answers: {},
  completed: false,
};

const QuizContext = createContext<QuizContextType | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [quizState, setQuizState] = useState<QuizState>(defaultState);

  const setLanguage = (language: Language) => {
    setQuizState(prev => ({
      ...prev,
      currentLanguage: language,
      currentQuestionIndex: 0,
      answers: {},
      completed: false,
    }));
  };

  const setQuestionIndex = (index: number) => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: index,
    }));
  };

  const selectAnswer = (questionId: string, answerId: number) => {
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answerId,
      },
    }));
  };

  const incrementScore = () => {
    setQuizState(prev => ({
      ...prev,
      score: prev.score + 1,
    }));
  };

  const resetQuiz = () => {
    setQuizState({
      ...defaultState,
      currentLanguage: quizState.currentLanguage,
    });
  };

  const completeQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      completed: true,
    }));
  };

  const value = {
    quizState,
    setLanguage,
    setQuestionIndex,
    selectAnswer,
    incrementScore,
    resetQuiz,
    completeQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
