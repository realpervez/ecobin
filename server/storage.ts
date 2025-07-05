import { quizAttempts, communityImpact, type QuizAttempt, type InsertQuizAttempt, type CommunityImpact, type InsertCommunityImpact } from "@shared/schema";

export interface IStorage {
  // Quiz methods
  createQuizAttempt(attempt: InsertQuizAttempt): Promise<QuizAttempt>;
  getQuizAttempts(): Promise<QuizAttempt[]>;
  getQuizStats(): Promise<{ totalAttempts: number; averageScore: number }>;
  
  // Community impact methods
  getCommunityImpact(): Promise<CommunityImpact>;
  updateCommunityImpact(impact: Partial<InsertCommunityImpact>): Promise<CommunityImpact>;
}

export class MemStorage implements IStorage {
  private quizAttempts: Map<number, QuizAttempt>;
  private communityImpact: CommunityImpact;
  private currentQuizId: number;
  private currentImpactId: number;

  constructor() {
    this.quizAttempts = new Map();
    this.currentQuizId = 1;
    this.currentImpactId = 1;
    
    // Initialize with default community impact data
    this.communityImpact = {
      id: 1,
      familiesPracticing: 1250,
      wasteReduced: 340,
      compostCreated: 15600,
      areasCompleted: 89,
      updatedAt: new Date(),
    };
  }

  async createQuizAttempt(insertAttempt: InsertQuizAttempt): Promise<QuizAttempt> {
    const id = this.currentQuizId++;
    const attempt: QuizAttempt = {
      ...insertAttempt,
      id,
      completedAt: new Date(),
    };
    this.quizAttempts.set(id, attempt);
    return attempt;
  }

  async getQuizAttempts(): Promise<QuizAttempt[]> {
    return Array.from(this.quizAttempts.values());
  }

  async getQuizStats(): Promise<{ totalAttempts: number; averageScore: number }> {
    const attempts = Array.from(this.quizAttempts.values());
    const totalAttempts = attempts.length;
    const averageScore = totalAttempts > 0 
      ? attempts.reduce((sum, attempt) => sum + attempt.score, 0) / totalAttempts 
      : 0;
    
    return { totalAttempts, averageScore };
  }

  async getCommunityImpact(): Promise<CommunityImpact> {
    return this.communityImpact;
  }

  async updateCommunityImpact(impact: Partial<InsertCommunityImpact>): Promise<CommunityImpact> {
    this.communityImpact = {
      ...this.communityImpact,
      ...impact,
      updatedAt: new Date(),
    };
    return this.communityImpact;
  }
}

export const storage = new MemStorage();
