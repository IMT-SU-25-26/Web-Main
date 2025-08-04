import React from 'react'
import Image from 'next/image'
import FrameImage from '@/components/achievement/FrameImage'
import { getActivityById } from '@/lib/service/activity'
import Button from '@/components/Button'


type ActivityDetailsProps = {
    params:{
        activityId:string,
    }
}

const ActivityDetails = ({params}:ActivityDetailsProps) => {
    const id = params.activityId;
    const activity = getActivityById(id);

    const title = "HACKATON 2025"
    const subTitle = "Team: 3-4 members"
    const urlImg = "/activities/activityDetails/sample-image.png"
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    const slicedDescription = description.split("\n");

    return (
        <>
            <div className="h-[10vh] bg-[#F1EEE6]"></div>
            <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-[calc(100dvh-10vh)] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
                
                {/* Decorative Image */}
                <>
                    <Image 
                        className='absolute -right-3 -top-7 md:-top-15 w-[100px] md:w-[180px] xl:w-[300px] lg:w-[230px]'
                        src="/activities/activityDetails/top-right.webp" 
                        alt='' 
                        width={300} 
                        height={327}
                    >
                    </Image>

                    <Image 
                        className='absolute right-0 bottom-0 w-[200px] md:w-[300px] xl:w-[500px] lg:w-[370px]'
                        src="/activities/activityDetails/bottom-right.webp"
                        alt='' 
                        width={500} 
                        height={251}
                    >
                    </Image>

                    <Image 
                        className='absolute right-0 bottom-10 w-[200px] md:w-[300px] lg:w-[370px] xl:w-[300px]'
                        src="/activities/activityDetails/bottom-right2.webp"
                        alt='' 
                        width={500} 
                        height={251}
                    >
                    </Image>

                    <Image 
                        className='hidden md:block absolute -left-5 -top-23 w-[300px] lg:w-[400px] xl:w-[250px] '
                        src="/activities/activityDetails/top-left.svg" 
                        alt='' 
                        width={450}
                        height={287}
                    >
                    </Image>

                    <Image 
                        className='hidden md:block absolute left-50 top-0 w-[300px] lg:w-[400px] xl:w-[150px] '
                        src="/activities/activityDetails/top-left2.webp" 
                        alt='' 
                        width={450}
                        height={287}
                    >
                    </Image>

                    <Image 
                        className='hidden md:block absolute -left-0 -bottom-5 w-[200px] md:w-[300px] xl:w-[450px] lg:w-[200px]'
                        src="/activities/activityDetails/bottom-left.webp" 
                        alt='' 
                        width={450} 
                        height={287}
                    >
                    </Image>
                    
                    <Image 
                        className='absolute -left-45 bottom-35 w-[400px] md:w-[350px] z-0'
                        src="/activities/activityDetails/red-fan.svg"
                        alt='' 
                        width={720} 
                        height={701}
                    >
                    </Image>
                </>

                <div className='flex flex-col md:flex-row md:justify-center items-center md:items-start w-full z-0 gap-15 '>
                    <div className='block md:hidden mt-10 text-center'>
                        <h1 className='font-impact font-bold text-4xl'>{title}</h1>
                        <h3 className='font-bold text-xl mb-5'>{subTitle}</h3>
                    </div>
                    <div className='w-[300px] md:w-[300px] xl:w-[450px] h-[300px] md:h-[350px] xl:h-[472px] mt-5 md:mt-35 xl:mt-0 relative'>
                        <FrameImage src={urlImg?urlImg:""} className='w-[210px] md:w-[270px] xl:w-[400px] top-10 left-0 -rotate-15 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]'></FrameImage>
                    </div>
                    <div className='md:w-[40%] md:mt-10 w-[80%] z-10 mb-[12vh] '>
                        <div className='relative'>
                            <h1 className='hidden md:block font-impact font-bold text-5xl'>{title}</h1>
                            <h3 className='hidden md:block font-bold text-xl mb-5'>{subTitle}</h3>
                            
                            <Image 
                                className='absolute right-10 top-10 md:-top-15 w-[100px] md:w-[180px] lg:w-[230px] xl:w-[150px]'
                                src="/activities/activityDetails/among-us.svg" 
                                alt='' 
                                width={300} 
                                height={327}
                            >
                            </Image>
                        </div>

                        <div className='flex flex-col gap-5 text-xl'>
                            {slicedDescription.map((line, index)=>(
                                <p key={index}>{line}</p>
                            ))}
                            <Button bgColor='#ED4E45'>REGISTER</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityDetails