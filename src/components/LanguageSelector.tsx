
import { useQuiz } from "@/lib/context";
import { languages, languageNames } from "@/lib/questions";
import { Language } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LanguageSelector() {
  const { setLanguage, quizState } = useQuiz();
  
  const handleLanguageSelect = (language: Language) => {
    setLanguage(language);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Escolha uma linguagem para começar:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {languages.map((lang) => (
          <motion.div
            key={lang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={quizState.currentLanguage === lang ? "default" : "outline"}
              className={`w-full h-16 text-white font-semibold ${quizState.currentLanguage === lang ? `bg-${lang} hover:bg-${lang}/90` : ''}`}
              style={{ backgroundColor: quizState.currentLanguage === lang ? `var(--${lang})` : '' }}
              onClick={() => handleLanguageSelect(lang)}
            >
              <div className="flex flex-col items-center">
                <span className="text-lg">{languageNames[lang]}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
