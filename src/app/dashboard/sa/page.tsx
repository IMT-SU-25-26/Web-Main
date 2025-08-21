import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {
    redirect("/dashboard/sa/competitions");
}

export default page