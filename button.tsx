import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils.ts";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium select-none whitespace-nowrap transition-[background-color,color,box-shadow,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-white",
        outline:
          "bg-transparent text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.16)] hover:bg-fg/6 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.28)]",
        ghost: "bg-transparent text-fg hover:bg-fg/6",
        accent:
          "bg-accent text-bg hover:bg-accent-bright shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-accent)_70%,transparent)]",
        whatsapp:
          "bg-whatsapp text-whatsapp-fg hover:bg-whatsapp-bright shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-whatsapp)_80%,transparent)]",
      },
      size: {
        md: "h-11 min-h-11 rounded-lg px-5 text-sm",
        lg: "h-12 min-h-12 rounded-xl px-5 text-[0.9375rem]",
        icon: "size-12 min-h-12 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
