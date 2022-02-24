import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import NavBar from './navbar';

function App() {
    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
    }, [])

    return (
        <>
            <NavBar />
            <div className="ui container" style={{ marginTop: '2em' }}>
                <div className="ui list">
                    {activities.map(activity => (
                        <div className="item" key={activity.id}>
                            {activity.title}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;