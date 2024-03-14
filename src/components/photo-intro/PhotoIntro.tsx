'use client'
import React, { useEffect, useState } from 'react';
import {PHOTO_INTRO_TEXT} from "@/texts/photo-intro.text";

const PhotoIntro = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center text-white relative" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/dach.jpg')`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
            height: '100vh',
            width:'100vw'
        }}>
            <h1 className={`text-white text-2xl lg:text-[50px] font-extrabold opacity-0 absolute ${isVisible ? "animate-fade-in" : ""}`}>
                {PHOTO_INTRO_TEXT.title}
            </h1>
            <h1 className={`text-white text-2xl lg:text-[50px] font-extrabold opacity-0 pt-24 ${isVisible ? "animate-fade-in-delay" : ""}`}>
                {PHOTO_INTRO_TEXT.subtitle}
            </h1>
        </div>
    );
}

export default PhotoIntro;
