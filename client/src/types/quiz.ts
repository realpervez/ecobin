export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizAttempt {
  id: number;
  score: number;
  totalQuestions: number;
  answers: string[];
  completedAt: Date;
}

export interface QuizStats {
  totalAttempts: number;
  averageScore: number;
}
