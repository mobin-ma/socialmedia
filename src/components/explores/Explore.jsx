import React from 'react';

const Explore = ({img}) => {
    return (
        <div className='explore'>
            <img src={img} alt="" />
            <div className='postHover'>
                <i className='bx bx-heart'></i>
                <i className='bx bx-bookmark'></i>
            </div>
        </div>
    )
}

export default Explore;