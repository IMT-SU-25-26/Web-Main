import React from 'react'
import Image from 'next/image'
import { projectHmrIdentifiersSubscribe } from 'next/dist/build/swc/generated-native';

type FrameImageProps = {
    src: string;
    className?: string;
}

const FrameImage = ({src, className}:  FrameImageProps) => {
    return (
        <div className={`absolute bg-white p-2 z-0 ${className}`}>
            <div className='absolute bg-black/50 w-[55%] h-[15%] z-10 -top-4 left-[22%]'></div>
            <Image 
                className='w-full h-auto object-contain aspect-square'
                src={src}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
            >
            </Image>
        </div>
    )
}

export default FrameImage