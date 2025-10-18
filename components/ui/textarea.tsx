import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-everglade/50 bg-spring-wood/70 backdrop-blur-sm px-3 py-2 text-base text-everglade shadow-sm placeholder:text-everglade/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-everglade disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-dark-everglade/50 dark:bg-dark-spring-wood/50 dark:text-dark-everglade dark:placeholder:text-dark-everglade/50 dark:focus-visible:ring-1 dark:focus-visible:ring-dark-everglade",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
