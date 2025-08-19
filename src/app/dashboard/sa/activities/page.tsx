import { getAchievements } from '@/lib/service/achievement'
import React from 'react'
import ActivitySearch from '@/components/activity/dashboard/ActivitiesSearch';
import { getActivities } from '@/lib/service/activity';
import DashboardBackground from '@/components/DashboardBackground';

async function AchievementDashboard() {
  const activities = await getActivities();
  return (
    <>   
      <div className='h-[6.5vh]'></div>
      <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* decor image */}
        <DashboardBackground />

        {/* Achievement search */}
        <ActivitySearch activities={activities} />
      </div>
    
    </>
  )
}

export default AchievementDashboard