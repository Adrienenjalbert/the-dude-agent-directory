import {
  Target,
  Headphones,
  Telescope,
  Code2,
  Database,
  Megaphone,
  Settings2,
  Landmark,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Target,
  Headphones,
  Telescope,
  Code2,
  Database,
  Megaphone,
  Settings2,
  Landmark,
};

interface CategoryIconProps {
  name: string;
  className?: string;
}

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const Icon = ICONS[name] ?? Bot;
  return <Icon className={cn("size-5", className)} aria-hidden />;
}
