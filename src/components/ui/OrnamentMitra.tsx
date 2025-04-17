import Image from 'next/image'
import React from 'react'

export default function OrnamentMitra() {
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div className="absolute top-[100px] left-0 w-full h-full z-[2]">
                        <Image src="/assets/ornament/om-1.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-[100px] left-0 w-full h-full z-[3]">
                        <Image src="/assets/ornament/om-2.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-[150px] left-0 w-full h-full z-[1]">
                        <Image src="/assets/ornament/om-3.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-[100px] left-0 w-full h-full z-[4]">
                        <Image src="/assets/ornament/om-4.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
            </>
      )
}
