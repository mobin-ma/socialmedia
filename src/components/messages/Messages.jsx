import React from 'react';
import Message from './Message';
import messages from '.';

const Messages = () => {
    return (
        <div className='messages' id='messages'>
            <div className="heading">
                <h4>Messages</h4><i className="uil uil-edit"></i>
            </div>
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search Message" id="massege-search" />
            </div>
            <div className="categgory">
                <h6 className="active">Primary</h6>
                <h6>General</h6>
                <h6 className="requesr-massege">Requests(7)</h6>
            </div>

            {/* Messages => */}
            {
                messages.map((message) => {
                    return <Message
                        key={message.id}
                        avatar={message.avatar}
                        name={message.name}
                        description={message.description}
                        active={message.active} />
                })
            }
        </div>
    )
}

export default Messages;