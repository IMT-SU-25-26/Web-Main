import { getAchievements } from '@/lib/service/achievement'
import React from 'react'
import DashboardSearch from '@/components/dashboard/DashboardSearch';
import DashboardBackground from '@/components/dashboard/DashboardBackground';
import { deleteAchievement } from '@/lib/service/achievement';

async function AchievementDashboard() {
  const achievements = await getAchievements();

  return (
    <>   
      <div className='h-[6.5vh]'></div>
      <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* decor image */}
        <DashboardBackground />

        {/* Achievement search */}
        <DashboardSearch items={achievements} deleteItem={deleteAchievement} label='Achievement' urlForEdit='/dashboard/pr'/>
      </div>
    
    </>
  )
}

export default AchievementDashboard