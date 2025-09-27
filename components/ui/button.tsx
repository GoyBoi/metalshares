import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-everglade disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-everglade text-spring-wood shadow hover:bg-como dark:bg-dark-everglade dark:text-dark-spring-wood dark:hover:bg-dark-como",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-everglade text-everglade hover:bg-everglade hover:text-spring-wood dark:border-dark-everglade dark:text-dark-everglade dark:hover:bg-dark-everglade dark:hover:text-dark-spring-wood",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 dark:bg-dark-everglade/30 dark:text-dark-como",
        ghost: "hover:bg-surf-crest text-everglade dark:hover:bg-dark-como/30 dark:text-dark-surf-crest",
        link: "text-everglade underline-offset-4 hover:underline dark:text-dark-everglade",
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
