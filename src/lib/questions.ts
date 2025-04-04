
import { Language, Question } from "./types";

// HTML Questions
const htmlQuestions: Question[] = [
  {
    id: "html1",
    language: "html",
    question: "Qual tag HTML é usada para criar um parágrafo?",
    options: ["<paragraph>", "<p>", "<para>", "<text>"],
    correctAnswer: 1,
    explanation: "A tag <p> é usada para definir um parágrafo em HTML."
  },
  {
    id: "html2",
    language: "html",
    question: "Qual atributo HTML é usado para definir estilos inline?",
    options: ["class", "styles", "style", "font"],
    correctAnswer: 2,
    explanation: "O atributo style é usado para aplicar estilos CSS diretamente em um elemento HTML."
  },
  {
    id: "html3",
    language: "html",
    question: "Qual tag é usada para criar um link?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
    explanation: "A tag <a> é usada para criar links em HTML."
  },
  {
    id: "html4",
    language: "html",
    question: "Como criar uma lista não ordenada em HTML?",
    options: ["<ol>", "<list>", "<ul>", "<nl>"],
    correctAnswer: 2,
    explanation: "A tag <ul> (unordered list) é usada para criar listas não ordenadas."
  },
  {
    id: "html5",
    language: "html",
    question: "Qual tag é usada para inserir uma imagem?",
    options: ["<img>", "<picture>", "<image>", "<src>"],
    correctAnswer: 0,
    explanation: "A tag <img> é usada para inserir imagens em uma página HTML."
  },
  {
    id: "html6",
    language: "html",
    question: "Qual elemento HTML define o título de um documento?",
    options: ["<header>", "<h1>", "<title>", "<head>"],
    correctAnswer: 2,
    explanation: "A tag <title> define o título do documento que aparece na aba do navegador."
  },
  {
    id: "html7",
    language: "html",
    question: "Como definir o idioma de uma página web?",
    options: ["<html lang=\"en\">", "<language=\"en\">", "<lang=\"en\">", "<meta lang=\"en\">"],
    correctAnswer: 0,
    explanation: "O atributo lang na tag <html> define o idioma da página."
  },
  {
    id: "html8",
    language: "html",
    question: "Qual tag cria uma quebra de linha?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    correctAnswer: 0,
    explanation: "A tag <br> (break) cria uma quebra de linha em HTML."
  },
  {
    id: "html9",
    language: "html",
    question: "Como criar uma tabela em HTML?",
    options: ["<table>", "<tb>", "<grid>", "<tabular>"],
    correctAnswer: 0,
    explanation: "A tag <table> é usada para criar tabelas em HTML."
  },
  {
    id: "html10",
    language: "html",
    question: "Qual elemento HTML representa texto enfatizado?",
    options: ["<italic>", "<b>", "<strong>", "<em>"],
    correctAnswer: 3,
    explanation: "A tag <em> é usada para enfatizar texto, geralmente exibido em itálico."
  },
];

// CSS Questions
const cssQuestions: Question[] = [
  {
    id: "css1",
    language: "css",
    question: "Qual propriedade CSS é usada para mudar a cor do texto?",
    options: ["text-color", "font-color", "color", "text-style"],
    correctAnswer: 2,
    explanation: "A propriedade 'color' é usada para definir a cor do texto."
  },
  {
    id: "css2",
    language: "css",
    question: "Como selecionar um elemento com o id 'demo'?",
    options: [".demo", "#demo", "demo", "*demo"],
    correctAnswer: 1,
    explanation: "O símbolo # é usado para selecionar elementos pelo ID em CSS."
  },
  {
    id: "css3",
    language: "css",
    question: "Qual propriedade define o espaçamento entre elementos?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correctAnswer: 0,
    explanation: "A propriedade 'margin' define o espaçamento fora dos elementos, entre eles."
  },
  {
    id: "css4",
    language: "css",
    question: "Como fazer um texto aparecer em negrito?",
    options: ["font-style: bold;", "text-weight: bold;", "font-weight: bold;", "text-style: bold;"],
    correctAnswer: 2,
    explanation: "A propriedade 'font-weight: bold;' é usada para deixar texto em negrito."
  },
  {
    id: "css5",
    language: "css",
    question: "Qual propriedade define a família da fonte?",
    options: ["font-family", "text-family", "font-style", "text-font"],
    correctAnswer: 0,
    explanation: "A propriedade 'font-family' define a família de fontes a ser usada."
  },
  {
    id: "css6",
    language: "css",
    question: "Como centralizar um elemento horizontalmente?",
    options: ["text-align: center;", "margin: auto;", "position: center;", "align: center;"],
    correctAnswer: 1,
    explanation: "Para centralizar um elemento com largura definida, use 'margin: auto;'."
  },
  {
    id: "css7",
    language: "css",
    question: "Qual propriedade define o tamanho da fonte?",
    options: ["text-size", "font-style", "text-style", "font-size"],
    correctAnswer: 3,
    explanation: "A propriedade 'font-size' define o tamanho da fonte."
  },
  {
    id: "css8",
    language: "css",
    question: "O que significa CSS?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 1,
    explanation: "CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata)."
  },
  {
    id: "css9",
    language: "css",
    question: "Como selecionar todos os elementos <p> dentro de um <div>?",
    options: ["div + p", "div p", "p div", "div > p"],
    correctAnswer: 1,
    explanation: "O seletor 'div p' seleciona todos os elementos <p> que estão dentro de um <div>."
  },
  {
    id: "css10",
    language: "css",
    question: "Qual propriedade altera a cor de fundo?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswer: 2,
    explanation: "A propriedade 'background-color' define a cor de fundo de um elemento."
  }
];

// Python Questions
const pythonQuestions: Question[] = [
  {
    id: "python1",
    language: "python",
    question: "Como imprimir 'Olá Mundo' em Python?",
    options: ["console.log('Olá Mundo')", "print('Olá Mundo')", "echo 'Olá Mundo'", "printf('Olá Mundo')"],
    correctAnswer: 1,
    explanation: "Em Python, usamos a função print() para exibir texto no console."
  },
  {
    id: "python2",
    language: "python",
    question: "Qual o operador para verificar igualdade em Python?",
    options: ["=", "===", "==", "equals"],
    correctAnswer: 2,
    explanation: "Em Python, o operador '==' é usado para verificar se dois valores são iguais."
  },
  {
    id: "python3",
    language: "python",
    question: "Como criar uma lista vazia em Python?",
    options: ["list()", "[]", "new List()", "array()"],
    correctAnswer: 1,
    explanation: "Em Python, uma lista vazia pode ser criada com '[]'."
  },
  {
    id: "python4",
    language: "python",
    question: "Como declarar uma função em Python?",
    options: ["function minhaFuncao():", "def minhaFuncao():", "void minhaFuncao():", "public minhaFuncao():"],
    correctAnswer: 1,
    explanation: "Em Python, usamos a palavra-chave 'def' para definir funções."
  },
  {
    id: "python5",
    language: "python",
    question: "Qual é o tipo de dado da expressão: 5 + 3.2?",
    options: ["int", "float", "number", "decimal"],
    correctAnswer: 1,
    explanation: "Em Python, ao realizar operações com int e float, o resultado é float."
  },
  {
    id: "python6",
    language: "python",
    question: "Como comentar uma linha de código em Python?",
    options: ["// Comentário", "/* Comentário */", "# Comentário", "-- Comentário"],
    correctAnswer: 2,
    explanation: "Em Python, o símbolo '#' é usado para criar comentários de linha única."
  },
  {
    id: "python7",
    language: "python",
    question: "Qual método é usado para adicionar um item ao final de uma lista?",
    options: ["list.add()", "list.append()", "list.insert()", "list.push()"],
    correctAnswer: 1,
    explanation: "O método append() é usado para adicionar um item ao final de uma lista em Python."
  },
  {
    id: "python8",
    language: "python",
    question: "Como importar o módulo 'math' em Python?",
    options: ["#include <math>", "import math", "using math", "require('math')"],
    correctAnswer: 1,
    explanation: "Em Python, usamos 'import math' para importar o módulo math."
  },
  {
    id: "python9",
    language: "python",
    question: "Como criar um dicionário vazio em Python?",
    options: ["{}", "dict()", "Ambas as respostas estão corretas", "new Dictionary()"],
    correctAnswer: 2,
    explanation: "Em Python, tanto '{}' quanto dict() podem ser usados para criar um dicionário vazio."
  },
  {
    id: "python10",
    language: "python",
    question: "Qual operador é usado para exponenciação em Python?",
    options: ["^", "**", "^^", "pow()"],
    correctAnswer: 1,
    explanation: "Em Python, o operador '**' é usado para calcular potências."
  }
];

// C Questions
const cQuestions: Question[] = [
  {
    id: "c1",
    language: "c",
    question: "Qual função é usada para imprimir na tela em C?",
    options: ["console.log()", "print()", "printf()", "System.out.println()"],
    correctAnswer: 2,
    explanation: "Em C, a função printf() é usada para imprimir texto formatado."
  },
  {
    id: "c2",
    language: "c",
    question: "Como declarar uma variável inteira em C?",
    options: ["var x = 10;", "int x = 10;", "integer x = 10;", "let x = 10;"],
    correctAnswer: 1,
    explanation: "Em C, usamos 'int' para declarar variáveis do tipo inteiro."
  },
  {
    id: "c3",
    language: "c",
    question: "Qual biblioteca inclui a função printf()?",
    options: ["<stdlib.h>", "<math.h>", "<stdio.h>", "<string.h>"],
    correctAnswer: 2,
    explanation: "A biblioteca <stdio.h> (standard input-output) contém a função printf()."
  },
  {
    id: "c4",
    language: "c",
    question: "Como declarar um array de 5 inteiros em C?",
    options: ["int[5] array;", "array int[5];", "int array[5];", "int array = new int[5];"],
    correctAnswer: 2,
    explanation: "Em C, declaramos arrays com 'int array[5];' para um array de 5 inteiros."
  },
  {
    id: "c5",
    language: "c",
    question: "Qual é o operador de endereço em C?",
    options: ["*", "&", "#", "@"],
    correctAnswer: 1,
    explanation: "Em C, o operador '&' (e comercial) é usado para obter o endereço de uma variável."
  },
  {
    id: "c6",
    language: "c",
    question: "Como criar um comentário de uma linha em C?",
    options: ["// Comentário", "/* Comentário */", "# Comentário", "-- Comentário"],
    correctAnswer: 0,
    explanation: "Em C, usamos '//' para comentários de uma linha."
  },
  {
    id: "c7",
    language: "c",
    question: "Qual função é usada para alocar memória dinamicamente em C?",
    options: ["malloc()", "alloc()", "memalloc()", "new()"],
    correctAnswer: 0,
    explanation: "Em C, a função malloc() é usada para alocação dinâmica de memória."
  },
  {
    id: "c8",
    language: "c",
    question: "Qual é a palavra-chave para definir uma constante em C?",
    options: ["const", "constant", "define", "#define"],
    correctAnswer: 3,
    explanation: "Em C, usamos '#define' ou 'const' para definir constantes, mas '#define' é um pré-processador."
  },
  {
    id: "c9",
    language: "c",
    question: "Como declarar uma função que não retorna valor em C?",
    options: ["null function()", "void function()", "function()", "noreturn function()"],
    correctAnswer: 1,
    explanation: "Em C, usamos o tipo de retorno 'void' para funções que não retornam valor."
  },
  {
    id: "c10",
    language: "c",
    question: "Qual operador é usado para acessar o valor apontado por um ponteiro?",
    options: ["&", "*", "->", "."],
    correctAnswer: 1,
    explanation: "Em C, o operador '*' (asterisco) é usado para acessar o valor apontado por um ponteiro."
  }
];

// C++ Questions
const cppQuestions: Question[] = [
  {
    id: "cpp1",
    language: "cpp",
    question: "Qual biblioteca padrão inclui o std::cout em C++?",
    options: ["<cstdio>", "<iostream>", "<stdio.h>", "<ostream>"],
    correctAnswer: 1,
    explanation: "Em C++, a biblioteca <iostream> contém os objetos de entrada/saída como std::cout."
  },
  {
    id: "cpp2",
    language: "cpp",
    question: "Como declarar uma classe em C++?",
    options: ["class MinhaClasse { };", "type MinhaClasse { };", "struct MinhaClasse { };", "interface MinhaClasse { };"],
    correctAnswer: 0,
    explanation: "Em C++, usamos a palavra-chave 'class' para declarar uma classe."
  },
  {
    id: "cpp3",
    language: "cpp",
    question: "Como criar um construtor para uma classe chamada 'Pessoa'?",
    options: ["constructor Pessoa() { }", "Pessoa::constructor() { }", "Pessoa() { }", "new Pessoa() { }"],
    correctAnswer: 2,
    explanation: "Em C++, o construtor tem o mesmo nome da classe e não possui tipo de retorno."
  },
  {
    id: "cpp4",
    language: "cpp",
    question: "O que significa STL em C++?",
    options: ["Simple Template Library", "Standard Type Library", "Standard Template Library", "System Type Library"],
    correctAnswer: 2,
    explanation: "STL significa Standard Template Library, que fornece containers, algoritmos e iteradores."
  },
  {
    id: "cpp5",
    language: "cpp",
    question: "Qual operador é usado para alocação dinâmica de memória em C++?",
    options: ["alloc", "malloc", "new", "create"],
    correctAnswer: 2,
    explanation: "Em C++, o operador 'new' é usado para alocação dinâmica de memória."
  },
  {
    id: "cpp6",
    language: "cpp",
    question: "Como definir um método como const em C++?",
    options: ["void metodo() const { }", "const void metodo() { }", "void const metodo() { }", "void metodo() readonly { }"],
    correctAnswer: 0,
    explanation: "Em C++, colocamos 'const' após a lista de parâmetros para indicar que o método não modifica o objeto."
  },
  {
    id: "cpp7",
    language: "cpp",
    question: "O que é sobrecarga de operadores em C++?",
    options: [
      "Usar um operador além de sua capacidade",
      "Definir um novo comportamento para operadores existentes",
      "Criar novos operadores",
      "Otimizar operações matemáticas"
    ],
    correctAnswer: 1,
    explanation: "Sobrecarga de operadores permite redefinir o comportamento dos operadores para tipos definidos pelo usuário."
  },
  {
    id: "cpp8",
    language: "cpp",
    question: "Qual é a diferença entre struct e class em C++?",
    options: [
      "Não há diferença",
      "Structs não podem ter métodos",
      "Classes podem ter herança, structs não",
      "Por padrão, membros de struct são públicos e de class são privados"
    ],
    correctAnswer: 3,
    explanation: "A única diferença técnica é que membros de struct são públicos por padrão, enquanto em class são privados."
  },
  {
    id: "cpp9",
    language: "cpp",
    question: "Como fazer um loop for em C++?",
    options: [
      "for (x = 0; x < 10; x++) { }",
      "for (int x = 0; x < 10; x++) { }",
      "for (let x = 0; x < 10; x++) { }",
      "for x in range(10) { }"
    ],
    correctAnswer: 1,
    explanation: "Em C++, a forma correta é 'for (int x = 0; x < 10; x++) { }', declarando a variável no loop."
  },
  {
    id: "cpp10",
    language: "cpp",
    question: "O que faz o operador '::' em C++?",
    options: [
      "Operador de comparação",
      "Operador de escopo",
      "Operador de herança",
      "Operador de ponteiro"
    ],
    correctAnswer: 1,
    explanation: "Em C++, '::' é o operador de resolução de escopo, usado para acessar namespaces ou membros de classe."
  }
];

// C# Questions
const csharpQuestions: Question[] = [
  {
    id: "csharp1",
    language: "csharp",
    question: "Qual é a extensão de arquivo padrão para C#?",
    options: [".cs", ".csharp", ".c#", ".cpp"],
    correctAnswer: 0,
    explanation: "Arquivos de código-fonte C# têm a extensão .cs."
  },
  {
    id: "csharp2",
    language: "csharp",
    question: "Qual namespace contém as classes Console e String?",
    options: ["System.IO", "System", "System.Collections", "Microsoft.CSharp"],
    correctAnswer: 1,
    explanation: "O namespace System contém classes fundamentais como Console e String."
  },
  {
    id: "csharp3",
    language: "csharp",
    question: "Como declarar uma propriedade em C#?",
    options: [
      "int Idade { get; set; }",
      "property int Idade;",
      "var Idade { get() set() };",
      "int GetIdade() SetIdade();"
    ],
    correctAnswer: 0,
    explanation: "Em C#, declaramos propriedades com 'int Idade { get; set; }', usando acessores get e set."
  },
  {
    id: "csharp4",
    language: "csharp",
    question: "O que significa CLI em .NET?",
    options: [
      "C Language Interface",
      "Common Language Infrastructure",
      "Core Language Implementation",
      "Compiled Language Interpreter"
    ],
    correctAnswer: 1,
    explanation: "CLI significa Common Language Infrastructure, a especificação que define o ambiente de execução do .NET."
  },
  {
    id: "csharp5",
    language: "csharp",
    question: "Como criar uma lista genérica de strings em C#?",
    options: [
      "List strings = new List();",
      "List<string> strings = new List<string>();",
      "ArrayList<string> strings = new ArrayList<string>();",
      "string[] strings = new List<string>();",
    ],
    correctAnswer: 1,
    explanation: "Em C#, usamos 'List<string> strings = new List<string>();' para criar uma lista genérica de strings."
  },
  {
    id: "csharp6",
    language: "csharp",
    question: "O que é uma classe selada (sealed class) em C#?",
    options: [
      "Uma classe que não pode ser instanciada",
      "Uma classe que só pode ser usada em um assembly",
      "Uma classe que não pode ser herdada",
      "Uma classe com criptografia"
    ],
    correctAnswer: 2,
    explanation: "Em C#, uma classe selada (sealed) não pode ser usada como classe base para outras classes."
  },
  {
    id: "csharp7",
    language: "csharp",
    question: "Qual modificador de acesso é mais restritivo em C#?",
    options: [
      "public",
      "protected",
      "internal",
      "private"
    ],
    correctAnswer: 3,
    explanation: "O modificador 'private' é o mais restritivo, limitando o acesso apenas à própria classe."
  },
  {
    id: "csharp8",
    language: "csharp",
    question: "O que é LINQ em C#?",
    options: [
      "Uma linguagem de programação baseada em C#",
      "Uma biblioteca para interfaces gráficas",
      "Uma tecnologia para consultas integradas à linguagem",
      "Um compilador alternativo para C#"
    ],
    correctAnswer: 2,
    explanation: "LINQ (Language Integrated Query) é uma tecnologia que permite consultas de dados diretamente no código C#."
  },
  {
    id: "csharp9",
    language: "csharp",
    question: "Como definir uma interface em C#?",
    options: [
      "interface IMinhaInterface { }",
      "abstract class IMinhaInterface { }",
      "protocol IMinhaInterface { }",
      "virtual class IMinhaInterface { }"
    ],
    correctAnswer: 0,
    explanation: "Em C#, usamos a palavra-chave 'interface' para definir uma interface."
  },
  {
    id: "csharp10",
    language: "csharp",
    question: "O que fazem os métodos async/await em C#?",
    options: [
      "Realizam chamadas remotas",
      "Facilitam programação assíncrona",
      "Criam novos threads manualmente",
      "Sincronizam acesso a recursos compartilhados"
    ],
    correctAnswer: 1,
    explanation: "async/await são recursos para facilitar a programação assíncrona em C#, melhorando a legibilidade do código."
  }
];

// Java Questions
const javaQuestions: Question[] = [
  {
    id: "java1",
    language: "java",
    question: "Como declarar uma classe em Java?",
    options: [
      "class MinhaClasse { }",
      "public MinhaClasse { }",
      "type MinhaClasse { }",
      "struct MinhaClasse { }"
    ],
    correctAnswer: 0,
    explanation: "Em Java, usamos a palavra-chave 'class' para declarar uma classe."
  },
  {
    id: "java2",
    language: "java",
    question: "Qual método é o ponto de entrada de uma aplicação Java?",
    options: [
      "start()",
      "init()",
      "main()",
      "run()"
    ],
    correctAnswer: 2,
    explanation: "O método main() é o ponto de entrada de aplicações Java: public static void main(String[] args)."
  },
  {
    id: "java3",
    language: "java",
    question: "Como declarar uma variável final (constante) em Java?",
    options: [
      "constant int x = 10;",
      "const int x = 10;",
      "final int x = 10;",
      "static int x = 10;"
    ],
    correctAnswer: 2,
    explanation: "Em Java, usamos a palavra-chave 'final' para declarar constantes."
  },
  {
    id: "java4",
    language: "java",
    question: "O que significa JVM?",
    options: [
      "Java Visual Machine",
      "Java Virtual Machine",
      "Java Verified Module",
      "Java Variable Method"
    ],
    correctAnswer: 1,
    explanation: "JVM significa Java Virtual Machine, o ambiente que executa bytecode Java."
  },
  {
    id: "java5",
    language: "java",
    question: "Qual é a sintaxe para criar um novo objeto em Java?",
    options: [
      "Objeto o = construct Objeto();",
      "Objeto o = new Objeto();",
      "Objeto o = create Objeto();",
      "Objeto o = Objeto();"
    ],
    correctAnswer: 1,
    explanation: "Em Java, usamos o operador 'new' para criar novas instâncias de objetos."
  },
  {
    id: "java6",
    language: "java",
    question: "Como definir um método que não retorna valor em Java?",
    options: [
      "void metodo() { }",
      "no-return metodo() { }",
      "null metodo() { }",
      "empty metodo() { }"
    ],
    correctAnswer: 0,
    explanation: "Em Java, usamos o tipo de retorno 'void' para métodos que não retornam valor."
  },
  {
    id: "java7",
    language: "java",
    question: "O que são pacotes (packages) em Java?",
    options: [
      "Bibliotecas externas",
      "Namespaces para organizar classes",
      "Arquivos JAR",
      "Módulos de código compilado"
    ],
    correctAnswer: 1,
    explanation: "Pacotes (packages) em Java são namespaces usados para organizar classes relacionadas."
  },
  {
    id: "java8",
    language: "java",
    question: "Como criar um array de inteiros em Java?",
    options: [
      "int[] numeros = int[5];",
      "int numeros = new int[5];",
      "int[] numeros = new int[5];",
      "array int numeros = new array[5];"
    ],
    correctAnswer: 2,
    explanation: "Em Java, declaramos arrays com 'int[] numeros = new int[5];'."
  },
  {
    id: "java9",
    language: "java",
    question: "Qual é a diferença entre '==' e 'equals()' em Java?",
    options: [
      "Não há diferença",
      "'==' compara referências, 'equals()' compara conteúdo",
      "'==' compara conteúdo, 'equals()' compara referências",
      "'==' é para tipos primitivos apenas, 'equals()' é para qualquer tipo"
    ],
    correctAnswer: 1,
    explanation: "Em Java, '==' compara referências de objetos, enquanto 'equals()' compara o conteúdo dos objetos."
  },
  {
    id: "java10",
    language: "java",
    question: "O que é uma interface em Java?",
    options: [
      "Um tipo de classe abstrata",
      "Um contrato que define métodos que uma classe deve implementar",
      "Uma biblioteca gráfica",
      "Um tipo de pacote"
    ],
    correctAnswer: 1,
    explanation: "Em Java, uma interface é um contrato que define métodos que classes implementadoras devem fornecer."
  }
];

// Consolidate all questions
export const allQuestions: Record<Language, Question[]> = {
  html: htmlQuestions,
  css: cssQuestions,
  python: pythonQuestions,
  c: cQuestions,
  cpp: cppQuestions,
  csharp: csharpQuestions,
  java: javaQuestions
};

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Get questions for a specific language
export function getQuestions(language: Language): Question[] {
  return shuffleArray(allQuestions[language]);
}

// Get languages
export const languages: Language[] = [
  'html', 'css', 'python', 'c', 'cpp', 'csharp', 'java'
];

// Language display names
export const languageNames: Record<Language, string> = {
  html: 'HTML',
  css: 'CSS',
  python: 'Python',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  java: 'Java',
};
