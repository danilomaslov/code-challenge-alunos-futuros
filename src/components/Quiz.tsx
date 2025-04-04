
import { useState, useEffect } from "react";
import { useQuiz } from "@/lib/context";
import { getQuestions } from "@/lib/questions";
import QuestionCard from "./QuestionCard";
import ResultsCard from "./ResultsCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Quiz() {
  const { quizState, setQuestionIndex, completeQuiz } = useQuiz();
  const [questions, setQuestions] = useState(getQuestions(quizState.currentLanguage));

  useEffect(() => {
    // Update questions when language changes
    setQuestions(getQuestions(quizState.currentLanguage));
  }, [quizState.currentLanguage]);

  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setQuestionIndex(nextIndex);
    } else {
      completeQuiz();
    }
  };

  if (quizState.completed) {
    return <ResultsCard />;
  }

  const currentQuestion = questions[quizState.currentQuestionIndex];

  return (
    <div className="w-full flex flex-col items-center">
      <QuestionCard 
        question={currentQuestion} 
        onNext={handleNextQuestion}
      />
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>Pontuação atual: {quizState.score} pontos</p>
      </div>
    </div>
  );
}
