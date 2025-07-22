import React from 'react'
import Image from 'next/image'

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
            <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
                
                {/* Decorative Image */}
                <>
                    <Image 
                        className='absolute right-0 -top-20'
                        src="/achievements/achievementDetails/top-right.png" 
                        alt='' 
                        width={300} 
                        height={327}
                    >
                    </Image>

                    <Image 
                        className='absolute right-0 bottom-0'
                        src="/achievements/achievementDetails/bottom-right.png" 
                        alt='' 
                        width={500} 
                        height={251}
                    >
                    </Image>

                    <Image 
                        className='absolute -left-5 -top-35'
                        src="/achievements/achievementDetails/top-left.png" 
                        alt='' 
                        width={507} 
                        height={323}
                    >
                    </Image>

                    <Image 
                        className='absolute -left-0 -bottom-5'
                        src="/achievements/achievementDetails/bottom-left.png" 
                        alt='' 
                        width={507} 
                        height={323}
                    >
                    </Image>
                </>

                <div className='bg-red-600'>
                    <div>

                    </div>
                    <div>
                        <h1>HACKATON WINNERS</h1>
                        <h3>Team: 3-4 members</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default page