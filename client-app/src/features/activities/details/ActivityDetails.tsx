import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <div className="ui card fluid">
            <div className="image">
                <img src={`/assets/categoryImages/${activity.category}.jpg`} />
            </div>
            <div className="content">
                <a className="header">{activity.title}</a>
                <div className="meta">
                    <span>{activity.date}</span>
                </div>
                <div className="description">
                    {activity.description}
                </div>
            </div>
            <div className="extra content">
                <div className="ui basic buttons">
                    <div onClick={() => openForm(activity.id)} className="ui basic blue button">Edit</div>
                    <div onClick={cancelSelectActivity} className="ui basic grey button">Cancel</div>
                </div>
            </div>
        </div>
    )
}