import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity }: Props) {
    return (
        <div className="ui segment">
            <div className="ui divided items">
                {activities.map(activity => (
                    <div className="item" key={activity.id}>
                        <div className="content">
                            <a className="header">{activity.title}</a>
                            <div className="meta">{activity.date}</div>
                            <div className="description">
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </div>
                            <div className="extra">
                                <button onClick={() => selectActivity(activity.id)}  className="ui button right floated blue">View</button>
                                <div className="ui basic label">
                                    {activity.category}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}