import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Skeleton } from "@/components/ui/skeleton";
import type { Plant } from "@shared/schema";

function PlantCircle({ plant }: { plant: Plant }) {
  return (
    <Link href={`/plant/${plant.slug}`}>
      <div
        className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-center cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-primary/20 hover:border-primary/40"
        data-testid={`circle-plant-${plant.id}`}
      >
        <span className="font-display font-bold text-sm md:text-base text-foreground px-2">
          {plant.nameAr}
        </span>
      </div>
    </Link>
  );
}

function CircleSkeleton() {
  return <Skeleton className="w-28 h-28 md:w-32 md:h-32 rounded-full" />;
}

export default function Home() {
  const { data: plants = [], isLoading } = useQuery<Plant[]>({
    queryKey: ["/api/plants"],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute top-4 left-4">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" data-testid="text-title">
            المكتبة الخضراء
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-subtitle">
            اهتم بنبتتك، واكتشف كيف تصنع فرقًا!
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl" data-testid="plants-grid">
          {isLoading ? (
            Array.from({ length: 16 }).map((_, i) => <CircleSkeleton key={i} />)
          ) : (
            plants.map((plant) => <PlantCircle key={plant.id} plant={plant} />)
          )}
        </div>
      </div>
    </div>
  );
}
