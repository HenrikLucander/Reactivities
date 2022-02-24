import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

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
                <ActivityDashboard activities={activities} />
            </div>
        </>
    );
}

export default App;