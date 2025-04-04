
import { useState } from "react";
import { useQuiz } from "@/lib/context";
import { Question } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { CodeBlock } from "./CodeBlock";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
}

export default function QuestionCard({ question, onNext }: QuestionCardProps) {
  const { selectAnswer, incrementScore, quizState } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Selecione uma resposta",
        description: "Você precisa escolher uma opção para continuar.",
        variant: "destructive",
      });
      return;
    }

    selectAnswer(question.id, selectedAnswer);
    setHasAnswered(true);

    if (selectedAnswer === question.correctAnswer) {
      incrementScore();
      toast({
        title: "Resposta correta!",
        description: question.explanation,
        variant: "default",
      });
    } else {
      toast({
        title: "Resposta incorreta",
        description: question.explanation,
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setHasAnswered(false);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <span 
              className="language-badge" 
              style={{ backgroundColor: `var(--${question.language})` }}
            >
              {question.language.toUpperCase()}
            </span>
            <span className="text-sm text-muted-foreground font-semibold">
              Questão {quizState.currentQuestionIndex + 1}/10
            </span>
          </div>
          <h3 className="text-lg font-semibold mt-4">{question.question}</h3>
          {question.code && (
            <CodeBlock code={question.code} language={question.language} />
          )}
        </CardHeader>
        <CardContent>
          <RadioGroup disabled={hasAnswered} className="space-y-3">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer ${
                  hasAnswered && index === question.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : hasAnswered && index === selectedAnswer
                    ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                    : selectedAnswer === index
                    ? "border-primary"
                    : ""
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <RadioGroupItem
                  value={String(index)}
                  id={`option-${index}`}
                  checked={selectedAnswer === index}
                />
                <Label htmlFor={`option-${index}`} className="w-full cursor-pointer">
                  {option}
                </Label>
                {hasAnswered && index === question.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {hasAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            {hasAnswered && (
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            )}
          </div>
          <div>
            {!hasAnswered ? (
              <Button onClick={handleSubmit}>Verificar resposta</Button>
            ) : (
              <Button onClick={handleNext}>Próxima questão</Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
