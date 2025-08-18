'use client';

import { Achievement } from '@/types/achievement';
import React from 'react'
import SearchBar from '../../SearchBar';

type AchievementListProps = {
    achievements?: Achievement[];
}

function  AchievementList( {achievements}: AchievementListProps) {
    
    return (
        <>
            <SearchBar items={achievements || []}>
                {(filteredAchievements) =>(
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredAchievements.map((achievement) => (
                            <div key={achievement.id} className="p-4 border rounded-lg shadow-sm">
                                <h2 className="text-lg font-semibold">{achievement.title}</h2>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </SearchBar>
        </>
    )
}

export default AchievementList