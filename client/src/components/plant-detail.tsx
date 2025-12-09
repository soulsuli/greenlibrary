import { ArrowRight, Droplets, Sun, Thermometer, Wind, Leaf, AlertTriangle, Lightbulb, Calendar, Sparkles, ClipboardList } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import type { Plant } from "@shared/schema";
import { plantImages } from "@/lib/plant-images";

interface PlantDetailProps {
  plant: Plant | undefined;
  isLoading?: boolean;
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

const categoryLabels: Record<string, string> = {
  indoor: "داخلي",
  outdoor: "خارجي",
  aromatic: "عطري",
  succulent: "عصاري",
  edible: "صالح للأكل",
};

const sunlightLabels: Record<string, string> = {
  full_sun: "ضوء شمس كامل",
  partial_shade: "ظل جزئي",
  shade: "ظل كامل",
  indirect: "ضوء غير مباشر",
};

function DetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="plant-detail-loading">
      <Skeleton className="h-8 w-32 mb-6" />
      <div className="grid md:grid-cols-2 gap-8">
        <Skeleton className="aspect-square rounded-2xl" />
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-24 w-full" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlantDetail({ plant, isLoading }: PlantDetailProps) {
  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (!plant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center" data-testid="plant-not-found">
        <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center">
          <Leaf className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="font-display text-2xl font-bold mb-4">النبتة غير موجودة</h2>
        <p className="text-muted-foreground mb-6">عذرًا، لم نتمكن من العثور على النبتة المطلوبة</p>
        <Link href="/">
          <Button data-testid="button-back-home">
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للرئيسية
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-6" data-testid="button-back">
          <ArrowRight className="ml-2 h-4 w-4" />
          العودة
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
          {plantImages[plant.slug] ? (
            <img 
              src={plantImages[plant.slug]} 
              alt={plant.nameAr}
              className="w-full h-full object-cover"
              data-testid="img-plant"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Leaf className="h-32 w-32 text-primary/30" />
            </div>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className={`${difficultyColors[plant.difficulty]} border-0`}>
              {difficultyLabels[plant.difficulty]}
            </Badge>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-plant-name">
              {plant.nameAr}
            </h1>
            <p className="text-lg text-muted-foreground italic mb-4">
              {plant.scientificName} ({plant.nameEn})
            </p>
            <p className="text-foreground leading-relaxed" data-testid="text-plant-description">
              {plant.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50">
                    <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-semibold text-foreground">الري</span>
                </div>
                <p className="text-sm font-medium text-foreground">{plant.wateringFrequency}</p>
                <p className="text-xs text-muted-foreground mt-1">{plant.wateringDetails}</p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-900/50">
                    <Sun className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <span className="font-semibold text-foreground">الإضاءة</span>
                </div>
                <p className="text-sm font-medium text-foreground">{sunlightLabels[plant.sunlight]}</p>
                <p className="text-xs text-muted-foreground mt-1">{plant.sunlightDetails}</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/50">
                    <Thermometer className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="font-semibold text-foreground">الحرارة</span>
                </div>
                <p className="text-sm font-medium text-foreground">{plant.temperature}</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900/50">
                    <Wind className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="font-semibold text-foreground">الرطوبة</span>
                </div>
                <p className="text-sm font-medium text-foreground">{plant.humidity}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/50">
                  <Leaf className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <span className="font-semibold text-foreground">نوع التربة</span>
              </div>
              <p className="text-sm text-foreground">{plant.soilType}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-8">
        {plant.didYouKnow && (
          <section>
            <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-amber-500" />
              هل تعلم؟
            </h2>
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed" data-testid="text-did-you-know">
                  {plant.didYouKnow}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {plant.weeklyMission && (
          <section>
            <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
              <ClipboardList className="h-6 w-6 text-purple-500" />
              مهمتك الأسبوعية
            </h2>
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed" data-testid="text-weekly-mission">
                  {plant.weeklyMission}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        <section>
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            العناية الموسمية
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plant.seasonalCare.map((care, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{care.season}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{care.tips}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            نصائح للعناية
          </h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {plant.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary/10">
                      <Leaf className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            المشاكل الشائعة وحلولها
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {plant.commonIssues.map((issue, index) => (
              <AccordionItem key={index} value={`issue-${index}`}>
                <AccordionTrigger className="text-right" data-testid={`accordion-issue-${index}`}>
                  {issue.issue}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{issue.solution}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
