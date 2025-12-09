import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/plants", async (req, res) => {
    try {
      const plants = await storage.getAllPlants();
      res.json(plants);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch plants" });
    }
  });

  app.get("/api/plants/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const plant = await storage.getPlantBySlug(slug);
      
      if (!plant) {
        res.status(404).json({ error: "Plant not found" });
        return;
      }
      
      res.json(plant);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch plant" });
    }
  });

  app.get("/api/plants/search/:query", async (req, res) => {
    try {
      const { query } = req.params;
      const plants = await storage.searchPlants(query);
      res.json(plants);
    } catch (error) {
      res.status(500).json({ error: "Failed to search plants" });
    }
  });

  return httpServer;
}
