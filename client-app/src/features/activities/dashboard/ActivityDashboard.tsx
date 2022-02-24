import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
    return (
        <div className="ui ten column doubling stackable grid container">
            <div className="ui list">
                {activities.map(activity => (
                    <div className="column" key={activity.id}>
                        {activity.title}
                    </div>
                ))}
            </div>
        </div>
    )
}