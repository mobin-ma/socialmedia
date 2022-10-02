import React from 'react';
import explorePosts from '.';
import Explore from './Explore';

const Explores = () => {
  return (
    <div className='explores'>
      {
        explorePosts.map((post) => {
          return <Explore key={post.id} img={post.img} />
        })
      }
    </div>
  )
}

export default Explores;