import React from 'react';
import Stoties from '../stories/Stoties';
import Feeds from "../feeds/Feeds";

const Main = () => {
  return (
    <div>
      <div className="middle">

        {/* srart dtory */}
        <Stoties />
        {/* end story  */}

        <form className="create-post">
          <div className="profile-picture">
            <img src="/images/profile-21.png" alt="" />
          </div>
          <input type="text" placeholder="What is on your mind , Arash?" id="create-post" />
          <input type="submit" value="Post" className="btn btn-primary" />
        </form>

        {/* feeds */}
        <Feeds />
        {/* end feeds */}

      </div>
    </div>
  )
}

export default Main