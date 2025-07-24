import React from 'react'
import Image from 'next/image'
import { projectHmrIdentifiersSubscribe } from 'next/dist/build/swc/generated-native';

type FrameImageProps = {
    src: string;
    width:number;
    height: number;
    className?: string;
}

const FrameImage = ({src, width, height, className}:  FrameImageProps) => {
    return (
        <div className={`absolute bg-white p-3 z-0 w-fit ${className}`}>
            <div className='absolute bg-black/50 w-[55%] h-[15%] z-10 -top-4 left-[22%]'></div>
            <Image 
                className=''
                src={src} 
                alt='' 
                width={width} 
                height={height}
            >
            </Image>
        </div>
    )
}

export default FrameImage