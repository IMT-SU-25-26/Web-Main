import { redirect } from 'next/navigation'

const page = () => {
    redirect("/dashboard/sa/activities");
}

export default page