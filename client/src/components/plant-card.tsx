import { Link } from "wouter";
import { Droplets, Sun, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Plant } from "@shared/schema";

interface PlantCardProps {
  plant: Plant;
}

const difficultyLabels: Record<string, string> = {
  easy: "سهل",
  medium: "متوسط",
  hard: "صعب",
};

const difficultyColors: Record<string, string> = {
  easy: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  medium: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
  hard: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
};

const sunlightIcons: Record<string, string> = {
  full_sun: "ضوء كامل",
  partial_shade: "ظل جزئي",
  shade: "ظل",
  indirect: "ضوء غير مباشر",
};

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link href={`/plant/${plant.slug}`}>
      <Card 
        className="group cursor-pointer overflow-visible transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        data-testid={`card-plant-${plant.id}`}
      >
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <Leaf className="h-16 w-16 text-primary/40 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <Badge 
            className={`absolute top-3 left-3 ${difficultyColors[plant.difficulty]} border-0`}
            variant="secondary"
          >
            {difficultyLabels[plant.difficulty]}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-display text-lg font-bold text-foreground mb-1 text-right" data-testid={`text-plant-name-${plant.id}`}>
            {plant.nameAr}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 text-right italic">
            {plant.scientificName}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-end">
            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded-full px-2 py-1">
              <Droplets className="h-3 w-3 text-blue-500" />
              <span>{plant.wateringFrequency}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded-full px-2 py-1">
              <Sun className="h-3 w-3 text-yellow-500" />
              <span>{sunlightIcons[plant.sunlight]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
