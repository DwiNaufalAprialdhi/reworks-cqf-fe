import Image from 'next/image'
import React from 'react'

export default function OrnamentHero() {
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div className="absolute top-[390px] lg:top-[-150px] md:top-[170px] left-0 w-full md:h-auto h-full z-[2] bounce01">
                        <Image src="/assets/ornament/oh-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-[390px] lg:top-[-100px] md:top-[170px] left-0 w-full md:h-auto h-full z-[3] bounce02">
                        <Image src="/assets/ornament/oh-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-[390px] lg:top-[-150px] md:top-[170px] left-0 w-full md:h-auto h-full z-[1] bounce03">
                        <Image src="/assets/ornament/oh-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div className="absolute top-[390px] lg:top-[-100px] md:top-[170px] left-0 w-full md:h-auto h-full z-[4] bounce04">
                        <Image src="/assets/ornament/oh-04.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>

                  <div className="absolute top-[500px] lg:top-[220px] md:top-[250px] left-0 w-full md:h-auto h-full z-[-2] bounce01">
                        <Image src="/assets/ornament/oe-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div className="absolute top-[500px] lg:top-[220px] md:top-[250px] left-0 w-full md:h-auto h-full z-[-3] bounce02">
                        <Image src="/assets/ornament/oe-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div className="absolute top-[500px] lg:top-[220px] md:top-[250px] left-0 w-full md:h-auto h-full z-[-1] bounce03">
                        <Image src="/assets/ornament/oe-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
            </>
      )
}
