import React from 'react'

const RightSide = () => {
  return (
    <div>
      <div className="right">
        {/* message */}
        <div className="messages">
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

          <div className="message">
            <div className="profile-picture">
              <img src="/images/profile-1.jpg" alt="" />
                <div className="active"></div>
            </div>
            <div className="message-body">
              <h5>Lana Soares</h5>
              <p className="text-muted">Just work up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
              <img src="/images/profile-6.jpg" alt="" />
            </div>
            <div className="message-body">
              <h5>Marcelin Cortoa</h5>
              <p className="text-muted">Just work up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
              <img src="/images/profile-7.jpg" alt="" />

            </div>
            <div className="message-body">
              <h5>Sara Diaz</h5>
              <p className="text-muted">Just work up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
              <img src="/images/profile-19.jpg" alt="" />
                <div className="active"></div>
            </div>
            <div className="message-body">
              <h5>Soarez Jan</h5>
              <p className="text-muted">Just work up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
              <img src="/images/profile-3.jpg" alt="" />

            </div>
            <div className="message-body">
              <h5>Lana Soares</h5>
              <p className="text-muted">Just work up bruh</p>
            </div>
          </div>
          <div className="message">
            <div className="profile-picture">
              <img src="/images/profile-2.jpg" alt="" />

            </div>
            <div className="message-body">
              <h5>Elsa Messi</h5>
              <p className="text-muted">Just work up bruh</p>
            </div>
          </div>

        </div>

        {/* end message */}


        {/* start Request frind */}

        <div className="frind-requests">
          <h4>Requests</h4>
          <div className="request">
            <div className="info">
              <div className="profile-picture">
                <img src="/images/profile-19.jpg" alt="" />
              </div>
              <div>
                <h5>Haji Bento</h5>
                <p className="text-muted">8 mutual frinds</p>
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

          <div className="request">
            <div className="info">
              <div className="profile-picture">
                <img src="/images/profile-6.jpg" alt="" />
              </div>
              <div>
                <h5>soares Bento</h5>
                <p className="text-muted">5 mutual frinds</p>
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
          <div className="request">
            <div className="info">
              <div className="profile-picture">
                <img src="/images/profile-8.jpg" alt="" />
              </div>
              <div>
                <h5>Jani Dep</h5>
                <p className="text-muted">8 mutual frinds</p>
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
        </div>

      </div>
    </div>
  )
}

export default RightSide