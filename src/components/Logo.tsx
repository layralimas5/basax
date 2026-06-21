import Image from "next/image";
import { cn } from "@/lib/utils";

const SRC = {
  green: "/logo-basax-green.png",
  yellow: "/logo-basax-yellow.png",
  white: "/logo-basax-white.png",
} as const;

export function Logo({
  variant = "green",
  className,
}: {
  variant?: keyof typeof SRC;
  className?: string;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt="Basax"
      width={170}
      height={32}
      priority
      className={cn("h-6 w-auto", className)}
    />
  );
}
