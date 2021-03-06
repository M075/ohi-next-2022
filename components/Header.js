/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'


export default function Header() {
  return (
    <Fragment>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">A Central</span>{' '}
                  <span className="block xl:inline">Directory & Marketplace</span>{' '}
                  for
                  <span className="block text-green-500 xl:inline">
                    {' '} Home Industries
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Post your products here and benefit from Easy payment and
                  delivery options.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base 
                                        font-medium rounded-md text-white bg-green-500 hover:bg-green-800 md:py-4 md:text-lg md:px-10 drop-shadow-lg "
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base 
                                        font-medium rounded-md text-green-500 bg-indigo-100 hover:bg-gray-300 hover:text-green-800
                                        md:py-4 md:text-lg md:px-10 drop-shadow"
                    >
                      View Store
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-40 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src='/home.png'
            alt=""
          />
        </div>
    </Fragment>
  )
}
