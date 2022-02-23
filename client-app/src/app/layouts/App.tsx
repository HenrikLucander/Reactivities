import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';

function App() {
    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
    }, [])

    return (
        <div>   
            <h4 className="ui header">
                <i className="users icon"></i>
                <div className="content">
                    Reactivities
                </div>
            </h4>
            <div className="ui list">
                {activities.map(activity => (
                    <div className="item" key={activity.id}>
                        {activity.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
