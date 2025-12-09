import { Leaf, Heart, Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold">المكتبة الخضراء</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              دليلك الشامل للعناية بالنباتات المنزلية. نساعدك على اختيار النباتات المناسبة ورعايتها بشكل صحيح.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="link-facebook">
                <SiFacebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-instagram">
                <SiInstagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-twitter">
                <SiTwitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">فئات النباتات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/?category=indoor" className="hover:text-primary transition-colors">نباتات داخلية</Link></li>
              <li><Link href="/?category=outdoor" className="hover:text-primary transition-colors">نباتات خارجية</Link></li>
              <li><Link href="/?category=aromatic" className="hover:text-primary transition-colors">نباتات عطرية</Link></li>
              <li><Link href="/?category=succulent" className="hover:text-primary transition-colors">نباتات عصارية</Link></li>
              <li><Link href="/?category=edible" className="hover:text-primary transition-colors">نباتات صالحة للأكل</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@greenlib.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">احصل على نصائح العناية</h4>
            <p className="text-sm text-muted-foreground">
              اشترك في نشرتنا البريدية للحصول على نصائح شهرية
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="text-right"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-subscribe">اشترك</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            صُنع بـ <Heart className="h-4 w-4 text-destructive fill-destructive" /> للنباتات
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 المكتبة الخضراء. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
