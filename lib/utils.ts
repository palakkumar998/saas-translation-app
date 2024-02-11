import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// ⬆️ for customisation

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
