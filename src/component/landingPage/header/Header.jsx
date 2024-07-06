import React from 'react'

const Header = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.8'>
        <div className="header_body grid md:grid-cols-3 gap-10 md:gap-20 justify-center justify-items-center items-center w-full h-screen">
            <div className="text_content md:text-left col-span-3 sm:col-span-1 text-center">
                <h1 className=' capitalize text-4xl'>a rosted <span className='text-6xl md:text-5xl xl:text-9xl uppercase font-medium'>coffee</span>for you</h1>
            </div>
            <div className="img_content col-span-3 md:col-span-2 ">
                <img src="https://i.pinimg.com/originals/39/b9/a5/39b9a5e405731092a9e60ad13f546986.gif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header