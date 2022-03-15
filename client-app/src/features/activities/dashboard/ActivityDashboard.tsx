import React from 'react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
    return (

        <div className="ui grid">
            <div className="ten wide column">
                <ActivityList activities={activities} />
            </div>
            <div className="six wide column">
                {activities[0] &&
                    <ActivityDetails activity={activities[0]} />}
                <ActivityForm />
            </div>
        </div>
    )
}