
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={cn("code-block my-4", className)}>
      <div className="flex items-center justify-between mb-2">
        <div
          className="language-badge"
          style={{ backgroundColor: `var(--${language})` }}
        >
          {language.toUpperCase()}
        </div>
      </div>
      <pre className="whitespace-pre-wrap overflow-x-auto">{code}</pre>
    </div>
  );
}
