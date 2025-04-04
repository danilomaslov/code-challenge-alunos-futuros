
import { useQuiz } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { languageNames } from "@/lib/questions";
import { motion } from "framer-motion";
import { Sparkles, Medal } from "lucide-react";

export default function ResultsCard() {
  const { quizState, resetQuiz } = useQuiz();
  const { score, currentLanguage } = quizState;
  
  const getResultMessage = () => {
    if (score >= 9) return "Excelente!";
    if (score >= 7) return "Muito bom!";
    if (score >= 5) return "Bom trabalho!";
    if (score >= 3) return "Continue praticando!";
    return "Não desista!";
  };

  const getResultEmoji = () => {
    if (score >= 9) return <Sparkles className="h-8 w-8 text-yellow-500" />;
    if (score >= 7) return <Medal className="h-8 w-8 text-blue-500" />;
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            {getResultEmoji()}
          </div>
          <CardTitle className="text-2xl">
            {getResultMessage()}
          </CardTitle>
          <p className="text-muted-foreground">
            Quiz de {languageNames[currentLanguage]} concluído
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold">{score}</div>
            <p className="text-muted-foreground">de 10 pontos</p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Desempenho</span>
              <span>{score * 10}%</span>
            </div>
            <Progress value={score * 10} className="h-3" />
          </div>

          <div className="p-4 bg-secondary rounded-lg text-center">
            <p className="font-medium">Compartilhe seus resultados com seus colegas!</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={resetQuiz} variant="outline">
            Tentar novamente
          </Button>
          <Button 
            onClick={resetQuiz}
            style={{ backgroundColor: `var(--${currentLanguage})` }}
            className="text-white"
          >
            Escolher outra linguagem
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
