import React from 'react';

const Feed = ({ avatar, name, date, img }) => {
    return (
        <div className="feed">

            <div className="head">
                <div className="user">
                    <div className="profile-picture">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>{name}</h3>
                        <small>{date}</small>
                    </div>
                </div>
                <span className="edit"><i className="uil uil-ellipsis-h"></i></span>
            </div>

            <div className="photo">
                <img src={img} alt="" />
            </div>

            <div className="action-button">
                <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                </div>

                <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                </div>
            </div>

            <div className="liked-by">
                <span><img src="/images/profile-2.jpg" /></span>
                <span><img src="/images/profile-19.jpg" /></span>
                <span><img src="/images/profile-4.jpg" /></span>
                <p>liked By <b> Lana Soares </b><b> and </b>
                    324 others</p>
            </div>

            <div className="caption">
                <p><b>Lana Rose</b>Lorem ipsum dolor sit amet consectetur.
                    <span className="harsh-tag">#lifestyle</span>
                </p>
            </div>

            <div className="comment text-muted">
                View all 243 comments
            </div>

        </div>
    )
}

export default Feed;