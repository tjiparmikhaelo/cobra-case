import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
  const user = undefined

  const isAdmin = false

  return ( 
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b
    border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      {/*
      position element as a relative until it crosses a specific thershold, then treat it as fixed until its parent is off screen
      control the three dimensional positioning of 100
      height of 14
      position element on the full top of the page
      position of top 0
      wisth of full
      border bottom
      gray colored bottom with the weight of 200
      white background with the opacity of 75
      blur the backdrop by 24 px
      enable all transition property
      */}
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b
        border-zinc-200">
          {/*
          flex display
          height of 14
          center items
          justify items along the container's main axis in equal length
          bottom border
          zinc colored border with weight of 200 
          */}
          <Link href="/" className="flex z-40 font-semibold">
            {/*
            flex display
            the dimensional positioning of 40
            semibold font
            */}
            case<span className="text-green-600">cobra</span>
              {/*
              green coloredtext with weight of 600
              */}
          </Link>
          <div className="h-full flex items-center space-x-4">
            {/*
            height of full
            flex display
            center items
            horizontal space of 4 between each element
            */}
            { user ? (
              <>
                <Link 
                  href="/api/auth/logout" 
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Sign Out
                </Link>
                { isAdmin ? 
                  <Link 
                    href="/api/auth/logout" 
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Dashboard ✨
                  </Link> : null
                }
                <Link 
                    href="/configure/upload" 
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}>
                    Create Case
                    <ArrowRight className="ml-1.5 he-5 w-5"/>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/api/auth/register" 
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Sign Up
                </Link>
                <Link 
                    href="/api/auth/login" 
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Login
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>
                <Link 
                    href="/configure/upload" 
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}>
                    Create Case
                    <ArrowRight className="ml-1.5 he-5 w-5"/>
                </Link>
              </>
            ) }
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
