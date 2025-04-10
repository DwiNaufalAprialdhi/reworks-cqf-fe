import Image from 'next/image'
import React from 'react'

export default function OrnamentInspiration() {
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div className="absolute top-0 left-0 w-full md:h-auto h-full z-[2]">
                        <Image src="/assets/ornament/ip-1.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-0 left-0 w-full md:h-auto h-full z-[3]">
                        <Image src="/assets/ornament/ip-2.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-0 left-0 w-full md:h-auto h-full z-[1]">
                        <Image src="/assets/ornament/ip-3.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  {/* <div className="absolute top-0 left-0 w-full md:h-auto h-full z-[4]">
                        <Image src="/assets/ornament/ip-4.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div> */}
            </>
      )
}
