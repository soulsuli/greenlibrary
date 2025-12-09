import { Link } from "wouter";
import { Leaf, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showSearch?: boolean;
}

export function Header({ searchValue = "", onSearchChange, showSearch = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">المكتبة الخضراء</span>
        </Link>

        {showSearch && (
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث عن نبتة..."
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pr-10 text-right"
                data-testid="input-search"
              />
            </div>
          </div>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
