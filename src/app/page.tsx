import { getLatestActivities } from "@/lib/service/activity";
import ClientHomePage from "@/components/ClientHomePage";

export const metadata = {
  title: "Home - SU IMT",
  description: "Student Union Information and Multimedia Technology - Your Creative Tech Community",
};

export default async function Home() {
  const latestActivities = await getLatestActivities(3);

  return <ClientHomePage latestActivities={latestActivities} />;
}
