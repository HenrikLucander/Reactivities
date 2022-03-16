import React from 'react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <div className="ui inverted attached stackable menu">
            <div className="ui container">
                <a className="item header">
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Reactivities
                </a>
                <a className="item">
                    Activities
                </a>
                <a className="item">
                    <button onClick={openForm} className="ui blue button">
                        Create Activity
                    </button>
                </a>
            </div>
        </div>
    )
}