import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const quizAttempts = pgTable("quiz_attempts", {
  id: serial("id").primaryKey(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: text("answers").array().notNull(),
  completedAt: timestamp("completed_at").defaultNow().notNull(),
});

export const communityImpact = pgTable("community_impact", {
  id: serial("id").primaryKey(),
  familiesPracticing: integer("families_practicing").notNull().default(0),
  wasteReduced: integer("waste_reduced").notNull().default(0),
  compostCreated: integer("compost_created").notNull().default(0),
  areasCompleted: integer("areas_completed").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertQuizAttemptSchema = createInsertSchema(quizAttempts).omit({
  id: true,
  completedAt: true,
});

export const insertCommunityImpactSchema = createInsertSchema(communityImpact).omit({
  id: true,
  updatedAt: true,
});

export type InsertQuizAttempt = z.infer<typeof insertQuizAttemptSchema>;
export type QuizAttempt = typeof quizAttempts.$inferSelect;

export type InsertCommunityImpact = z.infer<typeof insertCommunityImpactSchema>;
export type CommunityImpact = typeof communityImpact.$inferSelect;
