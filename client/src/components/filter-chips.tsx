import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PlantFilter } from "@shared/schema";

interface FilterChipsProps {
  filters: PlantFilter;
  onFilterChange: (filters: PlantFilter) => void;
}

const categoryLabels: Record<string, string> = {
  indoor: "داخلي",
  outdoor: "خارجي",
  aromatic: "عطري",
  succulent: "عصاري",
  edible: "صالح للأكل",
};

const difficultyLabels: Record<string, string> = {
  easy: "سهل",
  medium: "متوسط",
  hard: "صعب",
};

const sunlightLabels: Record<string, string> = {
  full_sun: "ضوء كامل",
  partial_shade: "ظل جزئي",
  shade: "ظل",
  indirect: "ضوء غير مباشر",
};

export function FilterChips({ filters, onFilterChange }: FilterChipsProps) {
  const categories = ["indoor", "outdoor", "aromatic", "succulent", "edible"] as const;
  const difficulties = ["easy", "medium", "hard"] as const;
  const sunlights = ["full_sun", "partial_shade", "shade", "indirect"] as const;

  const clearAllFilters = () => {
    onFilterChange({ search: filters.search });
  };

  const hasActiveFilters = filters.category || filters.difficulty || filters.sunlight;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-muted-foreground ml-2">النوع:</span>
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={filters.category === cat ? "default" : "outline"}
            onClick={() => onFilterChange({ ...filters, category: filters.category === cat ? undefined : cat })}
            className="text-sm"
            data-testid={`filter-category-${cat}`}
          >
            {categoryLabels[cat]}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-muted-foreground ml-2">الصعوبة:</span>
        {difficulties.map((diff) => (
          <Button
            key={diff}
            size="sm"
            variant={filters.difficulty === diff ? "default" : "outline"}
            onClick={() => onFilterChange({ ...filters, difficulty: filters.difficulty === diff ? undefined : diff })}
            className="text-sm"
            data-testid={`filter-difficulty-${diff}`}
          >
            {difficultyLabels[diff]}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-muted-foreground ml-2">الإضاءة:</span>
        {sunlights.map((sun) => (
          <Button
            key={sun}
            size="sm"
            variant={filters.sunlight === sun ? "default" : "outline"}
            onClick={() => onFilterChange({ ...filters, sunlight: filters.sunlight === sun ? undefined : sun })}
            className="text-sm"
            data-testid={`filter-sunlight-${sun}`}
          >
            {sunlightLabels[sun]}
          </Button>
        ))}
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-2 pt-2 border-t">
          <span className="text-sm text-muted-foreground">الفلاتر النشطة:</span>
          {filters.category && (
            <Badge variant="secondary" className="gap-1">
              {categoryLabels[filters.category]}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({ ...filters, category: undefined })}
              />
            </Badge>
          )}
          {filters.difficulty && (
            <Badge variant="secondary" className="gap-1">
              {difficultyLabels[filters.difficulty]}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({ ...filters, difficulty: undefined })}
              />
            </Badge>
          )}
          {filters.sunlight && (
            <Badge variant="secondary" className="gap-1">
              {sunlightLabels[filters.sunlight]}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({ ...filters, sunlight: undefined })}
              />
            </Badge>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-destructive hover:text-destructive"
            data-testid="button-clear-filters"
          >
            مسح الكل
          </Button>
        </div>
      )}
    </div>
  );
}
