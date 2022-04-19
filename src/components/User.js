import React, { useState, useEffect } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
    //STATE & VARIABLES
    const [profile, setProfile] = useState(null);

    //useEFFECT
    useEffect(() => {
        //purposely delay request in order for us to see the skeleton
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setProfile(data);
        }, 0);
    }, [])
    return(
        <div className="articles">
            <h2>User Details</h2>
            {profile && (
                <div className='profile'>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}

            {!profile && <SkeletonProfile theme='dark' />}
        </div>

    );
}

export default User;