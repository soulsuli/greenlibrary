import { PlantCard } from "./plant-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Leaf } from "lucide-react";
import type { Plant } from "@shared/schema";

interface PlantGridProps {
  plants: Plant[];
  isLoading?: boolean;
}

function PlantCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card">
      <Skeleton className="aspect-square rounded-t-lg" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4 mr-auto" />
        <Skeleton className="h-4 w-1/2 mr-auto" />
        <div className="flex gap-2 justify-end">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function PlantGrid({ plants, isLoading }: PlantGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" data-testid="plant-grid-loading">
        {Array.from({ length: 8 }).map((_, i) => (
          <PlantCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (plants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center" data-testid="plant-grid-empty">
        <div className="mb-4 rounded-full bg-muted p-6">
          <Leaf className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          لم يتم العثور على نباتات
        </h3>
        <p className="text-muted-foreground max-w-sm">
          جرب تغيير معايير البحث أو الفلاتر للعثور على نباتات أخرى
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" data-testid="plant-grid">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
