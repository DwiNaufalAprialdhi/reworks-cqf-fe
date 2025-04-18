import Image from 'next/image'
import React from 'react'

export default function OrnamentFooter() {
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div className="absolute lg:-bottom-[200px] bottom-0 left-0 w-full h-full z-[2]">
                        <Image src="/assets/ornament/of-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute lg:-bottom-[200px] bottom-0 left-0 w-full h-full z-[3]">
                        <Image src="/assets/ornament/of-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute lg:-bottom-[250px] bottom-0 left-0 w-full h-full z-[1]">
                        <Image src="/assets/ornament/of-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute lg:-bottom-[200px] bottom-0 left-0 w-full h-full z-[4]">
                        <Image src="/assets/ornament/of-04.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
            </>
      )
}
