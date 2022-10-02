import React from 'react';
// import { connect } from 'react-redux';
import DarkMode from '../darkMode/DarkMode';
// import { changeMode } from '../redux/actions/themeAction';

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
                        <DarkMode />
                        <label className="btn btn-primary" htmlFor="create-post">Create</label>
                        <div className="profile-picture">
                            <img src="images/profile-21.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

// const mapDispatchToProps = (dispatch) => {  
//     return {      
//        darkMode: (mode) => dispatch(changeMode(mode))  
//     };
//  } 

export default Header;