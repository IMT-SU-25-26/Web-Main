import DashboardBackground from '@/components/DashboardBackground'
import DashboardSearch from '@/components/DashboardSearch'
import { getCompetitions } from '@/lib/service/competition'
import { deleteCompetition } from '@/lib/service/competition'
import React from 'react'


async function CompetitionDashboard() {
    const competitions = await getCompetitions();
    return (
        <>
        <div className='h-[6.5vh]'></div>
        <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
            {/* decor image */}
            <DashboardBackground />

            {/* Achievement search */}
            <DashboardSearch items={competitions} deleteItem={deleteCompetition} label='Competition' urlForEdit='/dashboard/sa/competitions'/>
        </div>
        </>
    )
}

export default CompetitionDashboard