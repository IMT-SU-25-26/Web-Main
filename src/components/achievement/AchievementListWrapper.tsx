import { getAchievements } from "@/lib/service/achievement";
import AchievementList from "./AchievementList";

export default async function AchievementListWrapper() {
  const achievements = await getAchievements();
  
  return <AchievementList achievements={achievements} />;
}