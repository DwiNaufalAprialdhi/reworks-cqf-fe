import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";

export default function OrnamentUpdate() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  {/* Ornament */}
                  <div data-aos="fade-down" className="absolute top-[215px] lg:top-[-350px] md:top-[-50px] left-0 w-full md:h-max h-full z-[1]">
                        <Image src="/assets/ornament/oh-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  {/* <div data-aos="fade-down" className="absolute top-[215px] lg:top-[-350px] md:top-[-50px] left-0 w-full md:h-max h-full z-[3]">
                        <Image src="/assets/ornament/oh-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div> */}
                  <div data-aos="fade-down" className="absolute top-[215px] lg:top-[-350px] md:top-[-50px] left-0 w-full md:h-max h-full z-[2]">
                        <Image src="/assets/ornament/oh-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  {/* <div data-aos="fade-down" className="absolute top-[215px] lg:top-[-350px] md:top-[-50px] left-0 w-full md:h-max h-full z-[4]">
                        <Image src="/assets/ornament/oh-04.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div> */}
            </>
      )
}
