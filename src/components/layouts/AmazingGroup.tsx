import React from 'react';
import CardAmazingGroup from '../ui/AmazingGroup/CardAmazingGroup';
// import Image from 'next/image';

const data = [
      { id: 1, image: '/assets/images/cqf.svg' },
      { id: 2, image: '/assets/images/cqc.svg' },
      { id: 3, image: '/assets/images/cqstore.svg' },
];

// Fungsi untuk menduplikasi data
const generateInfiniteData = (data: { id: number; image: string }[]) => [
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
];

export default function AmazingGroup() {
      // Mendapatkan data yang diulang dua kali
      const infiniteData = generateInfiniteData(data);

      return (
            <>
                  <main className="w-full h-auto pt-0 lg:mb-[100px] mb-[50px] grid grid-cols-1 relative z-10 overflow-hidden font-smooth">
                        {/* Header */}
                        <div data-aos='fade-right' className='container_section flex flex-col gap-y-4 lg:mb-[32px] mb-4 relative-z-[5]'>
                              <h2 className='text_title text-center'>Amazing Group</h2>
                        </div>

                        {/* Content */}
                        <section className="w-full col-span-1 flex flex-col lg:gap-6 gap-4 overflow-hidden relative z-[5]">
                              {/* Running Left */}
                              <div data-aos='fade-left' className="w-full flex items-center justify-center py-1 lg:gap-6 gap-4 running-animation-left">
                                    {infiniteData.map((item, index) => (
                                          <CardAmazingGroup
                                                key={`${item.id}-${index}`}
                                                image={item.image}
                                          />
                                    ))}
                              </div>

                              {/* Running Right */}
                              <div data-aos='fade-left' className="w-full flex items-center justify-center py-1 lg:gap-6 gap-4 running-animation-right">
                                    {infiniteData.map((item, index) => (
                                          <CardAmazingGroup
                                                key={`${item.id}-${index}`}
                                                image={item.image}
                                          />
                                    ))}
                              </div>
                        </section>
                  </main>
            </>
      );
}
