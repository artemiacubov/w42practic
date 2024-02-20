import React from 'react';
import './Profile.css'
function Profile({icon}) {
    return (
        <>
            <div className='main-div-prof'>

                    <div className='frst-div-prof'>

                        <div className='icon-div-prof'>

                            <div className='icon-container-prof'>
                                <img src={icon} alt="icon" className="img-prof"/>
                            </div>
                            
                            <div className='content-container'>
                                123
                            </div>

                        </div>

                        <div className='text-div-prof'>

                            <div className='content-container'>
                                321
                            </div>

                            <div className='content-container'>
                                231
                            </div>

                        </div>

                    </div>

            </div>
        </>
    );
}

export default Profile;
