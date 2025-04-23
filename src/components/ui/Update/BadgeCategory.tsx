import React, { ReactNode } from 'react'

type Props = {
      children: ReactNode
}

export default function BadgeCategory(props: Props) {
      return (
            <>
                  <div className='max-w-max md:py-[11px] py-[10px] md:px-6 px-5 flex items-center justify-center bg-theme-ascent rounded-full'>
                        <h2 className='font-madium text-white md:text-lg text-sm font-baloo leading-tight tracking-tight text-opacity-100'>
                              {props.children}
                        </h2>
                  </div>
            </>
      )
}
