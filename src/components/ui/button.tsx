import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default:
          "bg-[#c83c3e] text-white font-black italic uppercase tracking-wider shadow-[0_8px_20px_rgba(200,60,62,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(200,60,62,0.5)] hover:bg-[#b22f31] active:translate-y-0 active:shadow-[0_4px_12px_rgba(200,60,62,0.3)]",
        destructive: "bg-destructive text-destructive-foreground group-hover:bg-destructive/90",
        outline: "border border-input bg-background group-hover:bg-accent group-hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground group-hover:bg-secondary/80",
        ghost: "group-hover:bg-accent group-hover:text-accent-foreground",
        link: "text-primary underline-offset-4 group-hover:underline",
      },
      size: {
        default: "h-12 px-10 py-3",
        sm: "h-10 px-6",
        lg: "h-14 px-12",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Apply uneven border radius for default variant
    const customStyle = variant === "default" || !variant
      ? { borderRadius: '20px 30px 20px 30px', ...style }
      : style
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={customStyle}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }