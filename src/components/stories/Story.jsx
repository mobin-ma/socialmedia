import React from 'react'

const Story = ({avatar, userName}) => {
    return (
        <div className="story">
            <div className="profile-picture">
                <img src={avatar}alt="" />
            </div>
            <p className="name">{userName}</p>
        </div>
    )
}

export default Story