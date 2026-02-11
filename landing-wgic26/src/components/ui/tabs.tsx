"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {
  const localRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => localRef.current!)

  const [indicator, setIndicator] = React.useState({ left: 0, width: 0 })

  const update = React.useCallback(() => {
    const container = localRef.current
    if (!container) return
    const active = container.querySelector('[data-state="active"]') as HTMLElement | null
    if (active) {
      const aRect = active.getBoundingClientRect()
      const cRect = container.getBoundingClientRect()
      setIndicator({ left: aRect.left - cRect.left + container.scrollLeft, width: aRect.width })
    } else {
      setIndicator({ left: 0, width: 0 })
    }
  }, [])

  React.useLayoutEffect(() => {
    update()
    const ro = new ResizeObserver(() => update())
    if (localRef.current) ro.observe(localRef.current)
    const mo = new MutationObserver(() => update())
    if (localRef.current) mo.observe(localRef.current, { subtree: true, attributes: true, attributeFilter: ['data-state'] })
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      mo.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [update])

  return (
    <TabsPrimitive.List
      ref={localRef}
      className={cn(
        "relative inline-flex h-12 items-center rounded-md bg-transparent text-white/80 border-b border-white/10",
        className
      )}
      {...props}
    >
      {children}
      <div
        aria-hidden
        className="absolute bottom-0 h-1 bg-cactus transition-all duration-300"
        style={{ left: indicator.left, width: indicator.width }}
      />
    </TabsPrimitive.List>
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-t-md px-4 py-3 text-sm md:text-base font-semibold ring-offset-background transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white/80 hover:text-white border border-white/10 border-b-0 hover:border-white/20 data-[state=active]:text-white data-[state=active]:bg-white/5",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
