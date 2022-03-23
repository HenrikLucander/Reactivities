﻿import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined,
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting }: Props) {
    return (

        <div className="ui grid">
            <div className="ten wide column">
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
            </div>
            <div className="six wide column">
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />}
                {editMode &&
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />}
            </div>
        </div>
    )
}