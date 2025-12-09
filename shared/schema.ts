import { z } from "zod";

export const plantSchema = z.object({
  id: z.string(),
  nameAr: z.string(),
  nameEn: z.string(),
  slug: z.string(),
  description: z.string(),
  scientificName: z.string(),
  category: z.enum(["indoor", "outdoor", "aromatic", "succulent", "edible"]),
  difficulty: z.enum(["easy", "medium", "hard"]),
  wateringFrequency: z.string(),
  wateringDetails: z.string(),
  sunlight: z.enum(["full_sun", "partial_shade", "shade", "indirect"]),
  sunlightDetails: z.string(),
  soilType: z.string(),
  temperature: z.string(),
  humidity: z.string(),
  seasonalCare: z.array(z.object({
    season: z.string(),
    tips: z.string(),
  })),
  commonIssues: z.array(z.object({
    issue: z.string(),
    solution: z.string(),
  })),
  tips: z.array(z.string()),
  imageUrl: z.string().optional(),
});

export type Plant = z.infer<typeof plantSchema>;

export const plantFilterSchema = z.object({
  category: z.enum(["indoor", "outdoor", "aromatic", "succulent", "edible"]).optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).optional(),
  sunlight: z.enum(["full_sun", "partial_shade", "shade", "indirect"]).optional(),
  search: z.string().optional(),
});

export type PlantFilter = z.infer<typeof plantFilterSchema>;

export const users = {
  id: "",
  username: "",
  password: "",
};

export type User = typeof users;
export type InsertUser = Omit<User, "id">;
