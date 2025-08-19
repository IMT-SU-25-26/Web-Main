import { getAchievements } from '@/lib/service/achievement'
import React from 'react'
import AchievementsBackground from '@/components/achievement/dashboard/AchievementsBackground';
import AchievementsSearch from '@/components/achievement/dashboard/AchievementsSearch';

async function AchievementDashboard() {
  const achievements = await getAchievements();
  return (
    <>   
      <div className='h-[6.5vh]'></div>
      <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* decor image */}
        <AchievementsBackground />

        {/* Achievement search */}
        <AchievementsSearch achievements={achievements} />
      </div>
    
    </>
  )
}

export default AchievementDashboard