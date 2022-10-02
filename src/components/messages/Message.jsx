import React from 'react';

const Message = ({ avatar, name, description, active }) => {
    return (
        <div className="message">
            <div className="profile-picture">
                <img src={avatar} alt="" />
                <div className={active === true ? 'active' : null}></div>
            </div>
            <div className="message-body">
                <h5>{name}</h5>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    )
}

export default Message;