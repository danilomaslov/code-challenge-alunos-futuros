
import { useState } from "react";
import { QuizProvider } from "@/lib/context";
import WelcomeIntro from "@/components/WelcomeIntro";
import LanguageSelector from "@/components/LanguageSelector";
import Quiz from "@/components/Quiz";

const Index = () => {
  const [step, setStep] = useState<"welcome" | "select" | "quiz">("welcome");

  const handleStart = () => {
    setStep("select");
  };

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeIntro onStart={handleStart} />;
      case "select":
        return (
          <>
            <LanguageSelector />
            <div className="text-center mt-8">
              <button
                onClick={() => setStep("quiz")}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Iniciar Quiz
              </button>
            </div>
          </>
        );
      case "quiz":
        return <Quiz />;
      default:
        return <WelcomeIntro onStart={handleStart} />;
    }
  };

  return (
    <QuizProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-10 px-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold">Desafio de Programação</h1>
            {step !== "welcome" && (
              <p className="text-muted-foreground mt-2">
                Teste seu conhecimento em 7 linguagens de programação diferentes!
              </p>
            )}
          </header>
          <main className="flex flex-col items-center justify-center">
            {renderStep()}
          </main>
        </div>
        <footer className="text-center p-6 mt-12 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Desafio Escolar de Programação. Todos os direitos reservados.</p>
        </footer>
      </div>
    </QuizProvider>
  );
};

export default Index;
