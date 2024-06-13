import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
  className, children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn(
      'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
      /* 
      height of full
      margin x of auto
      width of full
      max width of screen xl
      padding x of 2.5
      medium devices and upwards -> padding x of 20 
      */
      className
    )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
