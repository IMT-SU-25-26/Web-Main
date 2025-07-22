import React from 'react'

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
        <div>page</div>
        <div>page</div>
        <div>page</div>
        <div>page</div>
        <div>page nomor {id}</div>
        </>
    )
}

export default page