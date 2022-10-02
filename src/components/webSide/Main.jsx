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

        {/* feeds */}
        <Feeds />
        {/* end feeds */}

      </div>
    </div>
  )
}

export default Main