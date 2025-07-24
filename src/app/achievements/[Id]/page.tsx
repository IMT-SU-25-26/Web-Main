import React from 'react'
import Image from 'next/image'
import FrameImage from '@/components/achievement/FrameImage'

type achievementDetailsProps = {
    params:{
        id:string
    }
}

const page = ({params} : achievementDetailsProps) => {
    const {id} = params;
    console.log("params = ", params);
    return (
        <>
            <div className="h-[10vh] bg-[#F1EEE6]"></div>
            <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-[calc(100dvh-10vh)] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
                
                {/* Decorative Image */}
                <>
                    <Image 
                        className='absolute -right-3 -top-7 md:-top-15 w-[100px] md:w-[180px] xl:w-[300px] lg:w-[250px]'
                        src="/achievements/achievementDetails/top-right.png" 
                        alt='' 
                        width={300} 
                        height={327}
                    >
                    </Image>

                    <Image 
                        className='absolute right-0 bottom-0 w-[200px] md:w-[300px] xl:w-[500px] lg:w-[370px]'
                        src="/achievements/achievementDetails/bottom-right.png" 
                        alt='' 
                        width={500} 
                        height={251}
                    >
                    </Image>

                    <Image 
                        className='absolute -left-5 -top-35 w-[300px] xl:w-[450px] lg:w-[400px]'
                        src="/achievements/achievementDetails/top-left.png" 
                        alt='' 
                        width={450} 
                        height={287}
                    >
                    </Image>

                    <Image 
                        className='absolute -left-0 -bottom-5 w-[200px] md:w-[300px] xl:w-[450px] lg:w-[350px]'
                        src="/achievements/achievementDetails/bottom-left.png" 
                        alt='' 
                        width={450} 
                        height={287}
                    >
                    </Image>
                </>

                <div className='flex flex-col md:flex-row md:justify-center items-center md:items-start w-full z-0 gap-15 '>
                    <div className='block md:hidden mt-8 text-center'>
                        <h1 className='font-impact font-bold text-3xl'>HACKATON WINNERS {id}</h1>
                        <h3 className='font-bold text-xl mb-5'>Team: 3-4 members</h3>
                    </div>
                    <div className='md:w-[28%] w-[75%] h-[300px] mt-5 md:mt-35 md:h-[260px] lg:h-[472px] relative'>
                        <Image 
                            className='absolute -left-45 -top-20 w-[600px] md:w-[500px] z-0'
                            src="/achievements/achievementDetails/decor-bg-circle.png"
                            alt='' 
                            width={720} 
                            height={701}
                        >
                        </Image>
                        <Image 
                            className='absolute -left-7 md:-left-20 bottom-5 md:-bottom-20 z-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] w-[140px] md:w-[130px] lg:w-[240px]'
                            src="/achievements/achievementDetails/decor-bg-camera.png" 
                            alt='' 
                            width={250} 
                            height={186}
                        >
                        </Image>
                        
                        <FrameImage src='/achievements/achievementDetails/sample-picture.png' className='w-[150px] md:w-[150px] -top-10 left-0 md:-left-13 -rotate-15 z-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]'></FrameImage>
                        <FrameImage src='/achievements/achievementDetails/sample-picture.png' className='w-[250px] md:w-[200px] bottom-0 right-0 rotate-15 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]'></FrameImage>

                    </div>
                    <div className='md:w-[40%] md:mt-10 w-[80%] z-10 mb-[12vh] '>
                        <h1 className='hidden md:block font-impact font-bold text-5xl'>HACKATON WINNERS {id}</h1>
                        <h3 className='hidden md:block font-bold text-xl mb-5'>Team: 3-4 members</h3>

                        <div className='flex flex-col gap-5 text-xl'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page