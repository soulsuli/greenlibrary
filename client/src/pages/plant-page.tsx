import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Header } from "@/components/header";
import { PlantDetail } from "@/components/plant-detail";
import { Footer } from "@/components/footer";
import type { Plant } from "@shared/schema";

export default function PlantPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: plant, isLoading } = useQuery<Plant>({
    queryKey: ["/api/plants", slug],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header showSearch={false} />
      
      <main>
        <PlantDetail plant={plant} isLoading={isLoading} />
      </main>
      
      <Footer />
    </div>
  );
}
