import React from 'react';
import Messages from '../messages/Messages';
import Requests from '../requests/Requests';

const RightSite = () => {
  return (
    <div>
      <div className="right">
        {/* message */}
        <Messages />
        {/* end message */}


        {/* start Request frind */}
        <Requests />
        {/* end Request frind */}
      </div>
    </div>
  )
}

export default RightSite;