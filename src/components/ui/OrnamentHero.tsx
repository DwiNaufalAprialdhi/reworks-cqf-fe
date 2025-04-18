import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";

export default function OrnamentHero() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div data-aos="fade-down" className="absolute top-[390px] lg:top-[-50px] md:top-[170px] left-0 w-full md:h-max h-full z-[1]">
                        <Image src="/assets/ornament/oh-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div data-aos="fade-down" className="absolute top-[390px] lg:top-[-50px] md:top-[170px] left-0 w-full md:h-max h-full z-[3]">
                        <Image src="/assets/ornament/oh-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div data-aos="fade-down" className="absolute top-[390px] lg:top-[-50px] md:top-[170px] left-0 w-full md:h-max h-full z-[2]">
                        <Image src="/assets/ornament/oh-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>
                  <div data-aos="fade-down" className="absolute top-[390px] lg:top-[-50px] md:top-[170px] left-0 w-full md:h-max h-full z-[4]">
                        <Image src="/assets/ornament/oh-04.svg" alt="Ornament" width={1500} height={834} className="w-full h-max object-cover" />
                  </div>

                  <div data-aos="fade-down" className="absolute top-[500px] lg:top-[400px] md:top-[250px] left-0 w-full md:h-max h-full z-[-1]">
                        <Image src="/assets/ornament/oe-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div data-aos="fade-down" className="absolute top-[500px] lg:top-[450px] md:top-[250px] left-0 w-full md:h-max h-full z-[-2]">
                        <Image src="/assets/ornament/oe-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div data-aos="fade-down" className="absolute top-[500px] lg:top-[500px] md:top-[250px] left-0 w-full md:h-max h-full z-[-3]">
                        <Image src="/assets/ornament/oe-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
            </>
      )
}
