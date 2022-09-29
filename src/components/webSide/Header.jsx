import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className="container">

                    <h2 className="logo">
                        nokoSocial
                    </h2>

                    <div className="search-bar">
                        <i className="fa fa-search"></i>
                        <input type="search" placeholder="Search for Creators & Projects" />
                    </div>

                    <div className="create">
                        <label className="btn btn-primary" htmlFor="create-post">Create</label>
                        <div className="profile-picture">
                            <img src="images/profile-21.png" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header