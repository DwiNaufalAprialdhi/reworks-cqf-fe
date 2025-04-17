import React from 'react'

type Props = {
      name: string
      title: string
      defaultChecked?: boolean
}

export default function ButtonTabMenu(props: Props) {
      return (
            <>
                  <div className='w-max h-max relative overflow-hidden flex-shrink-0'>
                        <input type="radio" name={props.name} className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' defaultChecked={props.defaultChecked} />
                        <button className='lg:py-2 py-1 lg:px-2 px-1 rounded-full bg-transparent flex items-center justify-center font-normal lg:text-sm text-xs text-theme-secondary text-center peer-checked:bg-white border border-theme-ascent border-opacity-0 peer-checked:border-opacity-100 peer-checked:text-theme-ascent duration-300'>
                              {props.title}
                        </button>
                  </div>
            </>
      )
}
