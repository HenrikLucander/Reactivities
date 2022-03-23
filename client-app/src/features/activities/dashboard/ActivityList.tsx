import { SyntheticEvent, useState } from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

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
                                <button onClick={() => selectActivity(activity.id)} className="ui button right floated blue">View</button>
                                {submitting && target == activity.id ?
                                    <button onClick={(e) => handleActivityDelete(e, activity.id)} className="ui button right floated red loading" name={activity.id}>Delete</button>
                                    : <button onClick={(e) => handleActivityDelete(e, activity.id)} className="ui button right floated red" name={activity.id}>Delete</button>
                                }
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