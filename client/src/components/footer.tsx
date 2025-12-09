import { Leaf, Facebook } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-display text-xl font-bold">المكتبة الخضراء</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            مشروع بيئي مبتكر يتيح للطلاب تحويل ركن صغير في المدرسة إلى مساحة تعلم خضراء. كل نبتة درس، وكل ركن أخضر فرصة لتعلّم جديد.
          </p>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" data-testid="link-facebook">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            مدرسة عائشة بنت أبي بكر المختلطة
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            برمجة م.أسماء سليمان
          </p>
        </div>
      </div>
    </footer>
  );
}
