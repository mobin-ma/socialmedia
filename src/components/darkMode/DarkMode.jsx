import React, { useState } from 'react';

const DarkMode = () => {

    const [chengeMode, setChengeMode] = useState(false);
    const chengModeToBody = () => {
        const body = document.getElementById('body');
        if (chengeMode === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }
    chengModeToBody();

    return (
        <button className='btn-theme' onClick={() => !chengeMode ? setChengeMode(true) : setChengeMode(false)}>
            <i className={chengeMode ? 'bx bx-sun' : 'bx bx-moon'}></i>
        </button>
    )
}

export default DarkMode;