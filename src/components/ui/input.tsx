import * as React from "react"
import { cn } from "@/lib/utils"

interface IInput extends React.ComponentProps<"input"> {
  Icon?: React.ElementType
  iconProps?: React.HTMLAttributes<HTMLElement>;
}
const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ className, type, Icon, iconProps, ...props }, ref) => {
    return (
      <div className={cn(
        "flex items-center px-2 h-10 w-full rounded-md border border-input  text-base font-bold ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}>
        <input
          type={type}
          ref={ref}
          className="w-full h-full pr-10 outline-none focus:ring-0 focus:border-transparent placeholder:text-sm"
          {...props}
        />
        {Icon && <Icon
          {...iconProps}
        />}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
