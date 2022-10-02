import React from 'react';
import Feed from './Feed';
import feed from '.'

const Feeds = () => {
    return (
        <div className='feeds'>
            {
                feed.map((post) => {
                    return <Feed
                        key={post.id}
                        avatar={post.avatar}
                        name={post.name}
                        date={post.date}
                        img={post.img} />
                })
            }
        </div>
    )
}

export default Feeds;