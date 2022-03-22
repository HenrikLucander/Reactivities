import React, { useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';

function App() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);


    useEffect(() => {
        agent.Activities.list().then(response => {
                setActivities(response);
            })
    }, [])

    function handleSelectActivity(id: String) {
        setSelectedActivity(activities.find(x => x.id === id));
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string) {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditActivity(activity: Activity) {
        activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) : setActivities([...activities, {...activity, id: uuid()}]);
        setEditMode(false);
        setSelectedActivity(activity);
    }

    function handleDeleteActivity(id: string) {
        setActivities([...activities.filter(x => x.id !== id)])
    }

    return (
        <>
            <NavBar openForm={handleFormOpen} />
            <div className="ui container" style={{ marginTop: '2em' }}>
                <ActivityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivity}
                />
            </div>
        </>
    );
}

export default App;