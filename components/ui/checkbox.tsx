import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"
import { CheckIcon } from "@radix-ui/react-icons"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-everglade shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-everglade disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-everglade data-[state=checked]:text-spring-wood dark:border-dark-everglade dark:focus-visible:ring-dark-everglade dark:data-[state=checked]:bg-dark-everglade dark:data-[state=checked]:text-dark-spring-wood",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
