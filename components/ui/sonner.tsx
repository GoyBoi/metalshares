"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-spring-wood group-[.toaster]:text-everglade group-[.toaster]:border-everglade/30 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-dark-bg dark:group-[.toaster]:text-dark-text dark:group-[.toaster]:border-dark-everglade/30",
          description: "group-[.toast]:text-como dark:group-[.toast]:text-dark-como",
          actionButton:
            "group-[.toast]:bg-everglade group-[.toast]:text-spring-wood dark:group-[.toaster]:bg-dark-everglade dark:group-[.toaster]:text-dark-spring-wood",
          cancelButton:
            "group-[.toast]:bg-como group-[.toast]:text-spring-wood dark:group-[.toaster]:bg-dark-como dark:group-[.toaster]:text-dark-spring-wood",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
