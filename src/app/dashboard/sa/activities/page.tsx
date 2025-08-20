import React from 'react'
import { getActivities } from '@/lib/service/activity';
import DashboardBackground from '@/components/dashboard/DashboardBackground';
import DashboardSearch from '@/components/dashboard/DashboardSearch';
import { deleteActivity } from '@/lib/service/activity';
import { SideNavSupport } from '@/types/dashboard'

export const metadata = {
  title: 'Activities',
  description: 'Activities Dashboard',
}

async function ActivitiesDashboard({handleSideNav} : SideNavSupport) {
  const activities = await getActivities();
  return (
    <>   
      <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* decor image */}
        <DashboardBackground />

        {/* Achievement search */}
        <DashboardSearch items={activities} deleteItem={deleteActivity}  label='Activities' urlForEdit='/dashboard/sa/activities'/>
      </div>
    
    </>
  )
}

export default ActivitiesDashboard