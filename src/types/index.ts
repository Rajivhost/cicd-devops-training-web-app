export interface Module {
  id: string;
  title: string;
  content: string;
  completed: boolean;
}

export interface Day {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  quiz: Quiz;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Progress {
  totalModules: number;
  completedModules: number;
  percentage: number;
}