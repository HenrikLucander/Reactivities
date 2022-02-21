import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
            .then(response => {
                console.log(response)
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
                {activities.map((activity: any) => (
                    <div className="item" key={activity.id}>
                        {activity.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
