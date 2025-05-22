import React from 'react'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

type Props = {
      children?: React.ReactNode
}

export default function LayoutDashboard(props: Props) {
      return (
            <>
                  <main className='w-full h-auto bg-white'>
                        <section className='w-full min-h-screen flex'>
                              {/* Sidebar Left */}
                              <SidebarLeft />
                              {/* Main Content */}
                              <main className='w-max h-auto overflow-x-hidden'>
                                    {props.children}
                              </main>
                              {/* Sidebar Right */}
                              <SidebarRight />
                        </section>
                  </main>
            </>
      )
}
