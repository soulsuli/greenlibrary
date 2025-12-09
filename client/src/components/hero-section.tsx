import { Leaf, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-primary/10 via-background to-primary/5 py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">دليلك الشامل للعناية بالنباتات</span>
          </div>
          
          <div className="mb-6 flex items-center justify-center gap-3">
            <Leaf className="h-12 w-12 md:h-16 md:w-16 text-primary" />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
            المكتبة الخضراء
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8" data-testid="text-hero-subtitle">
            اهتم بنبتتك، واكتشف كيف تصنع فرقًا!
            <br />
            <span className="text-base">
              اكتشف مجموعتنا من النباتات وتعلم كيفية رعايتها بشكل صحيح
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
              <span className="font-bold text-primary">16+</span>
              <span>نوع نبات</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
              <span className="font-bold text-primary">100%</span>
              <span>نصائح مجانية</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border">
              <span className="font-bold text-primary">عربي</span>
              <span>محتوى كامل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
