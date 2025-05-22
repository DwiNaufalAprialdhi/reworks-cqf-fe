import Image from 'next/image';
import React from 'react';

const activities = [
      { message: 'User mendaftar akun dengan email', time: 'Baru saja' },
      { message: 'User memverifikasi email', time: '1 menit lalu' },
      { message: 'User mengubah foto profil', time: '2 menit lalu' },
      { message: 'User mengupdate password', time: '5 menit lalu' },
      { message: 'User logout dari perangkat lain', time: '10 menit lalu' },
];

const fundraisers = [
      { name: 'Dwi Naufal Aprialdhi', amount: 'Rp 50.000', avatar: '/assets/images/profile-placeholder.png' },
      { name: 'Andi Saputra', amount: 'Rp 100.000', avatar: '/assets/images/profile-placeholder.png' },
      { name: 'Siti Aminah', amount: 'Rp 25.000', avatar: '/assets/images/profile-placeholder.png' },
      { name: 'Rina Oktaviani', amount: 'Rp 75.000', avatar: '/assets/images/profile-placeholder.png' },
      { name: 'Muhammad Irfan', amount: 'Rp 150.000', avatar: '/assets/images/profile-placeholder.png' },
];

export default function SidebarRight() {
      return (
            <aside className='w-full hidden lg:block max-w-[258px] h-auto border-l border-theme-gray_lg'>
                  {/* Activities */}
                  <div className='w-full p-4 flex flex-col gap-y-3 mb-4'>
                        <h2 className="font-normal text-sm">Activities</h2>
                        {activities.map((activity, index) => (
                              <div key={index} className="w-full flex items-center gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                          {index !== activities.length - 1 && (
                                                <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                          )}
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-1'>{activity.message}</h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>{activity.time}</h2>
                                    </div>
                              </div>
                        ))}
                  </div>

                  {/* Fundraiser */}
                  <div className='w-full p-4 flex flex-col gap-y-3'>
                        <h2 className="font-normal text-sm">Fundraiser</h2>
                        {fundraisers.map((donor, index) => (
                              <div key={index} className="w-full flex gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-6 h-6 overflow-hidden rounded-full'>
                                                <Image
                                                      src={donor.avatar}
                                                      width={24}
                                                      height={24}
                                                      alt='avatar'
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {index !== fundraisers.length - 1 && (
                                                <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                          )}
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-2'>{donor.name}</h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>{donor.amount}</h2>
                                    </div>
                              </div>
                        ))}
                  </div>
            </aside>
      );
}
