import React from 'react';
import { Link } from "react-router-dom";

const LeftSite = () => {
    return (
        <div>
            <div className="left">
                <a className="profile">
                    <div className="profile-picture">
                        <img src="/images/profile-21.jpg" alt="" />
                    </div>
                    <div className="handle">
                        <h4>
                            MobinMadadi
                        </h4>
                        <p className="text-muted">
                            @mobinmadadi.react
                        </p>
                    </div>
                </a>

                {/* sidebar */}
                <div className="sidebar">
                    <Link to='/' className="menu-item">
                        <span><i className='bx bx-home'></i></span><h3>Home</h3>
                    </Link>

                    <Link to='/explore' className="menu-item">
                        <span><i className='bx bx-compass'></i></span><h3>Explore</h3>
                    </Link>

                    <a className="menu-item" id="notofications">
                        <span><i className='bx bx-bell'><small className="notifications-count">9+</small></i></span><h3>Notifications</h3>

                        {/* notification popup */}
                        <div className="notifications-popup">
                            <div>
                                <div className="profile-picture">
                                    <img src="/images/profile-1.jpg" />
                                </div>
                                <div className="notifications-body">
                                    <b>Lana </b>accepted your frind request
                                    <small className="text-muted">2 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div className="profile-picture">
                                    <img src="/images/profile-2.jpg" />
                                </div>
                                <div className="notifications-body">
                                    <b>Sara </b>comment on your post
                                    <small className="text-muted">4 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div className="profile-picture">
                                    <img src="/images/profile-3.jpg" />
                                </div>
                                <div className="notifications-body">
                                    <b>Elsa </b>like on your post
                                    <small className="text-muted">2 MINUT AGO</small>
                                </div>
                            </div>
                            <div>
                                <div className="profile-picture">
                                    <img src="/images/profile-4.jpg" />
                                </div>
                                <div className="notifications-body">
                                    <b>Moka </b>accepted your frind request
                                    <small className="text-muted">6 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div className="profile-picture">
                                    <img src="/images/profile-5.jpg" />
                                </div>
                                <div className="notifications-body">
                                    <b>David </b>comment on your post
                                    <small className="text-muted">2 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div className="profile-picture">
                                    <img src="/images/profile-19.jpg" />
                                </div>
                                <div className="notifications-body">
                                    <b>Kortoa </b>accepted your frind request
                                    <small className="text-muted">1 DAYS AGO</small>
                                </div>
                            </div>
                        </div>
                        {/* end notification popup */}
                    </a>

                    <a className="menu-item" onClick={messages}>
                        <span><i className='bx bx-envelope' ><small className="notifications-count">6</small></i></span><h3>Messages</h3>
                    </a>

                    <a className="menu-item">
                        <span><i className='bx bx-bookmark' ></i></span><h3>Bookmarks</h3>
                    </a>

                    <a className="menu-item">
                        <span><i className='bx bx-line-chart'></i></span><h3>Analytics</h3>
                    </a>

                    <a className="menu-item">
                        <span><i className='bx bx-cog' ></i></span><h3>Settings</h3>
                    </a>

                </div>
                {/* end sidebar  */}

                <label className="btn btn-primary" htmlFor="create-post">Create Post</label>

            </div>
        </div>
    )
}

export default LeftSite;