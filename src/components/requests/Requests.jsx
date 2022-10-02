import React from 'react';
import Request from './Request';
import requests from '.';

const Requests = () => {
    return (
        <div className='frind-requests'>
            <h4>Requests</h4>

            {/* Requests => */}
            {
                requests.map((request) => {
                    return <Request
                        key={request.id}
                        avatar={request.avatar}
                        name={request.name}
                        mutualFrinds={request.mutualFrinds} />
                })
            }
        </div>
    )
}

export default Requests;