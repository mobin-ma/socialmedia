import React from 'react';

const Request = ({ avatar, name, mutualFrinds }) => {
    return (
        <div className="request">
            <div className="info">
                <div className="profile-picture">
                    <img src={avatar} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p className="text-muted">{mutualFrinds}</p>
                </div>
            </div>
            <div className="action">
                <button className="btn btn-primary">
                    Accept
                </button>

                <button className="btn">
                    Decline
                </button>
            </div>
        </div>
    )
}

export default Request;