import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FilterChips } from "@/components/filter-chips";
import { PlantGrid } from "@/components/plant-grid";
import { Footer } from "@/components/footer";
import type { Plant, PlantFilter } from "@shared/schema";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState<PlantFilter>({});

  const { data: plants = [], isLoading } = useQuery<Plant[]>({
    queryKey: ["/api/plants"],
  });

  const filteredPlants = useMemo(() => {
    let result = plants;

    if (searchValue) {
      const search = searchValue.toLowerCase();
      result = result.filter(
        (plant) =>
          plant.nameAr.includes(search) ||
          plant.nameEn.toLowerCase().includes(search) ||
          plant.scientificName.toLowerCase().includes(search)
      );
    }

    if (filters.category) {
      result = result.filter((plant) => plant.category === filters.category);
    }

    if (filters.difficulty) {
      result = result.filter((plant) => plant.difficulty === filters.difficulty);
    }

    if (filters.sunlight) {
      result = result.filter((plant) => plant.sunlight === filters.sunlight);
    }

    return result;
  }, [plants, searchValue, filters]);

  const handleFilterChange = (newFilters: PlantFilter) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        searchValue={searchValue} 
        onSearchChange={setSearchValue}
      />
      
      <main>
        <HeroSection />
        
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-section-title">
              اكتشف نباتاتنا
            </h2>
            <p className="text-muted-foreground">
              تصفح مجموعتنا من النباتات واختر ما يناسبك
            </p>
          </div>

          <div className="mb-8 p-4 rounded-lg bg-card border">
            <FilterChips filters={filters} onFilterChange={handleFilterChange} />
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            {!isLoading && (
              <span data-testid="text-results-count">
                عرض {filteredPlants.length} من {plants.length} نبتة
              </span>
            )}
          </div>

          <PlantGrid plants={filteredPlants} isLoading={isLoading} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
