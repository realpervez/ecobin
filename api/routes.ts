import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizAttemptSchema, insertCommunityImpactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quiz routes
  app.post("/api/quiz/submit", async (req, res) => {
    try {
      const validatedData = insertQuizAttemptSchema.parse(req.body);
      const attempt = await storage.createQuizAttempt(validatedData);
      res.json(attempt);
    } catch (error) {
      res.status(400).json({ message: "Invalid quiz data" });
    }
  });

  app.get("/api/quiz/attempts", async (req, res) => {
    try {
      const attempts = await storage.getQuizAttempts();
      res.json(attempts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quiz attempts" });
    }
  });

  app.get("/api/quiz/stats", async (req, res) => {
    try {
      const stats = await storage.getQuizStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quiz stats" });
    }
  });

  // Community impact routes
  app.get("/api/community/impact", async (req, res) => {
    try {
      const impact = await storage.getCommunityImpact();
      res.json(impact);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch community impact" });
    }
  });

  app.put("/api/community/impact", async (req, res) => {
    try {
      const validatedData = insertCommunityImpactSchema.partial().parse(req.body);
      const impact = await storage.updateCommunityImpact(validatedData);
      res.json(impact);
    } catch (error) {
      res.status(400).json({ message: "Invalid community impact data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
