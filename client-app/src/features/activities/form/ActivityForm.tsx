import React from 'react'

export default function ActivityForm() {
    return (
        <div className="ui segment clearing">
            <form className="ui form">
                <div className="field">
                    <input type="text" name="Title" placeholder="Title" />
                </div>
                <div className="field">
                    <textarea name="Description" placeholder="Description" rows={1}></textarea>
                </div>
                <div className="field">
                    <input type="text" name="Category" placeholder="Category" />
                </div>
                <div className="field">
                    <input type="text" name="Date" placeholder="Date" />
                </div>
                <div className="field">
                    <input type="text" name="City" placeholder="City" />
                </div>
                <div className="field">
                    <input type="text" name="Venue" placeholder="Venue" />
                </div>
                <button className="ui button right floated positive" type="submit">Submit</button>
                <button className="ui button right floated" type="button">Cancel</button>              
            </form>
        </div>
        )
}