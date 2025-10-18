import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-limed-oak disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-xl",
  {
    variants: {
      variant: {
        default:
          "bg-limed-oak text-spring-wood shadow hover:bg-green-smoke dark:bg-dark-limed-oak dark:text-dark-spring-wood dark:hover:bg-dark-green-smoke",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-limed-oak text-limed-oak bg-transparent hover:bg-limed-oak hover:text-spring-wood dark:border-dark-limed-oak dark:text-dark-text dark:hover:bg-dark-limed-oak dark:hover:text-dark-spring-wood",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 dark:bg-dark-limed-oak/30 dark:text-dark-green-smoke dark:hover:bg-dark-limed-oak/40",
        ghost: "hover:bg-surf-crest text-limed-oak dark:hover:bg-dark-border/30 dark:text-dark-text",
        link: "text-limed-oak underline-offset-4 hover:underline dark:text-dark-text dark:hover:text-dark-limed-oak",
      },
      size: {
        default: "h-10 py-2 px-6",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 py-3 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
