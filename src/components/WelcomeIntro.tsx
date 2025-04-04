
import { Button } from "@/components/ui/button";
import { Code, PenTool, PuzzleIcon, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomeIntroProps {
  onStart: () => void;
}

export default function WelcomeIntro({ onStart }: WelcomeIntroProps) {
  const features = [
    {
      icon: <PuzzleIcon className="h-6 w-6 text-primary" />,
      title: "Desafios Interativos",
      description: "Teste seu conhecimento com perguntas sobre 7 linguagens de programação diferentes",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Múltiplas Linguagens",
      description: "HTML, CSS, Python, C, C++, C# e Java - tudo em um só lugar",
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Pontuação Instantânea",
      description: "Veja seu progresso e pontuação em tempo real",
    },
    {
      icon: <PenTool className="h-6 w-6 text-primary" />,
      title: "Explicações Detalhadas",
      description: "Aprenda com explicações para cada resposta",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Desafio de Programação
      </h1>
      
      <p className="text-xl mb-8 text-muted-foreground">
        Teste seu conhecimento em diferentes linguagens de programação e veja quanto você sabe!
        Cada desafio tem 10 questões e você ganha 1 ponto por cada resposta correta.
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="bg-card p-6 rounded-lg shadow-sm border"
            variants={item}
          >
            <div className="flex items-center mb-4">
              {feature.icon}
              <h3 className="font-semibold text-lg ml-3">{feature.title}</h3>
            </div>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button 
          onClick={onStart} 
          size="lg" 
          className="text-lg px-8"
        >
          Começar o Desafio <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
