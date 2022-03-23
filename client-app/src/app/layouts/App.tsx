import React, { useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        agent.Activities.list().then(response => {
            response.map(function (item) {
                item.date = item.date.split('T')[0];
                return item
            })
            setActivities(response);
            setLoading(false);
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
        setSubmitting(true);
        if (activity.id) {
            agent.Activities.update(activity).then(() => {
                setActivities([...activities.filter(x => x.id !== activity.id), activity])
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        } else {
            activity.id = uuid();
            agent.Activities.create(activity).then(() => {
                setActivities([...activities, activity])
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }

    function handleDeleteActivity(id: string) {
        setActivities([...activities.filter(x => x.id !== id)])
    }

    if (loading) return <LoadingComponent content='Loading app'/>

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
                    submitting={submitting}
                />
            </div>
        </>
    );
}

export default App;