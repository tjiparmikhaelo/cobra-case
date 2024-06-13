import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32
        lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        {/*
        padding bottom of 24
        padding top of 10
        large devices -> grid
        large devices -> grid columns of 3
        small devices -> padding bottom of 32
        large devices -> gap x of 0
        xl devices  -> gap x of 8
        large devices -> padding top of 24
        xl devices -> padding top of 32
        large devices -> padding bottom of 52 
        */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            {/*
            column span of 2
            padding x of 6
            large devices -> padding x of 0
            large devices -> padding top of 4 
            */}
              <div className="relative mx-auto text-center lg:text-left
              flex flex-col items-center lg:items-start">
                {/*
                position of relative -> position an element according to the normal flow of the document
                margin x of auto
                centered text
                large devices -> text left
                flex
                flex-col -> position flex items vertically
                center items
                large devices -> items-start -> to place grid items on the start of their grid on both axes
                */}
                <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                  {/*
                  position of absolute -> position the element outside of the normal flow, basically if there any other element exist, they will be ignoring the element with this position
                  width of 28
                  left-0 -> position the element to the left with the value of 0, meaning this element will be in the left edge
                  -top-20 -> give the negative value to top
                  hidden -> the default image will not appear on default devices
                  lg: block -> only on large devices this image will appear
                  */}
                  <img src="/snake-1.png" alt="" className="w-full"
                  // width of full 
                  />
                </div>
                <h1 className="relative w-fit tracking-tight
                text-balance mt-16 font-bold !leading-tight
                text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                  {/*
                  position of relative
                  width of fit-content
                  tracking-tight -> control the letter spacing to tight
                  text-balance -> distribute text evenly across each line
                  margin top of 16
                  font bold
                  prioritize the classname to override the default or inherited classname to give thsi element a tight line spacing/ height
                  setting the collor of the text to gray and the weight is 600
                  setting the font size to 5 xl
                  medium devices -> setting the text to 6 xl
                  large devices -> the text is set to 7 xl
                  */}
                  Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
                    {/*
                    set the bacgorund color to green and weight of 600
                    padding x of 2
                    set the color of the text to white
                    */}
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose
                text-center lg:text-left text-balance md:text-wrap">
                  {/*
                  margin top of 8
                  large text
                  large devices -> padding roght of 10
                  set the max width of the screen to 65ch
                  center text
                  large-devices -> left text
                  distribute text evenly across each line
                  medium devices -> wrap overflowing text onto multiple line
                  */}
                  Capture your favourite memories with your own, <span
                  className="font-semibold">one-of-one</span> phone case.
                  CaseCobra allows you to protect your memories, not just
                  your phone case.
                </p>
                <ul className="mt-8 space-y-2 text-left font-medium flex
                flex-col items-center sm:items-start">
                  {/*
                  margin top of 8
                  set the vertical space between element
                  left text
                  medium font
                  flex
                  flex the items vertically
                  center items
                  small devices -> place grid items on the start of their grid on both axes
                  */}
                  <div className="space-y-2">
                    {/*
                    vertical space between each element is set to 2
                    */}
                    <li className="flex gap-1.5 items-center text-left">
                      {/*
                      flex display
                      1.5 gap
                      center items
                      left text
                      */}
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      {/*
                      height of 5
                      width of 5
                      prevent flex item from shrinking
                      green text with 600 weight
                      */}
                      High-quality, durable material
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      {/*
                      flex display
                      1.5 gap
                      center items
                      left text
                      */}
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      {/*
                      height of 5
                      width of 5
                      prevent flex item from shrinking
                      green text with 600 weight
                      */}
                      5 years print guaranteed
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      {/*
                      flex display
                      1.5 gap
                      center items
                      left text
                      */}
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      {/*
                      height of 5
                      width of 5
                      prevent flex item from shrinking
                      green text with 600 weight
                      */}
                      Newest iPhone models supported
                    </li>
                  </div>
                </ul>
                <div className="mt-12 flex flex-col sm:flex-row items-center 
                sm:items-start gap-5">
                  {/*
                  margin top of 12
                  flex display
                  position items vertically
                  small-devices -> position items horizontally
                  center items
                  small devices -> place grid items at the start of their grid on both axes
                  gap of 5
                  */}
                  <div className="flex -space-x-4">
                    {/* 
                    flex display
                    horizontal space between element is set to -4
                    */}
                     <img className="inline-block h-10 w-10 rounded-full 
                     ring-2 ring-slate-100" src="/users/user-1.png" alt="user image" />
                     {/*
                     wrap element to prevent it strech beyond the parent
                     height of 10
                     width of 10
                     create pill button
                     apply solid box-shadow of specific of 2 to an element
                     apply slate color to the box-shadow
                     */}
                     <img className="inline-block h-10 w-10 rounded-full 
                     ring-2 ring-slate-100" src="/users/user-2.png" alt="user image" />
                     {/*
                     wrap element to prevent it strech beyond the parent
                     height of 10
                     width of 10
                     create pill button
                     apply solid box-shadow of specific of 2 to an element
                     apply slate color to the box-shadow
                     */}
                     <img className="inline-block h-10 w-10 rounded-full 
                     ring-2 ring-slate-100" src="/users/user-3.png" alt="user image" />
                     {/*
                     wrap element to prevent it strech beyond the parent
                     height of 10
                     width of 10
                     create pill button
                     apply solid box-shadow of specific of 2 to an element
                     apply slate color to the box-shadow
                     */}
                     <img className="inline-block h-10 w-10 rounded-full 
                     ring-2 ring-slate-100" src="/users/user-4.jpg" alt="user image" />
                     {/*
                     wrap element to prevent it strech beyond the parent
                     height of 10
                     width of 10
                     create pill button
                     apply solid box-shadow of specific of 2 to an element
                     apply slate color to the box-shadow
                     */}
                     <img className="inline-block object-cover h-10 w-10 rounded-full 
                     ring-2 ring-slate-100" src="/users/user-5.jpg" alt="user image" />
                     {/*
                     wrap element to prevent it strech beyond the parent
                     resize element to cover its container
                     height of 10
                     width of 10
                     create pill button
                     apply solid box-shadow of specific of 2 to an element
                     apply slate color to the box-shadow
                     */}
                  </div>

                  <div className="flex flex-col justify-between items-center
                  sm:items-start">
                    {/* 
                    flex display
                    adjust items vertically
                    justify items along the container's axis so the space between items are equal
                    center items
                    small-devices -> place grid items at the start of their grid areas on both axis 
                    */}
                    <div className="flex gap-0.5">
                    {/*
                    flex display
                    gap of 0.5
                    */}
                    <Star className="h-4 w-4 text-green-600
                    fill-green-600"/>
                    {/*
                    height of 4
                    width of 4
                    green text with weight of 600
                    fill the icon with green color with the weight of 600
                    */}
                    <Star className="h-4 w-4 text-green-600
                    fill-green-600"/>
                    {/*
                    height of 4
                    width of 4
                    green text with weight of 600
                    fill the icon with green color with the weight of 600
                    */}
                    <Star className="h-4 w-4 text-green-600
                    fill-green-600"/>
                    {/*
                    height of 4
                    width of 4
                    green text with weight of 600
                    fill the icon with green color with the weight of 600
                    */}
                    <Star className="h-4 w-4 text-green-600
                    fill-green-600"/>
                    {/*
                    height of 4
                    width of 4
                    green text with weight of 600
                    fill the icon with green color with the weight of 600
                    */}
                    <Star className="h-4 w-4 text-green-600
                    fill-green-600"/>
                    {/*
                    height of 4
                    width of 4
                    green text with weight of 600
                    fill the icon with green color with the weight of 600
                    */}
                    </div>
                    <p>
                      <span className="font-semibold">1.250</span> happy customers
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex
          justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20
          h-fit">
            {/*
            make element span full columns
            large devices -> span 1 column
            full width
            flex display
            justify items along the center of the container's main axis
            padding x of 8
            small devices -> padding of 16
            medium devices -> padding x of 0
            margin top of 32
            large devices -> margin x of 0
            large devices -> margin top of 20
            height of fit content
            */}
            <div className="relative md:max-w-xl">
              {/*
              position element according to the normal flow of the document
              */}
              <img className="absolute w-40 lg:w-52 left-56
              -top-20 select-none hidden sm:block lg:hidden
              xl:block" 
              src="/your-image.png " alt="" />
              {/*
              position the element outside the normal flow, causing neighbor element to act as if this element does not exist
              width of 40
              large devices -> width of 52
              left of 56
              top of -20
              prevent users to select the element
              on default, it is hidden
              small-device -> display block the element
              large-devices -> hidden
              xl devices -> display block
              */}
              <img className="absolute w-20 -left-6 -bottom-6
              select-none" 
              src="/line.png" alt="" />
              {/*
              position the element outside the normal flow
              width of 20
              left of -6
              bottom of -6
              prevent users to select the element
              */}
              <Phone className="w-64" imgSrc="/testimonials/1.jpg"/>
              {/*
              width of 64
              */}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
