'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import ContactInfoModal from './ContactInfoModal';

export default function ProfileHeader() {
    const [showContactInfo, setShowContactInfo] = useState(false);

    return (
        <>
            <ContactInfoModal isOpen={showContactInfo} onClose={() => setShowContactInfo(false)} />
            <section className="linkedin-card relative pt-[100px] sm:pt-[200px]">
                {/* Banner Image */}
                <div className="absolute top-0 left-0 w-full h-[150px] sm:h-[200px] overflow-hidden rounded-t-lg">
                    <div className="w-full h-full bg-[url('/background_img.jpg')] bg-cover bg-center bg-[#a0b4b7]"></div>
                    {/* <button className="absolute top-4 right-4 bg-white/60 p-2 rounded-full hover:bg-white transition-colors">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-[#0a66c2] w-6 h-6" />
                </button> */}
                </div>

                <div className="px-6 pb-6 relative">
                    {/* Profile Picture */}
                    <div className="absolute -top-[60px] sm:-top-[110px] left-6 border-4 border-white rounded-full overflow-hidden w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] bg-white shadow-sm">
                        <Image
                            src="/my_image.png"
                            alt="Om Achrekar"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                            priority
                        />
                        {/* background_img.jpg */}
                    </div>

                    <div className="flex justify-end pt-3 mb-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-2">
                            <FontAwesomeIcon icon={faPenToSquare} className="text-gray-500 w-6 h-6" />
                        </button>
                    </div>

                    <div className="mt-12 sm:mt-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-1">
                                    Om Achrekar
                                    <span className="text-gray-500 text-sm font-normal">(He/Him)</span>
                                </h1>
                                <p className="text-base text-gray-900 mt-1">Software Development Engineer - I @Scogo.AI</p>

                                <div className="text-sm text-gray-500 mt-1 flex items-center gap-1 flex-wrap">
                                    <span>Mumbai, Maharashtra, India</span>
                                    <span className="mx-1">·</span>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setShowContactInfo(true); }} className="text-[#0a66c2] hover:underline font-semibold">Contact info</a>
                                </div>

                                <div className="text-sm text-[#0a66c2] font-semibold mt-2 hover:underline cursor-pointer">
                                    500+ connections
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-4 sm:mt-0">
                                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                                        {/* Placeholder for company logo */}
                                        <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl rounded-sm">
                                            S
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900">Scogo.AI</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <button className="btn-primary">Open to</button>
                            <button className="btn-secondary">Add profile section</button>
                            <button className="btn-tertiary">More</button>
                        </div>

                        {/* Carousel: Suggested for you / Opento work / etc */}
                        <div className="mt-6 p-4 bg-[#eef3f8] rounded-lg flex justify-between items-start cursor-pointer hover:bg-[#e6eff6] transition-colors relative">
                            <div>
                                <p className="text-sm font-semibold text-gray-900">Open to work</p>
                                <p className="text-sm text-gray-900">Software Engineer, Backend Engineer and AI Engineer roles</p>
                                <button className="text-[#0a66c2] text-sm font-semibold hover:underline mt-1">See all details</button>
                            </div>
                            <button className="p-1 hover:bg-gray-200 rounded-full absolute top-2 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false" className="text-gray-500"><path d="M14 3.26L12.74 2 8 6.74 3.26 2 2 3.26 6.74 8 2 12.74 3.26 14 8 9.26 12.74 14 14 12.74 9.26 8z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
