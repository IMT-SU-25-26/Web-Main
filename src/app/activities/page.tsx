import { getActivities } from '@/lib/service/activity';
import PageClient from '../activities/PageClient';

export default async function ActivityPage() {
    const activities = await getActivities();

    return (
        <PageClient activities={activities}></PageClient>
    );
}
