import { ChangeEvent, FormEvent, useState } from 'react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <div className="ui segment clearing">
            <form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                <div className="field">
                    <input type="text" placeholder="Title" name="title" value={activity.title} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <textarea placeholder="Description" rows={1} name="description" value={activity.description} onChange={handleInputChange}></textarea>
                </div>
                <div className="field">
                    <input type="text" placeholder="Category" name="category" value={activity.category} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="date" placeholder="Date" name="date" value={activity.date} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="City" name="city" value={activity.city} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <input type="text" placeholder="Venue" name="venue" value={activity.venue} onChange={handleInputChange} />
                </div>
                {submitting ? <button className="ui button right floated positive loading" type="submit">Submit</button>
                    : <button className="ui button right floated positive" type="submit">Submit</button>
                }
                <button onClick={closeForm} className="ui button right floated" type="button">Cancel</button>
            </form>
        </div>
    )
}